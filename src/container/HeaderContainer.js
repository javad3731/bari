import Header from '../component/conversation/Header'
import {connect}  from 'react-redux'

const mapStateToProps = (state) => ({
    firstName: state.firstName,
    lastName: state.lastName,
    email: state.email,
    profileUrl : state.profileUrl
})

export default connect(mapStateToProps)(Header)
