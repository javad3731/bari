import React from 'react';
//import logo from '../../logo.svg';
// import Icon from '../../Icon.svg'
// import Lock from '../../Lock.svg'
// import Person from '../../Person.svg'
import InputWithIcon from './Text fiels'
// import validation from '../../validation/ValidationFunction'
import { validate } from '@babel/types'
import axios from 'axios'



export default class login extends React.Component {
  constructor (props) {
    super(props)
    
    this.state = {
      fields:{
        email:'',
        password:''
    },
      errors:{
        email:'',
        password:''
      } 
  }
}


  //handlepassword(event){
  //this.setState({password: event.target.value})

  //}
  // handleChang (event) {
  //   let name = event.target.name 
  //   let changFields = this.state.fields
  //   changFields[name]=event.target.value
  // }  
   handleError() {
     let errors ={
       email: validate('email', this.state.fields.email)
       //password: validate('password', this.state.fields.password)
     }
     this.setState({ errors })
   }
  render() {
  return (
      <div className='container'>
        <div className='login'>
           <hr/>
          <div className='div'>
            <div className='InputWithIcon'>
             <InputWithIcon/>
             </div>
            {/* <button onClick={() => this.handleError()}>
            
            </button> */}
          </div>
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
 