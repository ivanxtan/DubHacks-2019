import React, { useState } from "react";

function HabitForm(props) {
    let [name, setName] = useState("");
    let [description, setDescription] = useState("");

    let onSubmit = (e) => {
        e.preventDefault();
        props.onSubmit(name, description);
    }

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
            <button type="submit">Submit</button>
        </form>
    );
}

export default HabitForm;