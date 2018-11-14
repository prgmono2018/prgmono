import React, { Component } from "react";

import '../styles/App.css';
import OneSlide from "./OneSlide.js";

class Slider extends React.Component {
    
    
    constructor(props) {
     super(props);
          this.state = {
          showSlide:0,
        };

       this._ismounted=false;
       this.toDoes = 'http://localhost:8000/toDoes';
       this.plusDivs = this.plusDivs.bind(this);
      }

      plusDivs(e,l) {
        const action= e.target.dataset.action;
        console.log("action="+action)
        if (action=="leftButton"){
            console.log("1")
            if ( this.state.showSlide>0){
                this.setState({
                    showSlide:this.state.showSlide-1 ,
                  });
            }
        }else{
            console.log("2 "+l)
            if ( this.state.showSlide<l){
                this.setState({
                    showSlide:this.state.showSlide+1 ,
                  });
            }
        }
        console.log(this.state.showSlide);
      }
     
    render() {

         let showPic = {
           width: '100%',
           display:'block'
          };

          let hidePic = {
            width: '100%',
           display:'none'
          };

        return (
         
         <div className="w3-content w3-display-container">
          {
            this.props.sliderData.map((sd,count) => 
           count==this.state.showSlide?
           ( <OneSlide  key={count} picPath={"http://"+sd.server+sd.sliderPic} style={showPic}/>)
            :
          (  <OneSlide   key={count} picPath={"http://"+sd.server+sd.sliderPic}  style={hidePic}/>)
            )
          }
              <button data-action="leftButton" className="w3-button w3-black w3-display-left" onClick={(event) =>this.plusDivs(event,this.props.sliderData.length)} >&#10094;</button>
              <button data-action="rightButton" className="w3-button w3-black w3-display-right" onClick={(event)=>{this.plusDivs(event,this.props.sliderData.length)}} >&#10095;</button>
            </div>

        );
    }


    
}

export default Slider;