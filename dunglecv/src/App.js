import './style/App.css';
import NavBar from './component/NavBar';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
export default function App() {
  return (
    <>
      <Router>
        <NavBar/>
        <div className='contentArea'>
          
        </div>
        <Switch>
          <Route path='/'/>
        </Switch>
      </Router>
    </>
  );
};