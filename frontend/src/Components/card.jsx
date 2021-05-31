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

function Card() {
    return (
        <>
            <div>
                <Router>
                     <Link to="/blog1">
                        <div className="card col-sm-3 car" >
                            <img src={Logo} className="card-img-top carpic" />
                            <div className="card-body cartext" >
                                <h1 className="cartexthead">Lorem Ipsum</h1>
                                <p className="card-text cartext">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pretium mi magna, eu tristique magna sollicitudin sit amet. Pellentesque massa purus, ornare at nisi non, condimentum facilisis felis. In faucibus magna nunc, eget tempor libero finibus eget. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur vel est porttitor felis tincidunt euismod. Nulla et tempor elit. Vestibulum ultricies nulla imperdiet lectus pharetra pellentesque. Aliquam blandit et leo at semper. Aliquam vel justo et orci faucibus imperdiet vitae vel quam. Ut et risus dictum, interdum nisi a, placerat arcu. Nam semper tortor laoreet tellus scelerisque, id tincidunt odio molestie. Maecenas viverra lorem eget nisl pellentesque, a aliquam orci pharetra. Curabitur accumsan pulvinar tincidunt. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce sagittis lectus ac vestibulum molestie......</p>
                            </div>
                        </div>
                     </Link>
                </Router>
            </div>
            <hr className="carhr"></hr>
            <div>
                <Router>
                    <Link to="/blog1">
                        <div className="card col-sm-3 car" >
                            <img src={Logo} className="card-img-top carpic" />
                            <div className="card-body cartext" >
                                <h1 className="cartexthead">Lorem Ipsum</h1>
                                <p className="card-text cartext">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pretium mi magna, eu tristique magna sollicitudin sit amet. Pellentesque massa purus, ornare at nisi non, condimentum facilisis felis. In faucibus magna nunc, eget tempor libero finibus eget. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur vel est porttitor felis tincidunt euismod. Nulla et tempor elit. Vestibulum ultricies nulla imperdiet lectus pharetra pellentesque. Aliquam blandit et leo at semper. Aliquam vel justo et orci faucibus imperdiet vitae vel quam. Ut et risus dictum, interdum nisi a, placerat arcu. Nam semper tortor laoreet tellus scelerisque, id tincidunt odio molestie. Maecenas viverra lorem eget nisl pellentesque, a aliquam orci pharetra. Curabitur accumsan pulvinar tincidunt. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce sagittis lectus ac vestibulum molestie......</p>
                            </div>
                        </div>
                    </Link>
                </Router>
            </div>
            <hr className="carhr"></hr>
            <div>
                <Router>
                    <Link to="/blog1">
                        <div className="card col-sm-3 car" >
                            <img src={Logo} className="card-img-top carpic" />
                            <div className="card-body cartext" >
                                <h1 className="cartexthead">Lorem Ipsum</h1>
                                <p className="card-text cartext">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pretium mi magna, eu tristique magna sollicitudin sit amet. Pellentesque massa purus, ornare at nisi non, condimentum facilisis felis. In faucibus magna nunc, eget tempor libero finibus eget. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur vel est porttitor felis tincidunt euismod. Nulla et tempor elit. Vestibulum ultricies nulla imperdiet lectus pharetra pellentesque. Aliquam blandit et leo at semper. Aliquam vel justo et orci faucibus imperdiet vitae vel quam. Ut et risus dictum, interdum nisi a, placerat arcu. Nam semper tortor laoreet tellus scelerisque, id tincidunt odio molestie. Maecenas viverra lorem eget nisl pellentesque, a aliquam orci pharetra. Curabitur accumsan pulvinar tincidunt. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce sagittis lectus ac vestibulum molestie......</p>
                            </div>
                        </div>
                    </Link>
                </Router>
            </div>
            <hr className="carhr"></hr>
            <div>
                <Router>
                    <Link to="/blog1">
                        <div className="card col-sm-3 car" >
                            <img src={Logo} className="card-img-top carpic" />
                            <div className="card-body cartext" >
                                <h1 className="cartexthead">Lorem Ipsum</h1>
                                <p className="card-text cartext">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pretium mi magna, eu tristique magna sollicitudin sit amet. Pellentesque massa purus, ornare at nisi non, condimentum facilisis felis. In faucibus magna nunc, eget tempor libero finibus eget. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur vel est porttitor felis tincidunt euismod. Nulla et tempor elit. Vestibulum ultricies nulla imperdiet lectus pharetra pellentesque. Aliquam blandit et leo at semper. Aliquam vel justo et orci faucibus imperdiet vitae vel quam. Ut et risus dictum, interdum nisi a, placerat arcu. Nam semper tortor laoreet tellus scelerisque, id tincidunt odio molestie. Maecenas viverra lorem eget nisl pellentesque, a aliquam orci pharetra. Curabitur accumsan pulvinar tincidunt. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce sagittis lectus ac vestibulum molestie......</p>
                            </div>
                        </div>
                    </Link>
                </Router>
            </div>
        </>
    );
}
export default Card;
