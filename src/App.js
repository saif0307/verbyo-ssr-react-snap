import Index from "./components";
import ReactGA from 'react-ga';
const TRACKING_ID = "UA-XXXXX-X"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);
function App() {
	return (
		<>
			<Index />
		</>
	);
}

export default App;
