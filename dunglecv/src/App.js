import './style/App.css';
import NavBar from './component/NavBar';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import GeneralPage from './pages/GeneralPage';


export default function App() {
  return (
    <>
      <Router>
        <NavBar/>
        <Switch>
          <Route path='/'exact component={GeneralPage}/>
        </Switch>
      </Router>
    </>
  );
};