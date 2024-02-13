import React, { useState } from 'react'

const App = () => {

    const [step, setStep] = useState(1);
    const [count, setCount] = useState(0);

    const date = new Date('june 12 2026');
    date.setDate(date.getDate() + count);

    return (
        <div className="App">
            <h1>Counter</h1>
            <div className='container'>

                <div className="box">
                    <button onClick={() => setStep(s => s - 1)}>-</button>
                    <span>Step: {step}</span>
                    <button onClick={() => setStep(s => s + 1)}>+</button>
                </div>    

                <div className="box">                  
                    <button onClick={() => setCount((c) => c - step)}>-</button>
                    <span>Count: { count }</span>
                    <button onClick={() => setCount((c) => c + step)}>+</button>
                </div>
            </div>

            <div className="date">
                <span>{count === 0 ? 'Today is '
                    : count > 0 ? `${count} days from today is: `
                    : `${Math.abs(count)} days ago was: `}</span>
                <span>{ date.toDateString() }</span>
            </div>
        </div>
    )
}

export default App;
