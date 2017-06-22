import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class Button extends Component {
    render() {
        const {
            label,
            disabled,
            tabIndex,
            onFocus,
            onBlur,
            onClick,
            style,
            children,
            title,
            ariaHaspopup
        } = this.props;

        return (
            <button className={ this.getBtnClass() } 
                    disabled={ disabled }
                    tabIndex={ tabIndex }
                    onFocus={ onFocus }
                    onBlur={ onBlur }
                    onClick={ onClick }
                    title={ title }
                    style={ style }
                    //It is a attribute used in ButtonIcon component
                    aria-haspopup={ ariaHaspopup } >
                { children ? children : label }
            </button>
        )
    }

    getBtnClass() {
        const { variant, className }  = this.props;

        return classnames('slds-button', {
            'slds-button--neutral': variant === 'neutral',
            'slds-button--brand': variant === 'brand',
            'slds-button--inverse': variant === 'inverse',
            'slds-button--destructive': variant === 'destructive',
            'slds-button--success': variant === 'success'
        }, className);
    }
}

Button.propTypes = {
    /** Label for the button */
    label: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node
    ]),
    /** A button predefined style. It must be a string */
    variant: PropTypes.oneOf(['neutral', 'brand', 'inverse', 'destructive', 'success', 'bare']),
    /** Class for custom styles */
    className: PropTypes.string,
    /** Disables the button if set to true */
    disabled: PropTypes.bool,
    /** Tab index */
    tabIndex: PropTypes.number,
    /** Callback function fired when the button is clicked */
    onClick: PropTypes.func,
    /** Callback function fired when the button is focused */
    onFocus: PropTypes.func,
    /** Callback function fired when the button is blurred */
    onBlur: PropTypes.func,
    /** Object with the custom styles. The properties must be 
    in camelCase naming convention (e.g. { fontFamily: ‘helvetica’ }) */
    style: PropTypes.object
};

Button.defaultProps = {
    variant: 'neutral',
    disabled: false,
    onClick: () => {},
    onFocus: () => {},
    onBlur: () => {}
};