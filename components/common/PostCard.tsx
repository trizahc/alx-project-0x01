import React from 'react';

const PostCard: React.FC = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-2">Sample Post Title</h2>
      <p className="text-gray-600">This is a brief description of the post content.</p>
    </div>
  );
};

export default PostCard;
