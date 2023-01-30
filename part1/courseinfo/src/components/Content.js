import Part from "./Part";

const Content = (props) => {
	return (
		<div>
			<Part content={props.parts[0].name} part={props.parts[0].exercises} />
			<Part content={props.parts[1].name} part={props.parts[1].exercises} />
			<Part content={props.parts[2].name} part={props.parts[2].exercises} />
		</div>
	);
};

export default Content;
