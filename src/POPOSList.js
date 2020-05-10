import React from "react";
import POPOSSpace from "./POPOSSpace";
import "./POPOSList.css";

const POPOSList = () => {
  return (
    <div className="POPOSList">
      <POPOSSpace
        name="50 california st"
        address="50 california st."
        image="50-california-st.jpg"
      />
      <POPOSSpace
        name="100 pine st"
        address="100 pine st."
        image="100-pine.jpg"
      />
      <POPOSSpace
        name="101 california st"
        address="101-califronia st."
        image="101-california.jpg"
      />
      <POPOSSpace
        name="343 sansome st"
        address="343 sansome st"
        image="343-sansome-roof-garden.jpg"
      />
      <POPOSSpace
        name="525 martket st"
        address="525 market st."
        image="525-market-street-plaza.jpg"
      />
      <POPOSSpace
        name="Calfornia st"
        address="555 california st"
        image="555-california.jpg"
      />
    </div>
  );
};

export default POPOSList;
