import './App.css';
import { Router } from '@reach/router';
import Main from './views/main';
import Skills from './views/skills';
import Contact from './views/contact';
import Projects from './views/projects';

function App() {

  return (
    <div>
      <Router>
        <Main path = "/"/>
        <Skills path = "/skills"/>
        <Contact path = "/contact"/>
        <Projects path = "/projects"/>
      </Router>
    </div>
  );
}

export default App;
