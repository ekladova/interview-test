import React, { useState } from "react";
import "./totalCost.css";

const TotalCost = ({ total }) => {
	// let [counter, setCounter] = useState(0);

	return (
		<div className="totalCost">
			<h2>Total</h2>
			<h1 className="totalAmount">{total.toFixed(2)}</h1>
		</div>
	);
};

export default TotalCost;
