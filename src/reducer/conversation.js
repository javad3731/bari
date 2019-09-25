

const initial = {
  firstName:'',
  lastName:'',
  email:'',
  profileUrl:'',
  conversationId: '' ,
  messageList:[],
  conversationList :[]
}
const conversation = (state = initial,action) => {
    console.log('REDUX STATE' , state)
    switch (action.type) {


        case 'SAVE_SELECTED_USER_NAME':
         return {
          ...state,
            firstName: action.name,
            lastName: action.family,
            email: action.email,
            profileUrl : action.profileUrl
        }
      
        case 'SEND_NEW_MESSAGE':
          return {
            ...state,
           messageList:[... state.messageList,
            
             {
            text: action.payload,
            date: new Date().toLocaleString(),
            sender:'1',
            reciver:'3'
           }
          ]
          }
          
        case 'SAVE_CONVERSATIONLIST' :
            return{
                ...state ,
              conversationList: [
                {
                  conversationId : action.conversationId,
                  mail:action.mail,
                  latestMessage: action.latestMessage,
                  latestMessageDate: action.latestMessageDate,
                  unseenMessage: action.unseenMessage,
                  proFileUrl: action.proFileUrl,
                },
                ...state.conversationList
              ]
            }

        case 'GET_MESSAGES_LIST' :
              return{
                ...state ,
                messageList : action.messagesList
              }
            
        case 'GET_ID' :
               return{
               ...state , 
              conversationId: action.conversationId

               }

      default:
        return state  
     
    }
  }
  export default conversation
