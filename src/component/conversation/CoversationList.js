import React from 'react'
import ConversationContainer from '../../container/ConversationContainer'
// import { isTemplateElement } from '@babel/types';
import axios from 'axios'
import {createNewConversation, saveConversationList} from '../../action/conversation'

class ConversationList extends React.Component {
  constructor(){
    super()

    this.state={
      newConv:'', 
      messages:[],
      searchContent:'',
      searchContent:[],
      suggestion:[],
      
    }
  }

componentDidMount (){
  const ftoken = new FormData()
  ftoken.append ('token', window.localStorage.getItem('token'))
    axios.get('https://api.paywith.click/conversation/', {params : {
      token : window.localStorage.getItem('token')
    }})
    .then((response) => {
      console.log('response:::', response)
      
    //  this.setState({message : response.data.data.conversation_dtails})
    response.data.data.conversation_details.map((item) => {
        item.users.map((itemm) => {
          if ( itemm.id!=window.localStorage.getItem('id')){
            this.props.dispatch(saveConversationList(item.id , itemm.email, item.latest_message , item.latest_message_date , item.unseen_messages , itemm.avatar_url))
          }
        } )
      })

    })
    .catch( (error)=> {
      console.log(error)
    })
  }

   handleSearch(e) {
     const fdata = new FormData ()
     fdata.append('token',window.localStorage.getItem('token'))
     fdata.append('query', e.target.value )
     fdata.append('size', 4)
     axios.post('https://api.paywith.click/explore/search/contacts/' , fdata)
     .then((response) => {
       console.log('sug::', response)
       this.setState({suggestion:response.data.data.users})
      
     })
      .catch( (error) =>{
        console.log(error)
      })
    }
   makeconversation(userId) {
     const fmc = new FormData()
     fmc.append('token', window.localStorage.getItem('token'))
     fmc.append('user_id' , userId)
     axios.post('https://api.paywith.click/conversation/', fmc)
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
      })
   }
   handeleNewConv(e){
     this.setState({newConv: e.target.value})

   }

   handleClick() {
     this.props.dispatch(createNewConversation(this.state.newConv))
     this.setState({newConv:''})
   }


  render() {
    console.log('conversationlist',this.props.conversationList)
      return (
        <div className='conversation-list'>
          <div>
            <input
            type='text'
            name='newConv'
            value={this.state.newConv}
            onChange={(e)=> {this.handeleNewConv(e);this.handleSearch(e)}}
            />
          {
            this.state.suggestion.map((user,index) => {
              return (
                <p key={index} className='searched' onClick={() => this.makeconversation(user.id)}>
                  {user.email}
                </p>
              )
            })
          }
          </div>
              {this.props.conversationList.map((item , index) => {
                console.log('conversation',this.props.conversationList)
                // return(
                //   item.users.map((item , index) =>{
                //     console.log(item.id)
                //     if (item.id != this.state.id) {
                //       console.log(item.email)
                      return(
                <ConversationContainer 
                  key={index}
                  email={item.mail}
                  latestmessage={item.latestMessage}
                  latestMessageDate={item.latestMessageDate}
                  conversationId = {item.conversationId}
                  profileURL={item.proFileUrl}
                  // unseenMessage={item.unseenMessage}
                />
                      )
                    })}
        </div>
      ) 
  } 
  }

export default ConversationList
