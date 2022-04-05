import { toHaveStyle } from "@testing-library/jest-dom/dist/matchers";
import React, { Component } from "react";

class ErrorBoundary extends Component {
    constructor(props){
        super(props)
        this.state = {
            hasError: false
        }
    }

    // componentDidCatch(error, info){
    //     this.setState({ hasError: true })
    // }

    render(){
       if(this.state.hasError){
           return <h1>Wohaa! This ain't good duuuude!</h1>
       }
       
       return this.props.children
    }

}

export default ErrorBoundary