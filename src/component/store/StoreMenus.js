import React from "react";

const Menus = ({ menus = {} }) => {
  return (
    <div className="Store-Menu-List">
      {menus.map((item) => (
        <div key={item.id} className="Store-Menu-Item">
          <div className="Store-Menu-Image">
            <img src={item.imageUrl} className="MenuImage" alt="MenuImage" />
          </div>
          <div className="Store-Menu-Text">
            <p className="Store-Menu-Name">{item.name}</p>
            <p className="Store-Menu-Price">{item.price}</p>
            <p className="Store-Menu-Detail">{item.detail}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Menus;
