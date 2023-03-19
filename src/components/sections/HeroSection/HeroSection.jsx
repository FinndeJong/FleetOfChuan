import React from "react";
import "./HeroSection.css";

export default function HeroSection() {
  return (
    <div className="HeroSectionContainer">
      <h2 className="SubTitle">Meet the</h2>
      <h1 className="Title">
        Fleet of <span className="chuanColor">Chuán</span>
      </h1>
      <h3 className="Description">
        These war ready merchants trade and plunder in the Sea of{" "}
        <span className="blackBold">Bada</span>
      </h3>
    </div>
  );
}
