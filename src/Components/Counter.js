import React, { Component } from 'react'
import './Counter.css';

export class Counter extends Component {

    constructor(props) {
        super(props);    
        this.state = {
        count:this.props.count
        };
        this.addButtonHandler= this.addButtonHandler.bind(this);

    }

    addButtonHandler(){
       
        console.log ("This.state:", this.state.count);
        this.setState({
            count: this.state.count +1
        }
        )    
    }
    render() {
        return (
            <div>
                <div className= 'counter'>
               <h2 id= "state">{this.state.count}</h2> 
                <button id= "like" onClick= {()=> this.addButtonHandler()}> <i class="far fa-heart"></i> </button> 
                </div>
                
            </div>
        )
    }
}

export default Counter
