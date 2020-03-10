import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ListComponent from "./component/ListComponent";
import AddComponent from "./component/AddComponent";
import EditComponent from "./component/EditComponent";

function App() {
  return (
      <div className="container">
          <Router>
              <div className="col-md-6">
                  <h1 className="text-center" style={style}>React Student Application</h1>
                  <Switch>
                      <Route path="/" exact component={ListComponent} />
                      <Route path="/studnets" component={ListComponent} />
                      <Route path="/add-student" component={AddComponent} />
                      <Route path="/edit-student" component={EditComponent} />
                  </Switch>
              </div>
          </Router>
      </div>
  );
}

const style = {
    color: 'red',
    margin: '10px'
}

export default App;