
// src/components/BlogSection.jsx
import 'react';

const BlogSection = () => {
  const posts = [
    {
      title: 'NEW SELFIE EXPERT',
      image: 'src/assets/b1.jpg',
      excerpt: 'Discover the latest innovations in mobile photography...',
    },
    {
      title: 'BEAUTY LIES WITHIN',
      image: 'src/assets/b2.jpg',
      excerpt: 'Explore our premium collection of beauty products...',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-center text-3xl font-bold mb-8">LATEST FROM OUR BLOG</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {posts.map((post, index) => (
          <div key={index} className="group cursor-pointer flex flex-col md:flex-row gap-6 bg-white overflow-hidden ">
            
            <div className="md:w-1/3">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-64 md:h-full object-cover"
              />
            </div>
            <div className="md:w-2/3 p-6 flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-4 text-gray-800 hover:text-orange-500 transition-colors">
                {post.title}
              </h3>
              <p className="text-gray-600 text-lg mb-4">
                {post.excerpt}
              </p>
              {/* <a 
                href={post.link}
                className="text-orange-500 font-semibold hover:text-orange-600 inline-flex items-center group"
              >
                Read More 
                <span className="ml-2 group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </a> */}
            </div>

            {/* <h3 className="text-xl font-bold mb-2">{post.title}</h3>
            <p className="text-gray-600">{post.excerpt}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;