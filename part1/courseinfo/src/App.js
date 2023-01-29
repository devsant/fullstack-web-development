import Content from "./components/Content";
import Header from "./components/Header";
import Total from "./components/Total";

const App = () => {
	const course = "Half Stack application development";
	const part1 = "Fundamentals of React";
	const excercises1 = 10;
	const part2 = "Using props to pass data";
	const excercises2 = 7;
	const part3 = "State of a component";
	const excercises3 = 14;

	return (
		<div>
			<Header course={course} />
			<Content content={part1} />
			<Total part={excercises1} />
		</div>
	);
};

export default App;
