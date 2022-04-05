import React from "react";
import Card from './Card'

const CardList = ({ Robots }) => {
    // if(true){
    //     throw new Error('Dammit!');
    // }
    return (
        <div>
            { Robots.map((item, index) => {return (<Card key = {index} id = {item.id}  name = {item.name}  email = {item.email} />);})
        }
        </div>
    );
}

export default CardList;