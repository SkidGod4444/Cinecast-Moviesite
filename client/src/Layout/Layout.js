import React from 'react';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import MobileFooter from './Footer/MobileFooter';

function Layout({ children }) {
  const backgroundImage = '/images/home-background.png';

  return (
    <div className=" text-white" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <Navbar />
      {children}
      <Footer />
      {/* MOBILE FOOTER */}
      <MobileFooter />
    </div>
  );
}

export default Layout;
