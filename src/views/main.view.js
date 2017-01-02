import React, { Component } from "react";
import update from "immutability-helper";
import Header from "../components/header.component";
import Generator from "../components/generator.component";
import Settings from "../components/settings.component";

let styles = {
    container: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%"
    }
};

let lowerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i",
    "j", "k", "l", "m", "n", "o", "p", "q", "r",
    "s", "t", "u", "v", "w", "x", "y", "z"];

let upperLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I",
    "J", "K", "L", "M", "N", "O", "P", "Q", "R",
    "S", "T", "U", "V", "W", "X", "Y", "Z"];

let digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

let specialChars = ["!", "$", "%", "@", "#"];

let generatePassword = (length, characterTypes) => {
    let password = "";
    characterTypes = characterTypes || [lowerLetters, upperLetters, digits, specialChars];

    let getCharacterType = function () {
        let randNum = Math.round(Math.random() * (characterTypes.length - 1));
        return characterTypes[randNum];
    };

    let getCharacter = function (type) {
        let randNum = Math.round(Math.random() * (type.length - 1));
        return type[randNum];
    };

    for (let i = 0; i < length; i++) {
        let type = getCharacterType();
        let character = getCharacter(type);
        password += character;
    }

    return password;
};

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            characterTypes: [
                { type: lowerLetters, checked: false, label: "a-z" },
                { type: upperLetters, checked: true, label: "A-Z" },
                { type: digits, checked: true, label: "0-9" },
                { type: specialChars, checked: true, label: "!$%@#" }
            ],
            length: 12,
            result: ""
        };
        this.generateBtnClick = this.generateBtnClick.bind(this);
        this.handleCheckboxClick = this.handleCheckboxClick.bind(this);
        this.handleLengthChange = this.handleLengthChange.bind(this);
    }

    handleLengthChange(evt) {
        this.setState({
            length: evt.target.value
        });
    }

    handleCheckboxClick(index) {
        this.setState({
            characterTypes: update(this.state.characterTypes, { [index]: { checked: { $set: !this.state.characterTypes[index].checked } } })
        });
    }

    generateBtnClick() {
        let characterTypes = this.state.characterTypes.reduce((checkedTypes, characterType) => {
            if (characterType.checked) {
                checkedTypes.push(characterType.type);
            }

            return checkedTypes;
        }, []);

        this.setState({
            result: generatePassword(this.state.length, characterTypes)
        });
    }

    componentDidMount() {
        this.setState({
            result: generatePassword(this.state.length)
        });
    }

    render() {
        return (
            <div style={styles.container}>
                <Header />
                <Generator result={this.state.result} handleClick={this.generateBtnClick} />
                <Settings characterTypes={this.state.characterTypes}
                    handleCheckboxClick={this.handleCheckboxClick}
                    handleLengthChange={this.handleLengthChange}
                    length={this.state.length} />
            </div>
        );
    }
};

export default Main;