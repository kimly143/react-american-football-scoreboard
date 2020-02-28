import React from 'react';
import './App.css';


const Buttons = (props) => {
    
    return (
        <section className='buttons'>
            <div className='homeButtons'>
            <button className='homeButtons__touchdown' onClick={() =>{
                props.setHomeScore(7);
            }}>Home Touchdown</button>
            <button className='homeButtons__fieldGoal' onClick={() =>{
                props.setHomeScore(3);
            }}>Home Field Goal</button>
            </div>

            <div className='awayButtons'>
            <button className='awayButtons__touchdown' onClick={() => {
                props.setAwayScore(7);
            }}>Away Touchdown</button>
            <button className='awayButtons__fieldGoal' onClick={()=> {
                props.setAwayScore(3);
            }}>Away Field Goal</button>
            </div>

        </section>
    ); 
};

export default Buttons;