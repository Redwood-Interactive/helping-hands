import React, { useState, useEffect } from 'react';
import { AppContainer } from './App.style.js';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar.jsx';
import Home from './Components/Home/Home.jsx';
import Contributions from './Components/Contributions/Contributions.jsx';
import Requests from './Components/Requests/Requests.jsx';
import HomeProfile from './Components/Profile/HomeProfile.jsx';
import Settings from './Components/Profile/Settings.jsx';
import Footer from './Components/Footer/Footer.jsx';
import axios from 'axios';



const App = () => {
  const [isLoggedIn, setLogin] = useState(false);
  const [userInfo, setUser] = useState({})

 
  useEffect(() => {
    axios.get('/user')
      .then((response) => {
        if (response.data) {
          setLogin(true);
          setUser(response.data)
        }
      })
      .catch((err) => { console.log(err) })
  }, [])

  return (
    <Router>
      <AppContainer>
        <div id='main'>
          <Navbar isLoggedIn={isLoggedIn} />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path="/contributions">
              <Contributions isLoggedIn={isLoggedIn} userInfo={userInfo} />
            </Route>
            <Route exact path="/requests">
              <Requests isLoggedIn={isLoggedIn} userInfo={userInfo} />
            </Route>
            <Route exact path="/profile">
              <HomeProfile isLoggedIn={isLoggedIn} userInfo={userInfo} />
            </Route>
            <Route exact path="/settings">
              <Settings isLoggedIn={isLoggedIn} userInfo={userInfo} />
            </Route>
          </Switch>
          <Footer />
        </div>
      </AppContainer>
    </Router>
  )
}

export default App;