import React, { Component } from 'react'

class Watch extends Component {
    constructor(props) {
        super(props)
        this.state = {
            date: new Date().toLocaleDateString(),
            Hours: new Date().toLocaleTimeString().split(":")[0],
            Miniutes: new Date().toLocaleTimeString().split(":")[1],
            Second: new Date().toLocaleTimeString().split(":")[2],
            Month: new Date().toLocaleString('default', { month: 'long' }),
            Day: new Date().toLocaleDateString("locale", { weekday: 'long' }),
            DateNum: new Date().getDate(),
            year:new Date().getFullYear()
        }


        setInterval(() => {
            this.setState({

                Hours: new Date().toLocaleTimeString().split(":")[0],
                Miniutes: new Date().toLocaleTimeString().split(":")[1],
                Second: new Date().toLocaleTimeString().split(":")[2],
                Month: new Date().toLocaleString('default', { month: 'long' }),
                Day: new Date().toLocaleDateString("locale", { weekday: 'long' }),
                DateNum: new Date().getDate(),
            year:new Date().getFullYear()



            })
        }, 1000);
    }
    render() {
        return (
            <div className="container  mt-5 text-success"  >
                <h1 className="display-5 font-weight-bold">{this.state.Day}</h1>

                <div className="container d-flex justify-content-center mt-1 text-success ">
                    <h1 className="display-1 font-weight-bold">{this.state.Hours}</h1>
                    <h1 className="display-1  font-weight-bold" >:</h1>
                    <h1 className="display-1 font-weight-bold">{this.state.Miniutes}</h1>
                    <p>{this.state.Second}</p>
                </div>
                <div className="container d-flex justify-content-center mt-1 text-success">
                    <h1 className="display-5 font-weight-bold mr-3">{this.state.Month}</h1>
                    <h1 className="display-5 font-weight-bold mr-3">{this.state.DateNum}</h1>
                    <h1 className="display-5 font-weight-bold">{this.state.year}</h1>


                </div>



            </div>
        )
    }
}
export default Watch
