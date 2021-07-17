import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Credentials from "./pages/Credentials";
import Homepage from "./pages/Homepage";
import NavDashboard from "./components/NavDashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import Search from "./pages/Search";
import AuthContext from "./contexts/AuthContext";

function App() {

  const [loggedIn, setLoggedIn] = useState();

  return <AuthContext.Provider value={{loggedIn, setLoggedIn}}>
    <BrowserRouter>
      <div className="d-flex flex-row">
        <Switch>
          <Route exact path={["/", "/home"]} component={Homepage} />
          <Route exact path="/login" component={Credentials} />
          <ProtectedRoute exact path="/dashboard" component={NavDashboard} />
          <ProtectedRoute exact path="/search" component={Search} />
          <Route path="*" component={() => "404 NOT FOUND"} />
        </Switch>
      </div>
    </BrowserRouter>
  </AuthContext.Provider>
}

export default App;
