import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    return (
        <div>
            <label className="label" for="name"></label>
            Enter Name:
            <input id="name" type="text"/>
            <button style={{backgroundColor: 'blue', color:'white'}}>Submit</button>
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector("#root"));