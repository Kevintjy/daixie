import React from 'react';
import Grid from '@material-ui/core/Grid';
import LoginRight from "./RegisterRight";
import "./Login.css"

class Register extends React.Component {
    componentDidMount(){ 
        document.title = "Login | Today" 
        } 
    rootStyle = () => {
        return {
            height: '100vh',
        }
    }

    render() {
        return (
            <Grid container component="main" style={this.rootStyle()}>
                    <LoginRight />
                </Grid>
        )
    }
}

export {Register};