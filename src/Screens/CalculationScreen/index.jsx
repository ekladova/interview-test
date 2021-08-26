import React, { useState } from "react";
// import { Route, Switch } from "react-router-dom";
import CostCard from "../../Components/CostCard";
import "./calculation.css";

const CalculationScreen = () => {
	const [total, setTotal] = useState(0);

	const onClick = (e) => {
		console.log(e.currentTarget.firstChild.className);
		if (e.currentTarget.firstChild.className !== "cost-card clicked") {
			setTotal(+total + +e.currentTarget.firstChild.lastChild.lastChild.wholeText);
		} else {
			setTotal(+total - +e.currentTarget.firstChild.lastChild.lastChild.wholeText);
		}
	};

	return (
		<>
			<h1 className="title">Calculating your total costs</h1>
			{/* <Switch>
				<Route
					path="/bridge-test"
					exact
					render={
						<div className="cards">
							<CostCard onClick={onClick} estimate="3" text="test" />
							<CostCard onClick={onClick} estimate="3" text="test" />
							<CostCard onClick={onClick} estimate="3" text="test" />
							<CostCard onClick={onClick} estimate="3" text="test" />
						</div>
					}
				></Route>
			</Switch> */}

			<div className="cards">
				<CostCard onClick={onClick} estimate="6.00" text="Identity Requirements" />
				<CostCard onClick={onClick} estimate="3.00" text="Request a quotation" />
				<CostCard onClick={onClick} estimate="16.00" text="Find Products" />
				<CostCard onClick={onClick} estimate="6.00" text="Rainse an Order" />
				<CostCard onClick={onClick} estimate="21.55" text="Authorise sale" />
				<CostCard onClick={onClick} estimate="13.00" text="Pay Provider" />
				<CostCard onClick={onClick} estimate="4.30" text="Deliver Product" />
				<CostCard onClick={onClick} estimate="6.00" text="Invoice Check" />
				<CostCard onClick={onClick} estimate="6.00" text="Place Order" />
			</div>
			<CostCard finalCost={true} total={total} />
		</>
	);
};

export default CalculationScreen;
