import {connect}  from 'react-redux'
import Footer from '../component/conversation/Footer';
import { statement } from '@babel/template';

const mapDispatchToProps = (dispatch) => ({
    dispatch: dispatch
})

const mapStateToProps =(state)=> ({
    conversationId : state.conversationId
})

export default connect(mapStateToProps, mapDispatchToProps)(Footer)
