// import { useState, useEffect } from 'react';

// // StickyBgImage Component
// const StickyBgImage = ({ imageSrc, textContent }) => {
//   const [isSticky, setIsSticky] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop = window.scrollY;
//       setIsSticky(scrollTop > 100);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <div className={`relative h-screen w-full ${isSticky ? 'sticky top-0 z-50' : ''}`}>
//       <img 
//         src={imageSrc} 
//         alt="Background" 
//         className="w-full h-full object-cover absolute inset-0"
//       />
//       <div className="relative z-10 flex items-center justify-center h-full bg-black bg-opacity-40">
//         <h2 className="text-4xl font-bold text-white text-center px-4">
//           {textContent}
//         </h2>
//       </div>
//     </div>
//   );
// };


// export default StickyBgImage;