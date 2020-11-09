import React, { Component } from 'react';


class Color extends React.Component {

    constructor(props) {
    super(props);
    this.state = {
        color : "white",
        whiteIsNext: true
    };
  }


    handleColor(i)
    {

        this.state.color = this.state.whiteIsNext ? "green" : "white";

        this.setState({
          whiteIsNext: !this.state.whiteIsNext
        });

          console.log(this.state.color);
      }

    
    render() {

        

    return(
        <div>
            <button onClick={i => this.handleColor(i)}>
                Change style
            </button>
        </div>
        )
    }
   
}

export default Color;