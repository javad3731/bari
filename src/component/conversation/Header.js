import React  from 'react'

class Header extends React.Component {
    render(){
        console.log('ppppp', this.props)
        return(
            <div className='header'>
                <img src={this.props.profileUrl} />
              {this.props.firstName} {this.props.lastName} {this.props.email}
            </div>
        )
    }
}
 
export default Header 
