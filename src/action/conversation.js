export const getUserName = (firstName , lastName , email , profileUrl) => ({
    type: 'SAVE_SELECTED_USER_NAME',
    name: firstName,
    family: lastName,
    email: email,
    profileUrl : profileUrl
  })
  
  export const sendNewMessage = (newMessage) => ({
    type: 'SEND_NEW_MESSAGE',
    payload: newMessage
  }) 
  
  export const createNewConversation = (name) => ({
    type: 'CREATE_NEW_CONVERSATION',
    payload: name
  })

  // export const editMessage = (text, index) => ({
  //   type: 'EDIT_MESSAGE',
  //   payload: text,
  //   index: index
  // }) 

  export const saveConversationList = (conversationId,mail,latestMessage,latestMessageDate,unseenMessage,proFileUrl) => ({
    type: 'SAVE_CONVERSATIONLIST',
    conversationId : conversationId,
    mail:mail,
    latestMessage: latestMessage,
    latestMessageDate: latestMessageDate,
    unseenMessage: unseenMessage,
    proFileUrl: proFileUrl,
  }) 

  export const getMessagesList = (messagesList) => ({
    type : 'GET_MESSAGES_LIST',
    messagesList : messagesList
  })
   
  export const getId = (conversationId) => ({
    type: 'GET_ID' ,
    conversationId: conversationId
  })