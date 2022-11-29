import React  from "react";
import classes from "./Funspace.module.css"
import {checkBracketActionCreator} from "../../Redux/funReducer";
const Funspace = (props) => {

    let ref = React.createRef();

    let onChangeTextArea =(event) => {
        props.dispatch(checkBracketActionCreator(event.target.value));
    };
    return(
        <div>
            <div className={classes.descriptionWrapper}>
                Enter text. Example: "((())))"
            </div>
            <div  className={classes.bracketTextArea}>
                <textarea onChange={(event) => onChangeTextArea(event)} ref={ref} on rows='1'></textarea>
            </div>
            <div>Result: {props.funspacePage.result}</div>
        </div>
    )
}

export default Funspace;