import React, { Component } from 'react';
import Car from './Cars'
import Myheader from './Myheader';
import Wrapper from './Wrapper';

class Mycars extends Component {
    state= {
      cars : ["Ford", "Mercedes", "Peugeot"] 
    }
    render() {
        const {title,color} = this.props;
     
        return (
            <div>
                <Wrapper>
                    <Myheader
                        myStyle={color}
                    >
                    {title}
                    </Myheader>
                </Wrapper>
                <Car color="red">{this.state.cars[0]}</Car>
                <Car>{this.state.cars[1]}</Car>
                <Car color="green">{this.state.cars[2]}</Car>
            </div>
        )
    }
}

export default Mycars;