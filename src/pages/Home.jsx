import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Home = () => {
  const [users, setUsers] = useState([])
  async function getUsers() {
    const {data} = await axios.get('https://jsonplaceholer.typicode.com/users/1')
    setUsers(data)
  }
useEffect(()=>{
 getUsers();
}, [])

  return (
    <div className="container">
  <div className="row">
    <div className="user-list">
   { 
    users.map((user) =>(

 <div className="user" key={user.id}>
        <div className="user-card">
          <div className="user-card__container">
            <h3>{user.name}</h3>
            <p>
              <b>Email:</b> {user.email}
            </p>
            <p>
              <b>Phone:</b> {user.phone}
            </p>
            <p>
              <b>Website:</b>
              {user.website}
            </p>
          </div>
        </div>
      </div>
    ))
    
      }
    </div>
  </div>
</div>
  )
}

export default Home
