
//------------------WORKING_____________________________________

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './Components/Navbar';
// import UserMaster from './AdminSide/UserMaster';
// import UserTypeMaster from './AdminSide/UserTypeMaster';
// import CmsMasterPage from './AdminSide/CmsMasterPage';

// const App = () => {
//   return (
//     <Router>
//       <div>
//         <Navbar />
//         <Routes>
//           <Route path="/user-master" element={<UserMaster />} />
//           <Route path="/user-type-master" element={<UserTypeMaster />} />
//           <Route path="/cms-master-page" element={<CmsMasterPage />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;













// import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // Import BrowserRouter and Route
// import CmsMasterPage from './AdminSide/CmsMasterPage';
// import ContentViewPage from './AdminSide/ContentViewPage'; 

// const App = () => {
//   return (
//     <Router>
//       <div>
//         <h1>App</h1>
//         <nav>
//           <ul>
//             <li>
//               <a href="/">Home</a> {/* Correct href to '/' */}
//             </li>
//             <li>
//               <a href="/cms-master-page">CMS Master Page</a> {/* Correct href to '/cms-master-page' */}
//             </li>
//             <li>
//               <a href="/content-view">Content View Page</a> {/* Link to ContentViewPage */}
//             </li>
//           </ul>
//         </nav>
//         <Switch>
//           <Route exact path="/cms-master-page" component={CmsMasterPage} />
//           <Route exact path="/content-view" component={ContentViewPage} />
//         </Switch>
//       </div>
//     </Router>
//   );
// };

// export default App;






//----------------------WORKING----------------------------------------

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import AboutUs from './Components/AboutUs';
import OurServices from './Components/OurServices';
import Portfolio from './Components/Portfolio';
import Gallery from './Components/Gallery';
import Sidebar from './Components/Sidebar'; // Import Sidebar component
import './App.css'; // Import main CSS file here

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/our-services" element={<OurServices />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
