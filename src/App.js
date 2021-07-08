import '@fontsource/roboto';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Bookmark from './Components/Bookmarks';
import Home from './Components/Home';
import Login from './Components/Login';
import { auth } from './Firebase';

function App() {
  const [user, setUser] = useState('');

  useEffect(() => {
    const checkUser = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);

      } else {
        setUser('');
      }
    })
    return () => {
      checkUser();
    }
  }, [])
  return (
    <div className="App">
      <Router>

        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/bookmark" exact >
            <Bookmark user={user} />
          </Route>

          <Route path="/login" >
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
