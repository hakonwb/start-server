import { useEffect, useState } from "react";
import { useParams } from "react-router";
import PrevDescription from "./components/PrevDescription";
import CardInfo from "./components/CardInfo";
import NavigationBar from '../../shared/NavigationBar.jsx';


const Users = () => {
    const { id } = useParams();

    const [form, setForm] = useState({
        context:'',
        description: '',
        prescription: '',
        InsertPdfUrl: ''
    });

    const [user, setUser] = useState([]);
    const [descriptions, setDescriptions] = useState([]);
    const [respons, setRespons] = useState('');

    const fetchDescription = async () => {
        console.log('ID from users', id);
        console.log('fetching description');
        const respons = await fetch('http://localhost:3000/description/' + id);
        const data = await respons.json();
        setDescriptions(data);
        console.log(data);
    }

    const fetchFeedback = async () => {
        console.log(id);
        const response = await fetch('http://localhost:3000/feedback/' + id);
        const data = await response.json();
        console.log(data);
    }

    const fetchUserById = async () => {
        const response = await fetch('http://localhost:3000/users/' + id);
        const data = await response.json();
        setUser(data);
        return data;
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setForm(prevForm => ({
            ...prevForm,
            [name]: value
        }));
    }
    const handleSaveData = async () => {
        const sendJson = {
            description: form.description,
            prescription: form.prescription
        }
        const act = await fetch(`http://localhost:3000/description/${id}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(sendJson),
    });
}

    const handleGenerateHelp = async () => {
        const prompt = {
            prompt: form.description,
            context: form.context,
            InsertPdfUrl: form.InsertPdfUrl,
        };

        const send = await fetch(`http://localhost:3000/chat/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(prompt),
        });
        const s = await send.json();
        const resp = s.response;
        setRespons(resp);
        form.prescription = resp;
        //setForm({ ...form, prescription: s.send });        
    }

    useEffect(() => {
        fetchDescription();
        fetchFeedback();
        fetchUserById();
    }, []);

    return (
        <NavigationBar>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
  <div style={{ width: "30%", marginRight: "20px" }}>
    <CardInfo user={user} />
    <PrevDescription description={descriptions} />
  </div>
  <div style={{ width: "70%", marginLeft: "300px" }}>
    <div>

    <p style={{fontSize:"20px", color:"white", fontWeight:'600'}}>Insert PDF URL</p>
      <textarea
        label="PDF URL"
        value={form.InsertPdfUrl}
        name="InsertPdfUrl"
        onChange={handleInputChange}
      />

      <p style={{fontSize:"20px", color:"white",fontWeight:'600'}}>Context</p>
      <textarea
        label="Context"
        value={form.context}
        name="context"
        onChange={handleInputChange}
      />

      <p style={{fontSize:"20px", color:"white",fontWeight:'600'}}>Description</p>
      <textarea
        label="Description"
        value={form.description}
        name="description"
        onChange={handleInputChange}
      />
      <div>
        <button
          onClick={handleGenerateHelp}
          style={{
            height: '50px',
            width: '140px',
            backgroundColor: '#399C7E',
            border: 'none',
            color: 'white',
            cursor: 'pointer',
            fontSize: '15px',
            fontWeight: 'bold',
            textAlign: 'center',
            borderRadius: '5px',
          }}
          type="submit"
        >
          Submit
        </button>
      </div>
      <p style={{fontSize:"20px", color:"white",fontWeight:'600'}}>Prescription</p>
      <textarea
        defaultValue={respons}
        label="Prescription"
        value={form.prescription}
        name="prescription"
        onChange={handleInputChange}
      ></textarea>
      <div>
        <button
          onClick={handleSaveData}
          style={{
            height: '50px',
            width: '140px',
            backgroundColor: '#399C7E',
            border: 'none',
            color: 'white',
            cursor: 'pointer',
            fontSize: '15px',
            fontWeight: 'bold',
            textAlign: 'center',
            borderRadius: '5px',
          }}
          type="submit"
        >
          Save
        </button>
      </div>
    </div>
  </div>
</div>
        </NavigationBar>
    );
}

export default Users;
