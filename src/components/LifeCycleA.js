import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

class LifeCycleA extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: 'Jatin'
        }
        console.log("LifecycleA constructor")

    }
    static getDerivedStateFromProps(props, state) {
        console.log("LifecycleA getDerivedFromProps")
        return null
    }

    componentDidMount() {
        console.log('LifecycleA componentDidMount');

    }
    shouldComponentUpdate() {
        console.log("LifecycleA shouldComponentUpdate");
        return true
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("LifecycleA getsnapshopBeforeUpdate");
        return null
    }
    componentDidUpdate() {
        console.log("lifecycleA componentDidUpdate");
    }
    changeState = () => {
        this.setState({
            name: 'Hello'
        })
    }
    render() {
        console.log("LifecycleA render")

        return (
            <div>
                < div >
                    LifeCycleA
            </div >
                <button onClick={this.changeState}>Change State</button>
                <LifeCycleB />
            </div>
        )
    }
}

export default LifeCycleA
