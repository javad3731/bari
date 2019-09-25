import React from 'react';
// import Input from '@material-ui/core/Input';
// import InputLabel from '@material-ui/core/InputLabel';
// import InputAdornment from '@material-ui/core/InputAdornment';
// import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import validate from '../../validation/ValidationFunction'
import { Link } from "react-router-dom";
import axios from 'axios'


export default class InputWithIcon extends React.Component {
  constructor() {
    super()

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

  handleChange(event) {
    let name = event.target.name
    this.setState({...this.state, fields: {...this.state.fields, [name]: event.target.value }})
  }

  handleError() {
    let errors ={
      email: validate('email', this.state.fields.email),
      password: validate('password', this.state.fields.password)
    }
    this.setState({ errors })
  }

  handleRequest () {
    axios.post('https://api.paywith.click/auth/signin/', {
      email: this.state.fields.email,
      password: this.state.fields.password
    })
    .then((response) => {
      window.localStorage.setItem('token', response.data.data.token)
      window.localStorage.setItem('id', response.data.data.profile.id)
      this.props.history.push('/messenger/')
    })
    .catch(function (error) {
      console.log(error)
    })
   }

   
  
  render() {
    console.log(this.state.fields)
  return (
      <>
      {/* <div className={classes.margin}> */}
      <div>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <AccountCircle />
          </Grid>
          <Grid item>
            <TextField
              id="input-with-icon-grid"
              label="E-mail"
              name='email'
              onChange={(event) => this.handleChange(event)}
            />
          </Grid>
        </Grid>
        {
          this.state.errors.email !== null &&
          <span className='error'>{ this.state.errors.email }</span>
        }
      </div>
      <div>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <AccountCircle />
          </Grid>
          <Grid item>
            <TextField
              id="input-with-icon-grid"
              label="password"
              name='password'
              placeholder='password'
              type='password'
              onChange={(event) => this.handleChange(event)}
              // error
              className={ this.state.errors.email !==null ? 'errorInput':'corectInput'}
              />
          </Grid>
        </Grid>
        {
          this.state.errors.password !== null &&
          <span className='error'>{ this.state.errors.password }</span>
        }
           <div> 
            <button onClick={() => this.handleRequest()}>
            log in</button>
           </div> 
      </div>
      </>
  )
  }
}
