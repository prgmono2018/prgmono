import React, { Component } from "react";

import '../styles/App.css';
import Slider from "./Slider.js";
import axios from 'axios';

class Wrapper extends React.Component {

    constructor(props) {
        super(props);
           this.state = {
           server:"http://localhost:8000/",
           //pics: ['img/photos/1.jpg','img/photos/2.jpg','img/photos/3.jpg','img/photos/4.jpg' ]
           sliderData:[]
         };
        this._ismounted=false;
        this.sliderDataUrl = '/sliderData';
     
       }

       componentDidMount() {
        console.log("did mount");
        this.mounted = true;
        this.updateSliderData();
       
       
      }

      componentWillUnmount(){
        this.mounted = false;
      }
updateSliderData(){

    console.log("updated items")
    axios.get("http://localhost:8000/sliderData")
    .then(
      
      json => {
      
        if (this.mounted){
            this.setState({ sliderData: json.data })
        }
      
      }
    )

}
    render() {
        console.log("ddddd="+this.state.sliderData)
        return (
            <div>
                <Slider sliderData={this.state.sliderData} server={this.state.server} />
           </div>
               
        );
    }
}

export default Wrapper;