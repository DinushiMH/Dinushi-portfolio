import React from 'react'

const Links = () => {

const item =[
    "Homepage",
    "Services",
    "Portfolio",
    "Contact",
    "About",
];

  return (
  <div className="links">{item.map(item=>(<a href={`#${item}`} key={item}>{item}</a>))}</div>
  );
};

export default Links
