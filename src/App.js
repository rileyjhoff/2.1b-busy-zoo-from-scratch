import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ZooPage from './components/ZooPage';
import AdminPage from './components/AdminPage';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <ZooPage />
          </Route>
          <Route exact path="/admin">
            <AdminPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
