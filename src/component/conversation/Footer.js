import React from 'react'
import send from '../../sendPNG.png'
import {sendNewMessage} from '../../action/conversation'
import axios from 'axios'

class footer extends React.Component {
    constructor(){
        super ()

        this.state={
            newMessage:''
        }
    }

    handleSend() {
    
        this.props.dispatch(sendNewMessage(this.state.newMessage))
        const fmc = new FormData()
        fmc.append('token', window.localStorage.getItem('token'))
        fmc.append('conversation_id', this.props.conversationId)
        fmc.append('text', this.state.newMessage)
        this.setState({newMessage:''})
        axios.post(' https://api.paywith.click/conversation/create/', fmc)
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
      })
    }
    render(){
        return(
            <div className='footer'>
                <input
                className='writeMessage'
                type='text'
                placeholder=' message'
                name='newMessage'
                value={this.state.newMessage}
                onChange ={(e)=> this.setState({newMessage: e.target.value})}
                />
                <img
                width='30px' src={send}
                onClick={() => this.handleSend()} />
            </div>
        )
    }
}
 
export default footer 