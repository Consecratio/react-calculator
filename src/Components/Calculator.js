import { useState } from 'react'

const Calculator = () => {
    const [num1, setNum1] = useState(0)
    const [num2, setNum2] = useState(0)
    const [total, setTotal] = useState(0)

    const getTotal = (e) => {
        let newNum
        
        switch(e.target.value) {
            case "+":
                // add numbers in the state
                newNum = Number(num1) + Number(num2)
                break
            case "-":
                // subtract numbers in the state
                newNum = Number(num1) - Number(num2)
                break
            case "/":
                // divide numbers in the state
                newNum = Number(num1) / Number(num2)
                break
            case "*":
                // multiply numbers in the state
                newNum = Number(num1) * Number(num2)
                break
            default:
                newNum = 0
        }

        setTotal(newNum)
    }

    return (
        <div className="container">
            <h1>Add with React!</h1>

            <div className="add">
                <input type="number" 
                    name="num1"
                    placeholder="Enter your first number"
                    value={ num1 }
                    onChange={ (e) => setNum1(e.target.value) }
                />
                <span>and</span>
                <input type="number" 
                    name="num2"
                    placeholder="Enter your second number"
                    value={ num2 }
                    onChange={ (e) => setNum2(e.target.value)}
                />
                <button onClick={(e) => getTotal(e)} value="+">Sum</button>
                <button onClick={(e) => getTotal(e)} value="-">Subtract</button>
                <button onClick={(e) => getTotal(e)} value="/">Divide</button>
                <button onClick={(e) => getTotal(e)} value="*">Multiply</button>
                <h3>{ total }</h3>
            </div>
        </div>
    )
}

export default Calculator