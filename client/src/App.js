import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import {Login} from './Login';
import {Register} from './Register'
import { Redirect } from 'react-router';
// import {Homepage} from './Homepage'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    // const url = "check-loggedin";
    // fetch(url)
    //     .then(res => {
    //         if (res.status === 200) {
    //             return res.json();
    //         }
    //     })
    //     .then(json => {
    //       // TODO set current user user name
    //     })
    //     .catch(error => {
    //         console.log(error);
    //     });
  }

  state = {
    username: null,
  }

  render() {
    const username = this.state.username;
    return (
        <div>
        <BrowserRouter>
          <Switch> { /* Similar to a switch statement - shows the component depending on the URL path */ }
            { /* Each Route below shows a different component depending on the exact path in the URL  */ }
            {/* {currentUser&&currentUser.status==0&&<Route exact path="/" render={() => (<Homepage app = {this} state={this.state} />)} />}
            {currentUser&&currentUser.status==2&&<Route exact path="/" render={() => (<Admin app = {this} state={this.state} />)} />}
            {currentUser&&currentUser.status==1&&<Route exact path="/" render={() => (<Loading to="/" />)} />}
            {!currentUser&&<Route exact path="/" render={() => (<Loading app = {this} state={this.state} />)} />} */}
            {/* {username&&<Route exact path="/" render={() => (<Homepage app = {this} state={this.state} />)}/>} */}
            <Route exact path='/' render={() => 
                            (username ? <Redirect to="/register" /> : <Login state={this.state}/>)}/>
            <Route exact path='/register' render={() => 
                            (<Register state={this.state}/>)}/>
            {/* <Route exact path='/recoverpassword' render={() => 
                            (<RecoverPassword state={this.state}/>)}/> */}
            {/* <Route exact path='/admin' render={() => 
                            (currentUser&&currentUser.status==2 ? <Admin state={this.state}/> : <Redirect to="/" />)}/> */}
          </Switch>
        </BrowserRouter>
      </div>
    );  
  }
}

export default App;
