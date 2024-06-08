import { useState } from 'react';

const Form = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    age: '',
    adress: '',
    gender:'',
    profesion:''
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    const newForm = {
      ...form,
      [name]: value,
    };
    setForm(newForm);
    console.log(form);
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });
      return res.status === 200
        ? alert('Registro exitoso')
        : alert('Error al registrar');
    } catch (error) {
      alert('Error al registrar');
      throw new Error('Error al registrar');
    }
  };

  return (
    <div>
      <h1 style={{color:"white", fontSize:"48px"}}>Registro de Usuario</h1>
      <form style={{ display: 'flex', flexDirection: 'column' }}>
        <p style={{fontSize:"20px"}}>Name</p>
        <input
          style={{height: '45px', width:'60%', paddingLeft: '5px', borderRadius: '5px', border: '1px solid #399C7E'}}
          type="text"
          name="name"
          placeholder="Nombre"
          value={form.name}
          onChange={handleChange}
        />
        <p style={{fontSize:"20px"}}>Email</p>
        <input
          style={{ height: '45px', width:'60%', paddingLeft: '5px', borderRadius: '5px', border: '1px solid #399C7E'}}
          type="text"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />
        <p style={{fontSize:"20px"}}>Age</p>
        <input
          style={{ height: '45px', width:'60%', paddingLeft: '5px', borderRadius: '5px', border: '1px solid #399C7E'}}
          type="int"
          name="age"
          placeholder="Age"
          value={form.age}
          onChange={handleChange}
        />
        <p style={{fontSize:"20px"}}>Adress</p>
        <input
          style={{ height: '45px', width:'60%', paddingLeft: '5px', borderRadius: '5px', border: '1px solid #399C7E'}}
          type="text"
          name="adress"
          placeholder="Adress"
          value={form.adress}
          onChange={handleChange}
        />
        <p style={{fontSize:"20px"}}>Gender</p>
        <input
          style={{ height: '45px', width:'60%', paddingLeft: '5px', borderRadius: '5px', border: '1px solid #399C7E'}}
          type="text"
          name="gender"
          placeholder="Gender"
          value={form.gender}
          onChange={handleChange}
        />
        <p style={{fontSize:"20px"}}>Profession</p>
        <input
          style={{ height: '45px', width:'60%', paddingLeft: '5px', borderRadius: '5px', border: '1px solid #399C7E'}}
          type="text"
          name="profesion"
          placeholder="Profession"
          value={form.profesion}
          onChange={handleChange}
        />
        <div style={{ paddingTop: '5%' }}>
          <button
            onClick={handleSubmitForm}
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
            Registrar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;