import React, { Component } from 'react'

export class ClassComponentClick extends Component {
    clikHandeler(){
        console.log("Clicked the button");
        
    }
    render() {
        return (
            <div>
                <button onClick={this.clikHandeler}>Click me</button>
            </div>
        )
    }
}

export default ClassComponentClick
