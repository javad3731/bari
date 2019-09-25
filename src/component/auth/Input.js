import React from 'react'

export default class Input extends React.Component {
    handleChang (event) {
        console.log('INput' , event.target.value)
    }

    render(){
        return(
        <input 
            type='text'
            placeholder={this.props.placeholder}
            name={this.props.name}
            type={this.props.type}
            onChange={(event) => this.props.parenthandle(event.target.name , event.target.value)}
            />
        )
    }
}      