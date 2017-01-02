import React from "react";

let styles = {
    container: {
        position: "relative",
        padding: "0 15px",
        left: 0,
        right: 0
    }
};

let Settings = (props) => {
    return (
        <div style={styles.container}>
            <input type="text" onChange={props.handleLengthChange} value={props.length} />
            {props.characterTypes.map((characterType, index) => {
                return <div key={index} onClick={props.handleCheckboxClick.bind(this, index)}>
                    <input type="checkbox" checked={characterType.checked} onChange={props.handleCheckboxClick.bind(this, index)} />
                    {characterType.label}
                </div>
            })}
        </div>
    );
};

export default Settings;