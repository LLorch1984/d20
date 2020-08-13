import React,{useEffect} from 'react';
import { Route, withRouter, Redirect} from 'react-router-dom'
import { isUserLoggedIn, register, login} from 'd20-client-logic'
import {Body, Register,Login, Home, Navbar} from '../components'






export default withRouter(function({history}) {

  useEffect(()=>{
    if(isUserLoggedIn()){
      alert('no funciona')
    }
  },[])

const registerHandler = (name, surname,email, password) => {
  register(name,surname,email,password)
  history.push("/sign-in")
}

const loginHandler = (email, password) => {
  login(email, password)
  history.push("/home")
}

  return (<>
  <div className = "App">
    <Body>
      <Route exact path="/" render={() => isUserLoggedIn() ? <Redirect to="/home" /> : <Redirect to="/sign-up" />} />
      <Route path="/sign-up" render={() => isUserLoggedIn() ? <Redirect to="/home" /> : <Register  onRegister={registerHandler} />} /> 
      <Route path="/sign-in" render={()=> isUserLoggedIn() ? <Redirect to="/home"/> : <Login onLogin={loginHandler}/>} />
      <Route path="/home" render={() => <Home/> }/>
      
    </Body>
  </div>
  </>)
})


