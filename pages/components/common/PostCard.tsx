import React from 'react';

type PostCardProps = {
  title: string;
  excerpt: string;
};

const PostCard: React.FC<PostCardProps> = ({ title, excerpt }) => {
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '15px',
      marginBottom: '15px',
    }}>
      <h3>{title}</h3>
      <p>{excerpt}</p>
    </div>
  );
};

export default PostCard;
