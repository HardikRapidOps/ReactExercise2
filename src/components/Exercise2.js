import React, { Component } from 'react'
class Exercise2 extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            data: [],
            id: '',
            singleData: '',
            FirstName: '',
            LastName: '',
            isDisplayUpdateBtn : 'none',
            isDisplayAddBtn: 'initial'
        }
    }

    changeHandler(e) {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    clickHandlerAdd(e) {
        e.preventDefault()
        if (this.state.data.length === 0) {
            this.state.id = 0
        } else {
            this.state.id = this.state.data[this.state.data.length - 1].id + 1
        }
        this.state.data.push({
            id: this.state.id,
            FirstName: this.state.FirstName,
            LastName: this.state.LastName
        })
        this.setState({
            FirstName: '',
            LastName: ''
        })
    }

    clickHandlerEdit(e, id) {
        console.log(id);

        e.preventDefault()
        this.state.singleData = this.state.data.find(element => element.id === id)        
        this.setState({
            isDisplayUpdateBtn : 'initial',
            isDisplayAddBtn:'none',
            id: id,
            FirstName: this.state.singleData.FirstName,
            LastName: this.state.singleData.LastName
        })
    }

    clickHandlerDelete(e, id) {
        e.preventDefault()
        this.state.data.splice(this.state.data.findIndex(d => d.id === id), 1)
        this.setState({})
    }

    clickHandlerUpdate(e) {
        e.preventDefault()
        this.state.singleData = this.state.data.find(item => item.id === this.state.id)
        this.state.singleData.FirstName = this.state.FirstName
        this.state.singleData.LastName = this.state.LastName
        this.setState({
            FirstName: '',
            LastName: '',
            isDisplayAddBtn:'initial',
            isDisplayUpdateBtn:'none'
        })
    }
    
    render() {
        return (
            <div>
                <div style={{ color: 'white' }}>
                    <input id="FirstName" onChange={e => this.changeHandler(e)} type="text" value={this.state.FirstName} placeholder="First Name" />
                    <input id="LastName" onChange={e => this.changeHandler(e)} type="text" value={this.state.LastName} placeholder="Last Name" />
                    <button id="addbtn" style={{display: this.state.isDisplayAddBtn}} onClick={e => this.clickHandlerAdd(e)}>ADD</button>
                    <button id="updatebtn" style={{display: this.state.isDisplayUpdateBtn}} onClick={e => this.clickHandlerUpdate(e)}>UPDATE</button>
                </div>
                <div>
                    <table>
                        <thead>
                            <tr>
                            <th>ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th><i className="fas fa-edit text-warning"></i></th>
                            <th><i className="fas fa-trash text-danger"></i></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.data.map((item, index) => 
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.FirstName}</td>
                                    <td>{item.LastName}</td>
                                    <td><i onClick={e => this.clickHandlerEdit(e, item.id)} className="fas fa-edit text-warning"></i></td>
                                    <td><i onClick={e => this.clickHandlerDelete(e, item.id)} className="fas fa-trash text-danger"></i></td>
                                </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div >
        )
    }
}

export default Exercise2
