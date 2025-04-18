import React from 'react';

import Student from './Student';
import Footer from './Footer';
import Navbar from './Navbar';

function Home() {
  return (
    <div>
      <Navbar />
      <Student />
      <Footer/>
      
    </div>
  );
}

export default Home;