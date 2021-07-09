import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import AddStudent from "./components/AddStudent/AddStudent";
import AddSubject from "./components/AddSubject/AddSubject";
import FilterBySubject from "./components/FilterBySubject/FilterBySubject";
import Home from "./components/Home/Home";
import Menubar from "./components/Menubar/Menubar";
import StudentList from "./components/StudentList/StudentList";

function App() {
  return (
    <Router>
      <Menubar />
      <Switch>
        <Route path="/addSubject" component={AddSubject} />
        <Route path="/addStudent" component={AddStudent} />
        <Route path="/studentList" component={StudentList} />
        <Route path="/filterBySubject" component={FilterBySubject} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
