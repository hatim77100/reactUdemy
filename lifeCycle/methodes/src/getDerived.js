 import React, { Component } from "react";
 
class GetDerived extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
        }
    }

    static GetDerivedStatteFromProps(props, state) {
        console.log('GetDerivedStatteFromProps');
        return null;
    }

   render() {
     return <div>hello</div>;
   }
 }
 
 export default GetDerived;
 