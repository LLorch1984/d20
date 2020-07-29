import React,{useEffect} from 'react';
import { Route, withRouter, Redirect} from 'react-router-dom'
import { isUserLoggedIn, register} from 'd20-client-logic'
import {Body, Register,Login} from '../components'






export default withRouter(function({history}) {

  useEffect(()=>{
    if(isUserLoggedIn()){
      alert('no funciona')
    }
  },[])

const registerHandler = (name, surname,email, password) => {
  register(name,surname,email,password)
  history.push("/sing-in")
}

  return (<>
  <div className = "App">
    <Body>
      <Route exact path="/" render={() => isUserLoggedIn() ? <Redirect to="/home" /> : <Redirect to="/sign-up" />} />
      <Route path="/sign-up" render={() => isUserLoggedIn() ? <Redirect to="/home" /> : <Register  onRegister={registerHandler} />} /> 
      <Route path="/sing-in" render={()=> isUserLoggedIn() ? <Redirect t0="/home"/> : <Login/>} />
      
    </Body>
  </div>
  </>)
})


