import React from 'react'
import { useParams } from "react-router-dom";
 import { useNavigate } from 'react-router-dom';
const users = [
  { id: 1, name: 'Dwight L. Moody', email: 'dwight@example.com', image: '/africans.jpg', quote: "The Bible was not given for our information, but for our transformation." },
  { id: 2, name: 'Charmey Spurgeon', email: 'Charmey@example.com', image: '/aiphoto.jpeg', quote: "A Bible that’s falling apart usually belongs to someone who isn’t." },
  { id: 3, name: 'Billy Graham', email: 'Billy@example.com', image: '/photo-white.jpeg', quote: "The Bible is God’s love letter to us." },
  { id: 4, name: 'Mark Jane', email: 'Markt@example.com', image: '/random3.jpeg', quote: "The Bible is the best gift God has given to man" },
  { id: 5, name: 'Charles Nichols', email: 'Charles@example.com', image: '/random2.jpeg', quote: "It is impossible to rightly govern the world without God and the Bible." },
  { id: 6, name: 'Bibin Thomas', email: 'Bibin@example.com', image: '/indianman.jpg', quote: "In darkness, God’s truth shines the brightest through His Word." },
];
function IndUser() {
  const { id } = useParams();
  const user = users.find((u) => u.id === Number(id));
const navigate = useNavigate();


  if (!user) return <h2>User not found!</h2>;

  return (
    
    <div style={{ padding: "20px" }}>
        <button onClick={()=>navigate('/users')}>Back to User List</button>
      <h1>User Details</h1>

      <img
        src={user.image}
        alt={user.name}
   
      />

      <h2>{user.name}</h2>

      <p><strong>Email:</strong> {user.email}</p>

      <p><strong></strong> {user.quote}</p>
    </div>
  );
}

export default IndUser;
