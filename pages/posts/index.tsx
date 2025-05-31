import React from 'react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import PostCard from '../../components/common/PostCard';

const posts = [
  { title: 'First Post', excerpt: 'This is the excerpt for the first post.' },
  { title: 'Second Post', excerpt: 'This is the excerpt for the second post.' },
];

const PostsPage: React.FC = () => {
  return (
    <>
      <Header />
      <main style={{ padding: '0 20px' }}>
        <h1>Posts</h1>
        {posts.map((post, index) => (
          <PostCard key={index} title={post.title} excerpt={post.excerpt} />
        ))}
      </main>
      <Footer />
    </>
  );
};

export default PostsPage;
