import React, { useState } from "react";
import { Redirect } from "react-router-dom";

function HabitForm(props) {
    let [name, setName] = useState("");
    let [description, setDescription] = useState("");

    let [disableSubmit, setDisableSubmit] = useState(false);
    let [redirect, setRedirect] = useState(false);

    let onSubmit = (e) => {
        e.preventDefault();
        setDisableSubmit(true);
        props.onSubmit(name, description);
        setRedirect(true);
    }
    if (redirect) {
        return (
            <Redirect to="/" />
        );
    } else {
        return (
            <form onSubmit={onSubmit}>
                <label>
                    Name
                    <input name="name" type="text" value={name} onChange={(e) => { setName(e.target.value) }}></input>
                </label>
                <label>
                    Description
                    <input name="description" type="text" value={description} onChange={(e) => { setDescription(e.target.value) }}></input>
                </label>
                <button type="submit" disabled={disableSubmit} >Submit</button>
            </form>
        );
    }
}

export default HabitForm;
