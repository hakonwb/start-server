require('dotenv').config();
const OpenAI = require('openai');
const axios = require ('axios');
const pdf = require('pdf-parse');

async function getResponseChat(req, res) {
  const { prompt,context,InsertPdfUrl } = req.body;
  const openai = new OpenAI(process.env.OPENAI_API_KEY);
  let contextFile = '';

  if(InsertPdfUrl){
    try{
      const response = await axios.get(InsertPdfUrl, { responseType: 'arraybuffer' });
      const data = await pdf(response.data);
      contextFile = data.text.slice(0, 1300);
    } catch (error) {
      console.error('Error leyendo el PDF:', error);
      return res.status(500).send('Error leyendo el PDF');
    }
  }
  const bothContext = `${context}\n\n${contextFile}`.trim();
  try {
    const stream = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'assistant', content: bothContext },
        { role: 'user', content: prompt },
      ],
      stream: true,
      
    });
    let responseText = '';
    for await (const chunk of stream) {
      responseText += chunk.choices[0]?.delta?.content || '';
    }
    return res.json({ response: responseText });
  } catch (error) {
    console.error("Error comunicandose con la api", error);
    res.status(500).send(error);
  }
}

module.exports = { getResponseChat };