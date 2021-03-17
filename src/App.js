import React from "react";

import CharacterEditor from "./components/CharacterEditor";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div
        style={{
          position: "fixed",
          height: "40%",
          width: "100%",
          backgroundColor: "hsl(195deg, 20%, 86%)",
          bottom: 0,
          left: 0,
          zIndex: -1
        }}
      ></div>
      <CharacterEditor />
      <Footer />
    </>
  );
}

export default App;
