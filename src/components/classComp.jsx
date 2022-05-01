import React, { Component} from "react";
class CalssComp extends Component {
    constructor(){  
        super(); 
        this.state = {flag : false}   
    }
    showIt = () => {
        this.setState({
            flag : !this.state.flag
        })
    }
    render() {
        
        return (<div className='mainDiv'>
            <button onClick={()=>this.showIt()} className = 'btn'>To See the Styling Using Class Component</button>
            {
                this.state.flag ? <div className='showLeft'>
                <h1>This is created using class Component</h1>
                <p>This is done using external Css</p>
                <p style={{color:'yellow'}}>This is done using inline CSS</p>
            </div>  : null
            }
        </div>)
    }
}
export default CalssComp;