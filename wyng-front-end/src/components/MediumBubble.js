import React from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types';
React.createClass = require('create-react-class');

const Picture = styled.img`
color: white;
border-radius: 50%;
height: 34px;
width: 34px;
object-fit: cover;
`
const MediumBubble = React.createClass({

    propTypes: {
        pictureUrl: PropTypes.string.isRequired,
    },

    render() {
        const { pictureUrl } = this.props;

        return (
            <Picture src={pictureUrl}></Picture>
            
        );
    }
})

export default MediumBubble;