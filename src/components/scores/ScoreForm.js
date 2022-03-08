
import React, { Component } from 'react'; 
import { withRouter } from 'react-router-dom'
import { addScore } from '../../redux/scoreActions';
import { connect } from 'react-redux';
//import {Redirect} from 'react-router-dom'



class ScoreForm extends Component {
    state ={
        username: "",
        turns: this.props.turns,
        flag: false
    }

     
    handleChange = (e) => {
        //console.log(e.target.value)
        this.setState({
            [e.target.name]: e.target.value
            //username: e.target.value})
        })
        return 
    }

    handleSubmit = (e) => {
        e.preventDefault()
        // dispatch my action to addScore
        this.props.dispatchAddScore(this.state)
        this.setState({username: "",
        turns: "",
        flag: true}) 
        this.props.history.push("/scores") 
    }

    // handleClick = () => {
    //     

    // }


    render() {
        return (
            <div className="popup-box">
                <div className="box">
                    <form onSubmit={this.handleSubmit}>
                        <h4>Success! All Kittens Matched</h4>
                        <h5>Save your score of {this.state.turns}</h5>
                        <label htmlFor="score-username-input">Username:</label>
                        <input 
                            id="score-username-input" 
                            type="text" 
                            name="username"
                            value={this.state.username} 
                            onChange={this.handleChange}    
                            /><br /><br />
                        <label htmlFor="score-turns-input"></label>
                        <input 
                            id="score-turns-input" 
                            type="text"
                            name="turns"
                            value={this.state.turns}
                            hidden="hidden"
                            onChange={this.handleChange}     
                        />
                        <input type="submit" />

                    {/* <button onClick={this.handleClick}>Submit</button>  */}
                </form>
            </div>  
        </div>               
                    
                
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
      dispatchAddScore: (score) => dispatch(addScore(score)) 
    }
}

export default withRouter(connect(null, mapDispatchToProps)(ScoreForm))