import React from 'react'

/*function Greet() {
    return <h1> Greetings </h1> 
}*/

const Greet = (props) => {
    console.log(props)
    return (
        <div>
            <h1>Greetings {props.name}, King of {props.origin}s!</h1>
            yues{props.children}yues
            yues{props.children}yues
        </div>
    )
}

//destructing props in function params
// const Greet = ({name, origin}) => {
//     return (
//         <div>
//             <h1>Greetings {name}, King of {origin}s!</h1>
//         </div>
//     )
// }
//destructing props in function body
// const Greet = (props) => {
//     const {name, origin} = props
//     return (
//         <div>
//             <h1>Greetings {name}, King of {origin}s!</h1>
//         </div>
//     )
// }


export default Greet