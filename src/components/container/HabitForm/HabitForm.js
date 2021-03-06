import React, { useState } from "react";
import { Redirect } from "react-router-dom";

import { Form, Button, TextArea, Label, Icon, Input } from "semantic-ui-react";

import styles from "./HabitForm.module.css";

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
            <Form onSubmit={onSubmit}>
              <Form.Field>
                <Input label={
                  <Label><Icon name="clipboard list" />I want to...</Label>
                } required name="name" type="text" value={name} onChange={(e) => { setName(e.target.value) }} placeholder="learn to play piano"/>
              </Form.Field>
              <Form.Field>
                <label>Description</label>
                <TextArea className={styles.description} required name="description" type="text" value={description} onChange={(e) => { setDescription(e.target.value) }} placeholder="I want to learn a new skill: playing the piano!" />
              </Form.Field>
              <Button color={!(name && description) ? "grey" : "green"} type='submit' disabled={!(name && description) || disableSubmit}>Submit</Button>
            </Form>
        );
    }
}

export default HabitForm;
