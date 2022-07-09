import React from 'react';
import './scss/custom.css';
import FinderBox from "./components/finderbox/FinderBox";
import ContentArea from "./components/contentarea/ContentArea";
import introsections from "./assets/intro.json"
import contentsections from "./assets/content.json"

function App() {

  return (
      <div className="App">
          <div className="wrap">
              <div id="primary">
                  <div id="content" role="main">
                      <ContentArea sections={introsections.sections}></ContentArea>
                      <FinderBox/>
                      <ContentArea sections={contentsections.sections}></ContentArea>
                  </div>
              </div>
          </div>
      </div>
  );
}

export default App;
