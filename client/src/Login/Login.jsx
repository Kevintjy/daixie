import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LoginRight from "./LoginRight";
import "./Login.css"

class Login extends React.Component {
    render() {
        return (
            <Grid container>
                    <LoginRight />
                </Grid>
        )
    }
}

export {Login};