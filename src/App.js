import React from 'react';
import {Container} from 'semantic-ui-react'
import {BrowserRouter,Route,Redirect} from 'react-router-dom'
import Register from './component/register'
import Head from "./component/headeName";
import login from "./component/login";
import Noteboard from  "./component/noteboard"
import Todo from "./component/add_Todo";
import Profile from './component/profile'
import Home from './component/home'
import Logout from './component/logout'

function App (){
  return(
      <div>
        <Head/>
        <Container>
          <BrowserRouter>
            <Route path="/home" component={Home}/>
            <Route path="/register" component={Register} />
            <Route path="/login" component={login}  />
            <Route path="/noteboard"  component={Noteboard} />
            <Route path="/todo" component={Todo} />
            <Route path="/profile" component={Profile}/>
            <Route path="/logout" component={Logout}/>
            <Redirect from='/' to='/home' />
          </BrowserRouter>
        </Container>

      </div>


  );

}

export default App;
