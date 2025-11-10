import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import classNames from "classnames/bind";
import styles from "./Button.module.scss";

const cx = classNames.bind(styles);

function Button({ to, href, children, className, onClick, ...passProps }) {
    let Comp = "button";

    const props = {
        onClick,
        // ...passProps,
    };

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = "a";
    }

    const classes = cx("wrapper", {
        [className]: className,
    });

    return (
        <Comp className={classes} {...props}>
            {children}
        </Comp>
    );
}

Button.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    onClick: PropTypes.func,
};

export default Button;
