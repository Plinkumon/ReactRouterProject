import React from 'react'

function Footer() {
  return (
    <footer
      style={{
        background: "#222",
        color: "#fff",
        padding: "15px",
        textAlign: "center",
        marginTop: "40px"
      }}
    >
      <p>© {new Date().getFullYear()} Holy Bible. All rights reserved.</p>
    </footer>
  )
}

export default Footer