import React from "react";

let styles = {
    container: {
        position: "relative",
        padding: "0 15px",
        zIndex: 0,
        left: 0,
        right: 0,
        backgroundColor: "#f6f6f6"
    },
    header: {
        paddingTop: "25px",
        fontSize: "35px",
        textAlign: "center"
    },
    subHeader: {
        fontSize: "20px",
        textAlign: "center",
        paddingBottom: "5px"
    },
    resultBox: {
        margin: "15px auto",
        lineHeight: "51px",
        textAlign: "center",
        border: "1px solid #96a0ad",
        borderBottom: "5px solid #19ba20",
        height: "56px",
        maxWidth: "620px",
        fontSize: "23px",
        backgroundColor: "#fff",
        fontWeight: "bold",
        boxSizing: "border-box"
    },
    generateBtnContainer: {
        padding: "15px 0 30px 0"
    },
    generateBtn: {
        fontSize: "18px",
        fontWeight: "bold",
        lineHeight: "35px",
        textAlign: "center",
        width: "200px",
        height: "36px",
        backgroundColor: "#d32d27",
        borderRadius: "5px",
        color: "#fff",
        margin: "0 auto",
        cursor: "pointer",
        boxShadow: "0px 1px 2px rgba(0,0,0,0.2)",
        userSelect: "none"
    }
};

let Generator = (props) => {
    return (
        <div style={styles.container}>
            <div style={styles.header}>GENERATE A PASSWORD</div>
            <div style={styles.subHeader}>Use the online Password Generator to instantly create a secure, random password.</div>
            <div style={styles.resultBox}>
                <div>{props.result}</div>
            </div>
            <div style={styles.generateBtnContainer}>
                <div style={styles.generateBtn} onClick={props.handleClick}>Generate</div>
            </div>
        </div>
    )
};

export default Generator;