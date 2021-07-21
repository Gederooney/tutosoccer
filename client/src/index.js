import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import scoresBoard from "./pages/scoresBoard";

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<Fragment>
				<Switch>
					<Route exact path="/soccer" component={scoresBoard} />
				</Switch>
			</Fragment>
		</Router>
	</React.StrictMode>,
	document.getElementById("root")
);
