// import React from "react";
import Wrapper from "./Wrapper";

const Car = ({children, color}) => {

        return children &&(
        <Wrapper>
                <p>Marque: {children}</p>
                <p>Couleur: {color ? color : "Néant"}</p>
        </Wrapper>
        )    
}  
export default Car;

