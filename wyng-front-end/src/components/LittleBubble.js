import React from 'react';
import styled from 'styled-components'
React.createClass = require('create-react-class');

const Bubble = styled.div`
color: white;
font-size: 12px;
border-radius: 50%;
height: 25px;
width: 25px;
text-align: center;
line-height: 25px;
font-weight: bold;
font-family: optima, sans-serif;
`


const LittleBubble = React.createClass({

    propTypes: {

    },

    getDefaultProps() {
        return {

        };
    },

    render() {
        const colors = ["#ff4848", "#ffdc4a", "#4a8bff", "#4dff51", "#9c50ff" ]
        const {colorIndex} = this.props;

        return (
            <div> <Bubble style = {{backgroundColor: colors[colorIndex]}}>EL</Bubble> </div>
        );
    }
})

export default LittleBubble;