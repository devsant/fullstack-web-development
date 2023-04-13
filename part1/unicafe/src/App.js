import React, { useState } from "react";

const Button = ({ text, handleClick }) => {
	return <button onClick={handleClick}>{text}</button>;
};

const Statistics = ({ good, neutral, bad, total, average, percentage }) => {
	return (
		<>
			<h2>Statistics</h2>

			{!total ? (
				<div>No feedback given</div>
			) : (
				<table>
					<tbody>
						<StatisticLine text="Good" value={good} />
						<StatisticLine text="Neutral" value={neutral} />
						<StatisticLine text="Bad" value={bad} />
						<StatisticLine text="Total" value={total} />
						<StatisticLine text="Average" value={average} />
						<StatisticLine text="Percentage" value={percentage} />
					</tbody>
				</table>
			)}
		</>
	);
};

const StatisticLine = ({ text, value }) => {
	return (
		<tr>
			<td>{text}</td>
			<td>{value}</td>
		</tr>
	);
};

const App = () => {
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);

	const total = good + neutral + bad;
	const average = total > 0 ? (good - bad) / total : 0;
	const percentage = total > 0 ? (good * 100) / total : 0;

	const addGood = () => setGood(good + 1);

	const addNeutral = () => setNeutral(neutral + 1);

	const addBad = () => setBad(bad + 1);

	return (
		<div>
			<h1>Give Feedback</h1>

			<Button text="Good" handleClick={addGood}></Button>
			<Button text="Neutral" handleClick={addNeutral}></Button>
			<Button text="Bad" handleClick={addBad}></Button>

			<h2>Statistics</h2>
			<Statistics
				good={good}
				neutral={neutral}
				bad={bad}
				total={total}
				average={average}
				percentage={percentage}
			></Statistics>
		</div>
	);
};

export default App;
