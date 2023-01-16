import React from 'react';

class Feedback extends React.Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }

    handleGood = () => { 
        this.setState(prevState => {
            return {
                good: prevState.good + 1,
            }
        });
    };
    handleNeutral = () => {
        this.setState(prevState => {
            return {
                neutral: prevState.neutral + 1,
            }
        });
    };
             
    handleBad = () => {
         this.setState(prevState => {
            return {
                bad: prevState.bad + 1,
            }
        });
    };

    
    render() {
        return (
            <div className='Feedback'>
                <h2 className='title'>Please leave feedback</h2>

                <div className='Feedback__controls'>
                    <button type='button' onClick={this.handleGood}>Good</button>
                    <button type='button' onClick={this.handleNeutral}>Neutral</button>
                    <button type='button' onClick={this.handleBad}>Bad</button>
                </div>

                <div className='Statistics'>
                    <h2 className='Statistics__title'>Statistics</h2>

                    <div className='Statistics__info'>
                        <h3 className='Statistics__value'>Good: <span>{this.state.good}</span></h3>
                        <h3 className='Statistics__value'>Neutral: <span>{this.state.neutral}</span></h3>
                        <h3 className='Statistics__value'>Bad: <span>{this.state.bad}</span></h3>
                        <h3 className='Statistics__value'>Total: <span>{this.state.bad+this.state.neutral+this.state.good}</span></h3>
                        <h3 className='Statistics__value'>Positive feedback: <span>{((this.state.good)*100/(this.state.bad+this.state.neutral+this.state.good)).toFixed()}%</span></h3>
                    </div>
                    
                </div>
            </div>

        );

    }
}

export default Feedback;