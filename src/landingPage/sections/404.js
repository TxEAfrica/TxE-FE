import React from 'react';

const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-orange-600">404</h1>
        <p className="text-gray-300 text-lg mt-4">Oops! The page you're looking for doesn't exist.</p>
        <a href="/" className="text-gray-300 hover:underline mt-4 block">Go back to the home page</a>
      </div>
    </div>
  );
};

export default NotFoundPage;
