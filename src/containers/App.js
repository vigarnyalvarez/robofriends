import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll'
import ErrorBoundary from "../components/ErrorBoundary";
import './App.css'



class App extends Component { 
    //We just create a constructor instead of the object and call it as super 
    constructor(){
        //Calls the constructor of object 'Component'
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(users => this.setState({robots: users}));
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }

    render(){
        const {robots, searchfield} = this.state;
        const filteredRobots = robots.filter(
            robot => {
                return robot.name.toLowerCase().includes(searchfield.toLowerCase())
            })

        if(robots.length === 0){
            return <h1 id="title" className="tc">Loading</h1>
        }
        return(
            <div className="tc">
                <h1 id="title" className="f1">Robofriends</h1>
                <SearchBox searchChange = {this.onSearchChange}/>
                <Scroll>
                    <ErrorBoundary>
                        <CardList Robots = { filteredRobots }/>
                    </ErrorBoundary>
                </Scroll>
            </div>
        );
    }
}

export default App; 