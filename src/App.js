import React from "react";
import "./App.scss";
import LeftMenu from "./Components/LeftMenu";
import Main from "./Components/Main";
import { StateProvider } from "./Context";
import { initialState, reducer } from "./Context/reducer";

function App() {
  return (
    <div className="App">
      <StateProvider initialState={initialState} reducer={reducer}>
        <LeftMenu />
        <Main />
      </StateProvider>
    </div>
  );
}

export default App;
