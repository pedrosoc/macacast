import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "../components/Header";

/* Pages */
import About from "../pages/about";
import Feed from "../pages/feed";
import Home from "../pages/home";
import Post from "../pages/post";

import GlobalStyle from "@global-style"; 

const App = () => {
	return (
		<BrowserRouter>

			<GlobalStyle />
			<Header />

			<Switch>
				<Route exact path="/" component={Home}/>
				<Route exact path="/about" component={About}/>
				<Route exact path="/feed" component={Feed}/>
				<Route exact path="/feed/:id" component={Post}/>
			</Switch>

		</BrowserRouter>
	);
};

export default App;