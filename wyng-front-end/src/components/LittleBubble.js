import React from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types';


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
        colorIndex: PropTypes.number,
        isTag: PropTypes.bool,
        className: PropTypes.string,
    },

    getDefaultProps() {
        return {
            colorIndex: 0,
            className: ""
        };
    },

    render() {
        const colors = ["#ff4848", "#ffdc4a", "#4a8bff", "#4dff51", "#9c50ff"]
        const { colorIndex, className } = this.props;

        return (
            <Bubble className={className} style={{ backgroundColor: colors[colorIndex] }}>EL</Bubble>
        );
    }
})

export default LittleBubble;