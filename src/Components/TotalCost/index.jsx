import React, { useState } from "react";
import "./totalCost.css";

const TotalCost = ({ total }) => {
	// let [counter, setCounter] = useState(0);

	return (
		<div className="totalCost">
			<h2>Total</h2>
			{total.toFixed(2)}
		</div>
	);
};

export default TotalCost;
