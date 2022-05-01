import React, { useState } from "react";
function FuncComp() {
    let [flag, setFlag] = useState(false)
    const showIt = () => {
        setFlag(!flag)
    }
    return (<div className= 'mainDiv'>
        <button onClick={showIt} className = 'btn'>To See the Styling Using Functional Component</button>
        {
            flag ? <div className='showLeft'>
                <h1>This is created using functional Component</h1>
                <p>This is done using external Css</p>
                <p style={{color:'yellow'}}>This is done using inline CSS</p>
            </div> : null
        }
    </div>)
}
export default FuncComp;