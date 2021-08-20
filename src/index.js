import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import App from "./App";

const options = {
  timeout: 10000,
};

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Provider template={AlertTemplate} {...options}>
				<App />
			</Provider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);
