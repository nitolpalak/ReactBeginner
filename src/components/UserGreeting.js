import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: true
        }
    }
    
    render() {

        return this.state.isLoggedIn && <div>Welcome Boy</div>


        //conditional ternary approach

        // return(
        //     this.state.isLoggedIn ? (
        //         <div>Welcome Boy</div>
        //     ) : (
        //         <div>Welcome Stranger</div>
        //     )
            
        // )

        //Element Approach

        // let message
        // if(this.state.isLoggedIn){
        //     message = <div> Welcome Boy </div>
        // }
        // else{
        //     message = <div> Welcome Stranger </div>
        // }

        // return <div>{message}</div>

        //Normal Approach

        // if(this.state.isLoggedIn){
        //     return <div> Welcome Boy </div>
        // }
        // else{
        //     return <div> Welcome Stranger </div>
        // }
        // return (
        //     <div>
        //         <div>Welcome Boy</div>
        //         <div>Welcome Stranger</div>
        //     </div>

        // )
    }
}

export default UserGreeting
