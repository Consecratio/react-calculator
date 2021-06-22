import React, { Component } from 'react'

export default class Calculator extends Component {
    constructor(props) {
        super()
        this.state = {
            num1: 0,
            num2: 0,
            total: 0
        }
    }

    setNum = (e, num) => {
        this.setState({ [num]: e.target.value })
    }

    sum = (e) => {
        // add numbers in the state
        let newNum = Number(this.state.num1) + Number(this.state.num2)
        this.setState({ total: newNum })
    }

    sub = (e) => {
        // add numbers in the state
        let newNum = Number(this.state.num1) - Number(this.state.num2)
        this.setState({ total: newNum })
    }
    
    divide = (e) => {
        // add numbers in the state
        let newNum = Number(this.state.num1) / Number(this.state.num2)
        this.setState({ total: newNum })
    }

    multiply = (e) => {
        // add numbers in the state
        let newNum = Number(this.state.num1) * Number(this.state.num2)
        this.setState({ total: newNum })
    }

    render() {
        return (
            <div className="container">
                <h1>Add with React!</h1>

                <div className="add">
                    <input type="number" 
                        name="num1"
                        placeholder="Enter your first number"
                        value={ this.state.num1 }
                        onChange={ (e) => this.setNum(e, 'num1') }
                    />
                    <span>and</span>
                    <input type="number" 
                        name="num2"
                        placeholder="Enter your second number"
                        value={ this.state.num2 }
                        onChange={ (e) => this.setNum(e, 'num2')}
                    />
                    <button onClick={(e) => this.sum(e)}>Sum</button>
                    <button onClick={(e) => this.sub(e)}>Subtract</button>
                    <button onClick={(e) => this.divide(e)}>Divide</button>
                    <button onClick={(e) => this.multiply(e)}>Multiply</button>
                    <h3>{ this.state.total }</h3>
                </div>
            </div>
        )
    }
}