import React,  { Component } from 'react'

class ClassCounter extends Component {

    constructor(props){
        super(props)

        this.state = {
            count:0
        }
    }

    HandleIncrease(){
        this.setState(
            {
                count: this.state.count + 1
        },
        () => {
            console.log('callback value', this.state.count)
        }
        ) 
        console.log(this.state.count)
    }
    

    HandleDecrease(){
        this.setState(
            {
            count: this.state.count - 1
        },
        () => {
            console.log('callback value', this.state.count)
        }
        ) 
        console.log(this.state.count)
    }
        
        render() { 
            return (
                <>
                <div>
                <p>count - {this.state.count}</p>
                <button onClick={() => this.HandleIncrease()}>Increase Count</button>
                <button onClick={() => this.HandleDecrease()}>Decrease Count</button>
                </div>


                </>
            )
        }
    
    }
    
    export default ClassCounter