import React, {useState, useEffect, Suspense, lazy} from 'react';
import axios from 'axios';
import { AppContainer } from './App.style.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar.jsx';
// import Home from './Components/Home/Home.jsx';
const Home = React.lazy(() => import('./Components/Home/Home.jsx'));
// import Contributions from './Components/Contributions/Contributions.jsx';
const Contributions = React.lazy(() => import('./Components/Contributions/Contributions.jsx'));
// const OtherComponent = React.lazy(() => import('./OtherComponent'));
// import Requests from './Components/Requests/Requests.jsx';
const Requests = React.lazy(() => import('./Components/Requests/Requests.jsx'));
// import HomeProfile from './Components/Profile/HomeProfile.jsx';
const HomeProfile = React.lazy(() => import('./Components/Profile/HomeProfile.jsx'));
// import Settings from './Components/Profile/Settings.jsx';
const Settings = React.lazy(() => import('./Components/Profile/Settings.jsx'));
// import Footer from './Components/Footer/Footer.jsx';
const Footer = React.lazy(() => import('./Components/Footer/Footer.jsx'));


const App = () => {
  const [isLoggedIn, setLogin] = useState(false);
  const [userInfo, setUser] = useState({})

  // useEffect(() => {
  //   console.log(userInfo)
  // }, [userInfo])

  useEffect(() => {
    axios.get('/user')
      .then((response) => {
        if (response.data) {
          getUpdatedUser(response.data.id)
        }
      })
      .catch((err) => { console.log(err) })
  }, [])

  const getUpdatedUser = (userID) => {
    axios.get(`/userInfo/${userID}`, )
          .then((response) => {
            setLogin(true);
            setUser(response.data);
          })
          .catch((err) => { console.log(err) })
  }

  return (
    <Router>
      <AppContainer>
        <div id='main'>
          <Navbar isLoggedIn={isLoggedIn}/>
            <Suspense fallback={<div>Loading...</div>}>
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
              <Settings isLoggedIn={isLoggedIn} userInfo={userInfo} getUpdatedUser={getUpdatedUser}
              />
            </Route>
          </Switch>
            </Suspense>
        </div>
        <Suspense fallback={<div>Loading...</div>}>
        <Footer />
        </Suspense>
      </AppContainer>
    </Router>
  )
}

export default App;
