import React from 'react'

function Parent(){
    const message = "Hellow from Parent"
    return (
        <div>
            <Child message = {message}/>
        </div>
    )
}

function Child({message}){
    return (
        <div>
            <Grandchild message = {message}/>
        </div>
    )
}

function Grandchild({message}){
    return (
        <div>
            <p>.....{message}</p>
        </div>
    )
}

const PropDrilling =()=>{
    return(
        <div>
            <Parent />
        </div>
    )
}

export default PropDrilling;
