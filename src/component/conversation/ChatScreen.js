import React from 'react'
import HeaderContainer from '../../container/HeaderContainer'
import MessageBoxContainer from '../../container/MessageBoxContainer';
import Footercontainer from '../../container/Footercontainer';

class ChatScreen extends React.Component {
    render(){
        return(
            <div className='chat-screen'>
            <HeaderContainer/>
            <MessageBoxContainer /> 
            <Footercontainer/>
        </div>
        )
    } 
}
 
export default ChatScreen
