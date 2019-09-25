import React from 'react';
import ChatScreen from './ChatScreen';
import ConversationListContainer from '../../container/ConversationListContainer';

class Messanger extends React.Component {
    render(){
        return (
            <div className='chat'>
                <ConversationListContainer/>
                <ChatScreen/>
            </div>     
        ) 
    }
}

export default Messanger
