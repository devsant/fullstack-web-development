import Part from "./Part";

const Content = (props) => {
	return (
		<div>
			<Part content={props.content1} part={props.part1} />
			<Part content={props.content2} part={props.part2} />
			<Part content={props.content3} part={props.part3} />
		</div>
	);
};

export default Content;
