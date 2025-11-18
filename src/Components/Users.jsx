import React from 'react'
import UserCard from './UserList'
import { Outlet } from "react-router-dom";
    import { useNavigate } from 'react-router-dom';
const usersList = [
      { id: 1, name: 'Dwight L. Moody', email: 'dwight@example.com',image: './africans.jpg', quote:"The Bible was not given for our information, but for our transformation." },
      { id: 2, name: 'Charmey Spurgeon', email: 'Charmey@example.com',image:'./aiphoto.jpeg', quote :"A Bible that’s falling apart usually belongs to someone who isn’t."},
      { id: 3, name: 'Billy Graham', email: 'Billy@example.com', image:'./photo-white.jpeg', quote :"The Bible is God’s love letter to us." },
       { id: 1, name: 'Mark Jane', email: 'Markt@example.com',image: './random3.jpeg', quote:"The Bible is the best gift God has given to man" },
      { id: 2, name: 'Charles Nichols', email: 'Charles@example.com',image:'./random2.jpeg', quote :"It is impossible to rightly govern the world without God and the Bible."},
      { id: 3, name: 'Bibin Thomas', email: 'Bibin@example.com', image:'./indianman.jpg', quote :"In darkness, God’s truth shines the brightest through His Word." },
    ];

function Users() {
    const navigate = useNavigate();
  return (
    <div>
        <button onClick={()=>navigate('/home')}>Back to HomePage</button>
         <h1>Users List</h1>
        <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
         
          {usersList.map(user => (
            <UserCard key={usersList.id} user={user} />
          ))}
          <Outlet />
          </div>

      
    </div>
        </div>
  )
}

export default Users