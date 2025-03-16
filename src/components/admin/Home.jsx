import React from 'react';
import Navbar from '../../components/admin/navbar';
import Student from './Student';
import Footer from './Footer';

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