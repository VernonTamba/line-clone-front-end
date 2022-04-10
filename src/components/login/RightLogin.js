import React from "react";
import "./RightLogin.css";

const RightLogin = () => {
  return (
    <div className="rightLogin">
      <img
        className="rightLogin__qrCode"
        src="https://minatechnical.com/wp-content/uploads/2020/06/ID-Line-768x768.jpg"
        alt="QR code LINE"
      />
      <div className="rightLogin__content">
        <h1 className="rightLogin__title">QR code login</h1>
        <p className="rightLogin__description">
          To scan your QR code, open LINE on your mobile device and tap the QR
          code icon in the search box.
        </p>
      </div>
    </div>
  );
};

export default RightLogin;
