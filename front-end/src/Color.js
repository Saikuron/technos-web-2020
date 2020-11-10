import React, { Component } from 'react';


class Color extends React.Component {

    constructor(props) {
    super(props);
    this.state = {
        color : "Dark Mode",
        whiteIsNext: true
    };
  }


    handleColor(i)
    {

        this.state.color = this.state.whiteIsNext ? "Light Mode" : "Dark Mode";

        this.setState({
          whiteIsNext: !this.state.whiteIsNext
        });
      }

    
    render() {

        

    return(
        <div>
            <button onClick={i => this.handleColor(i)}>
                {this.state.color}
            </button>
        </div>
        )
    }
   
}

export default Color;