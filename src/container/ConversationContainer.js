import {connect}  from 'react-redux'
import Conversation from '../component/conversation/Conversation';

const mapDispatchToProps = (dispatch) => ({
    dispatch: dispatch
})

const mapStateToProps =(state) => ({
    messagelist : state.messagelist
})

export default connect( mapStateToProps ,mapDispatchToProps )(Conversation)
