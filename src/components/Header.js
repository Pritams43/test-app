import React from 'react';
import PropTypes from 'prop-types'; // for prop validation

function Header({ title = 'Default Title' }) { // Default value for title
  return (
    <header style={{ padding: '10px', backgroundColor: '#282c34', color: 'white', textAlign: 'center' }}>
      <h1>{title}</h1>
    </header>
  );
}

// Prop validation using PropTypes
Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
