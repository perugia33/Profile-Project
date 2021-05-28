import React, { Component } from 'react';
import './Profile.css';

export class Profile extends Component {
    constructor(props) {
        super(props);    
        this.state = {
        intro:this.props.intro
        };
        this.addButtonHandler= this.addButtonHandler.bind(this);       
    }

    addButtonHandler(){
       
        console.log ("This.state:", this.state.intro);
        this.setState({
            intro: this.state.intro = 'I am a Front-end Developer'
        }
        )    
    }

    resetButtonHandler(){
        console.log ("This.state:",this.state.intro);
        this.setState({
            count: this.state.intro = 'My Name is Theresa'
        }
        )
    }


    
    render() {
        return (
            <div>
                <div className= 'greeting'>
                    <h1 className= 'greeting'>Hello</h1>
                    <h2 id= "state">{this.state.intro}</h2> 
                    <button id= "button1" onClick= {()=> this.resetButtonHandler()}> Name</button> 
                    <button id= "button2" onClick= {()=> this.addButtonHandler()}> Skills</button> 
                </div>
                
            </div>
        )
    }
}

export default Profile


  