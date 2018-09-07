import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

export default function Actions({ content }) {
    if (content) {
        return <div>{content}</div>;
    }
    return null;
}

Actions.propTypes = {
    content: PropTypes.node,
};
Actions.defaultProps = {
    content: null,
};