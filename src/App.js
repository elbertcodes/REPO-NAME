import React from "react";
import { POPOSSpace } from "./POPOSSpace";
import POPOSList from "./POPOSList";
import Footer from "./Footer";
import Title from "./Title";

function App() {
  return (
    <div className="App">
      <Title />
      <POPOSList />
      <Footer />
    </div>
  );
}

export default App;
