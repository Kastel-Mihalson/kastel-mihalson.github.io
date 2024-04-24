import { Component } from "react";
import './navigation.css';
import { Link } from "react-router-dom";

export default class Navigation extends Component {
    render() {
        return (
            <header>
                <ul>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </header>
        );
    }
}