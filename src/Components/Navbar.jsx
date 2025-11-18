import Nav from 'react-bootstrap/Nav';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function Navigation() {
  return (
     <div className="background-container">
    <Nav
      activeKey="/"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <Link to="/home">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/users">Users</Link>
      
    </Nav>
    </div>
  );
}

export default Navigation;