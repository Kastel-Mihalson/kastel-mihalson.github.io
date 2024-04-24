import { Component } from "react";
import { Outlet } from "react-router-dom";
import './layout.css';
import Profile from "../profile/profile";
import Navigation from "../navigation/navigation";

export default class Layout extends Component {
    render() {
        return (
            <div className="container">
                <Profile />
                <Navigation />
                <div className="content">
                    {<Outlet/>}
                </div>
            </div>
        );
    }
}