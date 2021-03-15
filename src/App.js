import './App.css';
import * as ReactBootstrap from 'react-bootstrap';
import Events from './component/Events';
import Groups from './component/Groups';
import Navbar from './component/Navbar';
import Projects from './component/Projects';
import Rooms from './component/Rooms';
import Tools from './component/Tools';
import Home from './component/Home'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}

          <Route path="/tools" component={Tools}>
            <Tools />
          </Route>

          <Route path="/projects" component={Projects}>
           <Projects />
          </Route>

          <Route path="/events" component={Events}>
            <Events />
          </Route>

          <Route path="/rooms" component={Rooms}>
            <Rooms />
          </Route>

          <Route path="/groups" component={Groups}>
            <Groups />
          </Route>

          <Route exact path="/" component={Home}>
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
