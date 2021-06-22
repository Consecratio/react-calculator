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

    total = (e) => {
        let newNum
        
        switch(e.target.value) {
            case "+":
                // add numbers in the state
                newNum = Number(this.state.num1) + Number(this.state.num2)
                break
            case "-":
                // subtract numbers in the state
                newNum = Number(this.state.num1) - Number(this.state.num2)
                break
            case "/":
                // divide numbers in the state
                newNum = Number(this.state.num1) / Number(this.state.num2)
                break
            case "*":
                // multiply numbers in the state
                newNum = Number(this.state.num1) * Number(this.state.num2)
                break
            default:
                newNum = 0
        }

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
                    <button onClick={(e) => this.total(e)} value="+">Sum</button>
                    <button onClick={(e) => this.total(e)} value="-">Subtract</button>
                    <button onClick={(e) => this.total(e)} value="/">Divide</button>
                    <button onClick={(e) => this.total(e)} value="*">Multiply</button>
                    <h3>{ this.state.total }</h3>
                </div>
            </div>
        )
    }
}