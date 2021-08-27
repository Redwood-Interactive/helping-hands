import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar.jsx';
import Home from './Components/Home/Home.jsx';
import Contributions from './Components/Contributions/Contributions.jsx';
import Requests from './Components/Requests/Requests.jsx';
import Profile from './Components/Profile/Profile.jsx';
import Footer from './Components/Footer/Footer.jsx';

const App = () => {
  const [isLoggedIn, setLogin] = useState(false);

  return (
    <Router>
      <div>
        <div id='main'>
          <Navbar isLoggedIn={isLoggedIn}/>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/contributions' component={Contributions} />
            <Route exact path='/requests' component={Requests} />
            <Route exact path='/profile' component={Profile} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>)
}

export default App;