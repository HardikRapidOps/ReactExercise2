import React, { Component } from 'react'

class LifeCycleB extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: 'Jatin'
        }
        console.log("LifecycleB constructor")

    }
    static getDerivedStateFromProps(props, state) {
        console.log("LifecycleB getDerivedFromProps")
        return null
    }

    componentDidMount() {
        console.log('LifecycleB componentDidMount');

    }

    shouldComponentUpdate() {
        console.log("LifecycleB shouldComponentUpdate");
        return true
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("LifecycleB getsnapshopBeforeUpdate");
        return null
    }
    componentDidUpdate() {
        console.log("lifecycleB componentDidUpdate");
    }
    render() {
        console.log("LifecycleB render")

        return (
            < div >
                LifeCycleB
            </div >
        )
    }
}

export default LifeCycleB
