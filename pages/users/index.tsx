import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const UsersPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow p-4 bg-gray-100">
        <h1 className="text-2xl font-bold mb-4">Users</h1>
        <p>List of users will go here.</p>
      </main>
      <Footer />
    </div>
  );
};

export default UsersPage;
