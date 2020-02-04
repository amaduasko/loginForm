import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { LoginForm } from "./components/form/form";
import { SomeComponent } from "./components/someComponent/someComponent";
const token = localStorage.getItem("jwt");
const App: React.FC = (props: any) => {
  const [auth, setAuth] = useState(false);
  useEffect(() => {
    localStorage.setItem("jwt", "86fasfgfsogHGad");
    return function cleanup() {
      localStorage.clear();
    };
  });
  const handleSubmit = (value: any) => {
    if (value.password === token) setAuth(true);
    else {
      alert("yoo buddy, review your password please :)");
    }
  };
  return (
    <Router>
      <Route exact path="/">
        {auth ? (
          <Redirect to="/some-component" />
        ) : (
          <LoginForm onSubmit={handleSubmit} />
        )}
      </Route>
      <Route path="/some-component">
        <SomeComponent />
      </Route>
    </Router>
  );
};

export default App;
