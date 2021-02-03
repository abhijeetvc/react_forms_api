import Login from './components/Login'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link,Switch,Route} from 'react-router-dom'
import './App.css'

function App() {
  return (
       <div className="App">
          <nav className="navbar navbar-expand-lg navbar-light fixed-top">
            <div className="container">
                <Link className="navbar-brand" to={"/sign-in"}>Codekul</Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to={"/sign-in"}>Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={"/sign-up"}>Sign Up</Link>
                        </li>
                    </ul>              
                </div>
            </div>
          </nav> 
          
          <div className="outer-div">
            <div className="inner-div">
              <Switch>
                <Route path="/" component={Login}/>
                <Route path="/sign-in" component={Login}/>
              </Switch>
            </div>
          </div>
       </div>
  );
}

export default App;
