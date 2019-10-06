import React from 'react';
import LittleBubble from '../components/LittleBubble'
import MediumBubble from '../components/MediumBubble'
import LargeBubble from '../components/LargeBubble'
React.createClass = require('create-react-class');


const Home = React.createClass({

    propTypes: {

    },

    getDefaultProps() {
        return {

        };
    },

    render() {
        return (
            <div>
                {/* <LittleBubble colorIndex={0}></LittleBubble>
                <MediumBubble colorIndex={0} pictureUrl ="https://oldstyledating.co.uk/wp-content/uploads/2019/08/Headshot-photographer-Lincoln-Nottingham-Leicester-Peterborough-Midlands-Andrej-V-captivating-headshots-1080x675.jpg"></MediumBubble> */}
           <LargeBubble hasTag={false} colorIndex={0} onClickFunction ={()=>{console.log("CLICK")}}
           pictureUrl ="https://oldstyledating.co.uk/wp-content/uploads/2019/08/Headshot-photographer-Lincoln-Nottingham-Leicester-Peterborough-Midlands-Andrej-V-captivating-headshots-1080x675.jpg"></LargeBubble> </div>
        );
    }
})

export default Home;
