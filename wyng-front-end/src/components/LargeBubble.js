import React from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types';
import LittleBubble from './LittleBubble'
React.createClass = require('create-react-class');

const Picture = styled.img`
color: white;
border-radius: 50%;
height: 74px;
width: 74px;
object-fit: cover;

`;

const wrapper = { display: "inline-block", position: "relative" };

const Tag = styled(LittleBubble)`&&&{
    position: absolute;
    bottom: 0px;
    right:0px;
}
 `;

const LargeBubble = React.createClass({

    propTypes: {
        pictureUrl: PropTypes.string.isRequired,
        colorIndex: PropTypes.number,
        hasTag: PropTypes.bool,
        onClickFunction: PropTypes.func,
    },

    getDefaultProps() {
        return {
            colorIndex: 0,
            hasTag: false,
            onClickFunction: () => {},

        };
    },

    renderTag({ colorIndex, hasTag, className }) {
        if (!hasTag) {
            return null
        }
        return (
            <Tag className={className} colorIndex={colorIndex}> </Tag>
        )
    },

    render() {
        const { pictureUrl, colorIndex, className, onClickFunction, hasTag } = this.props;

        return (
            <div style={wrapper} onClick={onClickFunction}>
                {this.renderTag({ colorIndex, hasTag, className })}                
                <Picture src={pictureUrl}></Picture>
            </div >

        );
    }
})

export default LargeBubble;