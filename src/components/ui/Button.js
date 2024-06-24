import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children, variant = 'full', onClick }) => {
    const baseClasses =
        'h-[40px] px-3 w-full  rounded-md font-semibold focus:outline-none focus:white';
    const fullClasses = 'bg-black text-white hover:bg-black-600 ';
    const outlineClasses =
        'border border-black text-black text-sm text text-sm';

    const classes = `${baseClasses} ${
        variant === 'outline' ? outlineClasses : fullClasses
    }`;

    return (
        <button className={classes} onClick={onClick}>
            {children}
        </button>
    );
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    variant: PropTypes.oneOf(['full', 'outline']),
    onClick: PropTypes.func,
};

export default Button;
