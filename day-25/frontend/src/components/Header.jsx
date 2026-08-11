import React from 'react'

const Header = () => {
  return (
    <div>
        <h1>My App</h1>
        <nav style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <ul style={{display: 'flex', listStyleType: 'none', gap: '10px'}}>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </nav>
    </div>
  )
}

export default Header