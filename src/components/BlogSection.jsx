
// src/components/BlogSection.jsx
import 'react';

const BlogSection = () => {
  const posts = [
    {
      title: 'NEW SELFIE EXPERT',
      image: '/api/placeholder/400/300',
      excerpt: 'Discover the latest innovations in mobile photography...',
    },
    {
      title: 'BEAUTY LIES WITHIN',
      image: '/api/placeholder/400/300',
      excerpt: 'Explore our premium collection of beauty products...',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-center text-3xl font-bold mb-8">LATEST FROM OUR BLOG</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {posts.map((post, index) => (
          <div key={index} className="group cursor-pointer">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-64 object-cover mb-4"
            />
            <h3 className="text-xl font-bold mb-2">{post.title}</h3>
            <p className="text-gray-600">{post.excerpt}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;