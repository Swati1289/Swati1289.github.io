import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { FaArrowUp } from "react-icons/fa";
import "../style.css";
export default function Footer() {
  return (
    <div className="footer">
      <h3>Created By Swati Hegde </h3>
      <AnchorLink href="#nav" className="arrowup">
        <FaArrowUp />
      </AnchorLink>
    </div>
  );
}
