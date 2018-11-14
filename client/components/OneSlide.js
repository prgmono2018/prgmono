import React, { Component } from "react";

import '../styles/App.css';


class OneSlide extends React.Component {
    
    render() {

        return (
         
            <img className="mySlides" src={this.props.picPath} style={this.props.style}/>

        );
    }
}

export default OneSlide;