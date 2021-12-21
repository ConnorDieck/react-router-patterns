import React from "react";
import { useParams } from "react-router-dom";

const DogDetails = ({ dogs }) => {
	const name = useParams().name;
	let info = {};

	for (let dog of dogs) {
		if (dog.name.toLowerCase() === name) {
			info = dog;
		}
	}

	console.log(info);

	return (
		<div>
			<img src={info.src} />
			<h1>{info.name}</h1>
			<div>Age: {info.age}</div>
			<div>
				Facts about {info.name}:
				<ul>
					{info.facts.map((fact, i) => {
						return <li key={i}>{fact}</li>;
					})}
				</ul>
			</div>
		</div>
	);
};

export default DogDetails;
