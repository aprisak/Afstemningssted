import React from 'react';
import './custom.css';
import FinderBox from "./components/finderbox/finderbox";
import ContentArea from "./components/contentarea/ContentArea";
import introsections from "./assets/intro.json"

function App() {

  return (
      <div className="App">
          <div className="wrap">
              <div id="primary">
                  <div id="content" role="main">
                      <ContentArea sections={introsections.sections}></ContentArea>
                      <FinderBox/>
                  </div>
              </div>
          </div>
      </div>
  );
}

export default App;
