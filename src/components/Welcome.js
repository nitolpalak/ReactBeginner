import React, { Component } from 'react'

class Welcome extends Component {
    render(props) {
        console.log(props)
        return <h1> Welcome {this.props.name}, King of {this.props.origin} </h1>
    }

    //destructing props in function body
    // render(props) {
    //     const {name, origin} = this.props
    //     console.log(props)
    //     return <h1> Welcome {name}, King of {origin} </h1>
    // }
}




export default Welcome