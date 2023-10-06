import React from "react";
import PropTypes from "prop-types";

// core components
import Header from "../../components/header/header.jsx";
import Footer from "../../components/footer/footer.jsx";
import PageTable from "./sections/table.jsx";

const Juegos = () => {
  return (
    <div id="main-wrapper">
      <Header />
      <div className="page-wrapper">
        <div className="container-fluid">
          <PageTable />
        </div>
      </div>
      <Footer />
    </div>
  );
};

Juegos.propTypes = {
  classes: PropTypes.object,
};

export default Juegos;
