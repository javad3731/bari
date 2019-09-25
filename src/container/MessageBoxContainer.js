import MessageBox from '../component/conversation/MessageBox'
import {connect}  from 'react-redux'

const mapStateToProps = (state) => ({
    messagesList: state.messageList,
    conversationId : state.conversationId
})

const mapDispatchToProps = (dispatch) => ({
    dispatch: dispatch
})

export default connect(mapStateToProps, mapDispatchToProps)(MessageBox)
