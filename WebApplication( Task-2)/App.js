import React,{ useState } from 'react';
import './App.css';

function App() { 
  const [user,setUser]=useState([]);
  
  const fetchData = () => {
    fetch("https://reqres.in/api/users?page=1")
      .then((res) => res.json())
      .then((dat) => setUser(dat.data))
  };
  const viewdata=() => {
    fetchData();
  }
  return (
    
    <div className='App'>
      <nav>
        <h1>Avatar</h1>
      </nav>
      <button onClick={viewdata}>Get Users</button>
      <table>
        {user.map((e)=>(
            <tr>
            <td><b>id:</b>{e.id}<br/>
            <b>first_name:</b>{e.first_name}<br/>
            <b>last_name:</b>{e.last_name}<br/>
            <b>Email:</b>{e.email}</td>
            <td id='im'> <img src={e.avatar} alt="avatar" /></td>
            </tr>
        
        ))}
      </table>

    </div>  
  );
}
export default App;
