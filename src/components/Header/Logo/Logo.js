import React from "react";

class Logo extends React.Component {
  render() {
    return (
      <div>
        <img
          style={{
            width: "100px",
            marginLeft: "30px"
          }}
          src="https://secondhandeffect.leboncoin.fr/wp-content/themes/SHE/img/author_avatar.jpg"
          alt="logo leboncoin"
        />
      </div>
    );
  }
}

export default Logo;
