  
    import React from 'react';
    import { Link } from 'react-router-dom';
   

    const UserCard = ({ user }) => {
      return (
        <div style={{ border: '1px solid #ccc', margin: '20px', padding: '10px',width:'250px', alignItems:'center', justifyContent: 'center' }}>
         
          <img 
  style={{ width: '200px', display: 'block'}}
  src={user.image}
  alt=""
/>
          <h3>{user.name}</h3>
          <p>Email: {user.email}</p>
          <p style={{color: 'purple'}}> <i> <b>{user.quote}</b></i></p>
          <Link to={`${user.id}`}>
          <button>View Details</button></Link>
        </div>
      );
    };

    export default UserCard;