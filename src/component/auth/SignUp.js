import React from 'react'
// import { Link } from "react-router-dom"
import Input from './Input'
import axios from 'axios'
import { blue } from '@material-ui/core/colors';
 


export default class SignUp extends React.Component {
  constructor (props) {
    super(props)
    
    this.state = {
        Email:'',
        password:'',
        retypePassword:''
  }
  this.parenthandle = this.parenthandle.bind(this)
}
  parenthandle (name , value) { 
    console.log('parenhandle' , name , value)
    this.setState({ [name]: value })
  }  

  handleRequest () {
    if (this.state.password === this.state.retypePassword) {
      console.log('email:::', this.state.Email);
      
    axios.post('https://api.paywith.click/auth/signup/', {
      email: this.state.Email,
      password: this.state.password
    })
    .then((response) => {
      window.localStorage.setItem('token', response.data.token)
      // this.props.history.push('/messenger/')
      // console.log('response',response)
    })
    .catch(function (error) {
      console.log(error)
    })
   } else {
    this.setState({ error: 'invalid password' })
  }
}

  render() {
    
    console.log('this', this.state)
    
  return (
      <div className='container'>
        <div className='SignUp'>
          <hr/>
          <Input placeholder='Email' name='Email'  parenthandle={this.parenthandle} />
          <Input placeholder='Password' name='password' type='password' parenthandle={this.parenthandle}/>
          <Input placeholder='Password' name='retypePassword' type='password' parenthandle={this.parenthandle}/>
          <button onClick={() => this.handleRequest()}>
          Sign Up</button>
          <p>{this.state.error}</p>
          <div className='div2'>
            <input className='checkbox' type='checkbox'/>
            <span className='t1'>Remember me</span>
            <a href='https://wwwgoogle.com' className='t2'>Forgot your password?</a>
          </div>
          <hr/>
        </div>
      </div>
  )
  }
}
