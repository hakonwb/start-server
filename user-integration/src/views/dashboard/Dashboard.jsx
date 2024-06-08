import { useState } from 'react';
import { useEffect } from 'react';
import Card from './components/Card';
import NavigationBar from '../../shared/NavigationBar.jsx';

const Dashboard = () =>{
    const [query, setQuery] = useState('');
    const [users, setUsers] = useState([]);


    const fetchUsers = async() => {
        const response = await fetch('http://localhost:3000/users')
        const data = await response.json();
        setUsers(data);
        console.log(data);
    }


    useEffect(() => {
        fetchUsers();
    }, [])
    return (
        <NavigationBar setQuery={setQuery}>
        <>
        <h1 style={{display:"flex", justifyContent:"center",color:"white"}}> Usuarios</h1>
        <div className='Grid'  style={{display:"grid", gridTemplateColumns: "repeat(5, 1fr)", gap:"10px"}}>
            
            {users.filter((user)=>user.name.toLowerCase().includes(query.toLowerCase())).map((user) => (
                <div key={user.id}>
                    <Card user={user} />
                </div>
            ))}
        </div>
        </>
        </NavigationBar>
    );
};


export default Dashboard;