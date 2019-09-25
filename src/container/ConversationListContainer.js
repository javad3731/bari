import ConversationList from '../component/conversation/CoversationList'
import { connect } from 'react-redux';

const mapStateToProps = (state) =>({
    conversationList: state.conversationList
})

const mapDispatchToProps =(dispatch) =>({
    dispatch: dispatch
})

export default connect(mapStateToProps , mapDispatchToProps)(ConversationList)