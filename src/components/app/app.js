import './app.css';
import { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../layout/layout";
import Home from "../pages/home/home";
import About from "../pages/about/about";
import NotFound from "../pages/not-found/not-found";

export default class App extends Component {
    render() {
        return (
            <Routes>
                <Route path="/" element={ <Layout /> }>
                    <Route path="home" element={ <Home /> }/>
                    <Route path="about" element={ <About /> }/>
                    <Route path="*" element={ <NotFound /> }/>
                </Route>
            </Routes>
        );
    }
}