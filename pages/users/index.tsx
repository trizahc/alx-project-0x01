import React from 'react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';

const users = [
  { name: 'Alice' },
  { name: 'Bob' },
  { name: 'Charlie' },
];

const UsersPage: React.FC = () => {
  return (
    <>
      <Header />
      <main style={{ padding: '0 20px' }}>
        <h1>Users</h1>
        <ul>
          {users.map((user, index) => (
            <li key={index}>{user.name}</li>
          ))}
        </ul>
      </main>
      <Footer />
    </>
  );
};

export default UsersPage;
