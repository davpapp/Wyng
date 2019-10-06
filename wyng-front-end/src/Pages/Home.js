import React from 'react';
import LittleBubble from '../components/LittleBubble'
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
            <div><LittleBubble colorIndex={0}></LittleBubble> </div>
        );
    }
})

export default Home;
