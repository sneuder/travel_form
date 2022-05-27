import { useState } from "react";
import Context from "./context/context";
import initialState from "./context/state";

import Home from './pages/home/Home';

const App = () => {
  const [globalState, setGlobalState] = useState(initialState);

  return (
    <Context.Provider value={{ globalState, setGlobalState }}>
      <div className="App">
        <Home />
      </div>
    </Context.Provider>
  );
}

export default App;
