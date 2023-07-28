import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

const ScrollToContainerLink = ({ to, children }) => {
  return (
    <ScrollLink
      activeClass="active"
      to={to}
      spy={true}
      smooth={true}
      offset={-70} // Adjust this offset to suit your needs (optional)
      duration={1200} // Adjust the scrolling duration (optional)
    >
      {children}
    </ScrollLink>
  );
};

export default ScrollToContainerLink;
