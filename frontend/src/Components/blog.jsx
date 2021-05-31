//eslint-disable-next-line
import React, { useState } from "react";
import Logo from "./Photos/modi.jpg";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const ColoredLine = ({ color }) => (
    <hr
        style={{
            margin: 0,
            color: color,
            backgroundColor: color,
            height: 1
        }}
    />
);

function Navbar() {
    return (
    <div className="row row-cols-1 row-cols-md-2 g-4">
    <div className="col">
        <div className="card container">
        <img src="https://source.unsplash.com/collection/190727/1600x900" className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title title">Lorem Ipsum</h5>
            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
        </div>
    </div>
    <div className="col">
        <div className="card container">
        <img src="https://source.unsplash.com/weekly?mountain/1600x900" className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title title">Lorem Ipsum</h5>
            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
        </div>
    </div>
    <div className="col">
        <div className="card container">
        <img src="https://source.unsplash.com/weekly?girl/1600x900" className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title title">Lorem Ipsum</h5>
            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
        </div>
        </div>
    </div>
    <div className="col">
        <div className="card container">
        <img src="https://source.unsplash.com/weekly?boy/1600x900" className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title title">Lorem Ipsum</h5>
            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
        </div>
    </div>
    <div className="col">
        <div className="card container">
        <img src="https://source.unsplash.com/weekly?male/1600x900" className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title title">Lorem Ipsum</h5>
            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
        </div>
        </div>
    </div>
    <div className="col">
        <div className="card container">
        <img src="https://source.unsplash.com/collection/190737/1600x900" className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title title">Lorem Ipsum</h5>
            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
        </div>
        </div>
    </div>
    </div>
    );
}
export default Navbar;
