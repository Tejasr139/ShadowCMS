// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './Home.css';



// const Home = () => {
//     return (
//       <div className="container">
//         <h1>Welcome to Our Website</h1>
//         <p>This is the home page.</p>
//       </div>
//     );
//   };



// // const Home = () => {
// //   const [content, setContent] = useState('');

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       const result = await axios('http://your-api-url/home-content');
// //       setContent(result.data);
// //     };

// //     fetchData();
// //   }, []);

// //   return (
// //     <div className="container">
// //       <h1>Home</h1>
// //       <div dangerouslySetInnerHTML={{ __html: content }} />
// //     </div>
// //   );
// // };




// export default Home;







import React from 'react';
import './home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h2>Welcome to Our Website!</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ullamcorper nibh in felis porta, at ultricies
        massa ultrices. Aenean tempor velit vel mauris rutrum tempor.
      </p>
    </div>
  );
};

export default Home;
