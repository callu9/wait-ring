import React from "react";

const Menus = ({ menus = {}}) => {
  return (
    <tbody>
      {menus.map((item) => (
        <tr key={item.id}>
          <td className="Store-Menu-Item">
            <div className="Store-Menu-Image">
              <img src={item.imageUrl} alt="MenuImage" />
            </div>
            <div className="Store-Menu-Text">
              <div className="Store-Menu-Name">{item.name}</div>
              <div className="Store-Menu-Price">{item.price}</div>
              <div className="Store-Menu-Detail">{item.detail}</div>
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  );
}

export default Menus;