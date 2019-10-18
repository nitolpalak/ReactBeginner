import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {
             count: 0
        }
    }

    increase() {
        // this.setState({
        //     count: this.state.count + 1
        // }, 
        // () => {
        //     console.log('Callback Value', this.state.count)
        // })
        this.setState((prevState, props) => ({
            count: prevState.count + 1
        }))
        console.log(this.state.count)
    }

    increaseFive(){
        this.increase()
        this.increase()
        this.increase()
        this.increase()
        this.increase()

    }
    
    render() {
        return (
            <div>
                <div>
                    Count - {this.state.count}
                </div>
                <div>
                    <button onClick={()=>this.increaseFive(this.props)} value='1'> Increase </button>
                </div>
            </div>
        )
    }
}

export default Counter


