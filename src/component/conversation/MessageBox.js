import React from 'react'
import Axios from 'axios';
import { getMessagesList } from '../../action/conversation';

class MessageBox extends React.Component {
//     constructor(){
//         super()

//         this.state={
//             messageList:[
           
//         ]
//     }
// }
    
    componentDidMount(){
        setInterval(() => {
        const fdata = new FormData()
        fdata.append('token' , window.localStorage.getItem('token'))
        fdata.append('conversation_id', this.props.conversationId )
        fdata.append('size' , 10)
        fdata.append('date', (new Date().getTime() / 1000).toFixed(0) )
        Axios.post('https://api.paywith.click/conversation/details/',fdata)
        .then((response)=>{
            console.log('respons::::::::::::::' , response)
            this.props.dispatch(getMessagesList(response.data.data.messages))
            // this.setState({messageList: response.data.data.message})
        })
        .catch((error)=>{
            console.log('rrrrrrr', error)
        })
    }, 3000)
    }


    // getMessagesList() {
        
    //     const fmes = new FormData()
    //     fmes.append('size' , 5)
    //     fmes.append('date',((new Date().getTime() / 1000).toFixed(0)))
    //     fmes.append('conversation_id' , this.props.idPerson)
    //     fmes.append('token', this.state.token)
    //     Axios.post('https://api.paywith.click/conversation/details/',fmes)
    //     .then((response)=>{
    //         this.setState({messageList: response.data.data.message})
    //     })
    //     .catch((error)=>{
    //         console.log('rrrrrrr', error)
    //     })
    // }
    
    sendMessage() {
        console.log('im done',this.props)
        const fsend = new FormData()
        fsend.append('token',this.state.token)
        fsend.append('conversation_id',this.props.idPerson)
        fsend.append('text',this.props.text)
        Axios.post('https://api.paywith.click/conversation/details/',fsend)
        .then((response) =>{
            console.log('done::::::::::::::::::::::::::::::::::',response)
        })
        .catch((error)=>{
            console.log('rrr', error)
        })
    }

    render () {
        if(window.localStorage.getItem('gubub')==1){
            this.sendMessage()
            window.localStorage.setItem('gubub' , 0)
        }
        return (
            <div className='message-box'>
                {
                    this.props.messagesList.map(( message, index) => {
                    if (message.sender.id== window.localStorage.getItem('id')) {
                        return(
                        <div key={index} className='sender'><span>{message.text}</span></div>
                        )
                    } else {
                        return(
                        <div key={index} className='reciver'><span>{message.text}</span></div>
                        )
                    }
                })
                }
                
            </div>  
        )
    }
} 

export default MessageBox
