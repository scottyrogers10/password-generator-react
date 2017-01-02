import React from "react";

let styles = {
    header: {
        position: "relative",
        zIndex: 1,
        top: 0,
        left: 0,
        width: "100%",
        height: "62px",
        boxShadow: "0 2px 3px 0 rgba(0,0,0,0.25)",
        boxSizing: "borderBox"
    }
};

let Header = (props) => {
    return (
        <div style={styles.header}></div>
    );
};

export default Header;