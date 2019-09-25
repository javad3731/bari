import React from 'react'
import {getUserName, getId} from '../../action/conversation'

class Conversation extends React.Component {

    handleClick(){
        this.props.dispatch(getUserName(this.props.firstName , this.props.lastName, this.props.email,this.props.profileURL ))
        this.props.dispatch(getId(this.props.conversationId))
    }
    render() {
        console.log('d::::::::::::::::' , this.props)
        return (
        <div className='conversation' onClick={() => this.handleClick() }>
            <img src={this.props.profileURL} width='50px' />
            <div>
                <div className='name-date'>
                    <span>{this.props.email}</span> <br />
                    <span>{this.props.latestMessageDate.slice(0, 10)} {this.props.latestMessageDate.slice(11, 16)}</span>
                </div>
            </div>
            <div className='name-date'>
                <span>{this.props.latestmessage} </span>
                <span className='unseen'>{this.props.unseenMessage}</span>
            </div>
        </div>
        )
    }
}

export default Conversation
