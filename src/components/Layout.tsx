import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = (Component: (props?:any) => JSX.Element) => {
  return () => {
    return (
      <div className="layout">
        <Header />
        <Component />
        <Footer />
      </div>
    );
  };
};

export { Layout }
