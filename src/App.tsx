import React, { useState, useMemo } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// components
import { BookList } from "./components/BookList";
import { NavBar } from "./components/NavBar";
// utils
import { UserContext } from "./utils/UserContext";

function App() {
  const [loggedIn, setLogin] = useState(false);
  const referenceValue = useMemo(() => ({ loggedIn, setLogin }), [
    loggedIn,
    setLogin,
  ]);
  return (
    <Router>
      <div className="container">
        <NavBar loggedIn={loggedIn} setLogin={setLogin} />
        <br />
        <UserContext.Provider value={referenceValue}>
          <Route path="/" exact component={BookList} />
        </UserContext.Provider>
      </div>
    </Router>
  );
}

const Person = () => <div>HEllo</div>;
const Message = () => <div>Document</div>;

export default App;
