import "./App.css";
import CalculationScreen from "./Screens/CalculationScreen";
import image from "./assets/ant-rozetsky-HXOllTSwrpM-unsplash@2x.png";

function App() {
	return (
		<>
			<div className="main">
				<img className="background" src={image} />
				<div className="App">
					<CalculationScreen />
				</div>
			</div>
		</>
	);
}

export default App;
