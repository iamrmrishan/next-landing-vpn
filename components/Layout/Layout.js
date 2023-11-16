import React from 'react';
import Footer from './Footer';
import Header from './Header';
import PopupWidget from './../Popup';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="hidden lg:block">
        <PopupWidget />
      </div>
      {children}
      <Footer />
    </>
  );
};

export default Layout;
