import React, { useState } from 'react';
import './App.css';
import BottomRow from './BottomRow';
import Buttons from './Buttons';
const ScoreBoard = () => {
	const [ homeScore, setHomeScore ] = useState(0); //useState give current variable and update function
	const [ awayScore, setAwayScore ] = useState(0);
	return (
		<section className="scoreboard">
			<div className="topRow">
				<div className="home">
					<h2 className="home__name">Lions</h2>
					<div className="home__score">{homeScore}</div>
				</div>
				<div className="timer">00:03</div>
				<div className="away">
					<h2 className="away__name">Tigers</h2>
					<div className="away__score">{awayScore}</div>
				</div>
			</div>
			<BottomRow />
			<Buttons
				setHomeScore={(value) => {
					setHomeScore(homeScore + value);
				}}
				setAwayScore={(value) => {
					setAwayScore(awayScore + value);
				}}
			/>
		</section>
	);
};

export default ScoreBoard;
