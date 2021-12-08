// this should handle my fetch request to back end for players and times
// once we have our routes set up, can focus on fetch to fetch all the scores, etc.
// this is where we will user our thunk async middleware fetch request
// how can i set up fetch data in score container and 
// render on the page and put it in redux store and then render it

import React from 'react' 

export default class ScoreContainer extends React.Component {
    
    componentDidMount(){
        fetch("http://localhost:3000/score")
        .then(r => r.json())
        .then(data => console.log(data))
    }
    
    
    render(){
        return (
            <div>
                All Scores
            </div>
        )
    }
}