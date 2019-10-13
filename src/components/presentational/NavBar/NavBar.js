import React from "react";
import { Link } from "react-router-dom";

import { Grid } from "semantic-ui-react";

import styles from "./NavBar.module.css";

function NavBar() {
    return (
        <nav className={styles.container}>
                <Grid columns={3}>
                    <Grid.Row>
                        <Grid.Column>
                            <Link to={`/`}>Home</Link>
                        </Grid.Column>
                        <Grid.Column>
                            <Link to={`/create`}>Create</Link>
                        </Grid.Column>
                        <Grid.Column>
                            <Link to={`/delete`}>Delete</Link>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
        </nav>
    );
}

export default NavBar;