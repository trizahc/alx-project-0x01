import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header style={{ 
      padding: '20px', 
      backgroundColor: '#0070f3', 
      color: 'white',
      marginBottom: '30px'
    }}>
      <nav>
        <Link href="/" style={{ marginRight: '15px', color: 'white', textDecoration: 'none' }}>
          Home
        </Link>
        <Link href="/posts" style={{ marginRight: '15px', color: 'white', textDecoration: 'none' }}>
          Posts
        </Link>
        <Link href="/users" style={{ color: 'white', textDecoration: 'none' }}>
          Users
        </Link>
      </nav>
    </header>
  );
};

export default Header;
