import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomeScreen from '../src/screens/HomeScreen'
import Detail from '../src/screens/detail'

function App() {
  return (
    <Router>
      <Switch>
        <Route path ="/" exact component={HomeScreen} />
        <Route path="/:search" exact component={(props) => <HomeScreen {...props} /> } />
        <Route path ="/detail/:id" exact component={Detail} />
        <Route path="/:detail" exact component={(props) => <Detail {...props} /> } />
      </Switch>
    </Router>
  );
}

export default App;
