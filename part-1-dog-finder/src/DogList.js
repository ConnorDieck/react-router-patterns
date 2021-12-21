import React from "react";
import { useParams } from "react-router-dom";

const DogList = () => {
	const params = useParams();
	return (
		<div>
			<h1>Params:</h1>
			<p>{console.log(params)}</p>
		</div>
	);
};

export default DogList;
