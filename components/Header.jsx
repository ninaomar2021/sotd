import React from "react";
import image from "./postit.jpg";

function Header(props) {
      return (
            <div className="header">
            <img src={image} alt="postit" height={100} width={100} />
              <h3> Ninas Note Taker</h3>
            </div>
      );
  }

  export default Header;
