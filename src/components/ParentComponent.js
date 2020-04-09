import React, { Component } from 'react'

export class ParentComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            parentName: 'Parent'
        }
        this.greetParent = this.greetParent.bind(this)
    }
    greetParent() {
        alert(`hello ${this.state.parentName}`)
    }
    render() {
        return (
            <div>

            </div>
        )
    }
}

export default ParentComponent
