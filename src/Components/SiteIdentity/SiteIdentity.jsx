import React from "react";
import { useNavigate } from "react-router-dom";
import "./SiteIdentity.scss";

const SiteIdentity = () => {
  const navigate = useNavigate();
  const goHome = () => {
    navigate("/");
  };

  return (
    <div className="site-identity-container" onClick={() => goHome()}>
      Dx Movie
    </div>
  );
};

export default SiteIdentity;
