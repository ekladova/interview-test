import React, { useState } from "react";
import TotalCost from "../TotalCost";
import "./costcard.css";

const CostCard = ({ total, onClick, estimate, text, image, finalCost = false }) => {
	const [click, setClick] = useState(false);

	const clicked = () => {
		setClick(!click);
	};

	return !finalCost ? (
		<div onClick={onClick}>
			<div onClick={clicked} className={!click ? "cost-card" : "cost-card clicked"}>
				{image ? <img src={image} className="cost-card-icon"></img> : ""}
				<h2 className="cost-card-text">{text}</h2>{" "}
				<div className="estimate-container">
					<p>ESTIMATE</p> {estimate}
				</div>
			</div>
		</div>
	) : (
		<TotalCost total={total} />
	);
};

export default CostCard;
