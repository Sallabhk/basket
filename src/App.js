import logo from './logo.svg';
import './App.css';
import { User } from './pages/user/user';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import { Homepage } from './pages/homepage/homepage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
              <Route exact path="/" exact component={User} />
              <Route exact path="/homepage" component={Homepage} />
            </Switch>
        </BrowserRouter>
          
    </div>
  );
}

export default App;
