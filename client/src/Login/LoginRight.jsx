import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import "./LoginRight.css"

class LoginRight extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirectCountDown: 3,
            login: false,
            username: "",
            password: "",
            type:0
        };
        this.setUsername = props.props.setUsername
    }

    
    paperStyle = () => {
        return {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            margin: '20px',
            marginTop: '40px'    
        }
    }

    formStyle = () => {
        return {
            marginTop: '10px',
            flex: 1
        }
    }

    buttonStyle = () => {
        return {
            justifyContent: 'center',
            marginTop: '20px',
            marginBottom: '20px',
            textAlign: 'center',
        }
    }




    submitLogin = event => {
        event.preventDefault();
        const data = {username: this.state.username, password: this.state.password, type: this.state.type}
        const url = "login";
        const request = new Request(url, {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json"
            }
        })
        fetch(request)
    	.then((res) => { 
            if (res.status === 200){
                console.log('Success')
            }
            else{
                console.log("fail")
            }
            return res.json()
	    })
	    .then((jsonResult) => {
            console.log('Result:', jsonResult)
            if (jsonResult.result == 0){
                alert("fail because of no such username")}
            else if(jsonResult.result == 1){
                alert("fail because of wrong password")
            }else if(jsonResult.result == 2){
                alert("admin does not approve you")
            }else{
                console.log(this.setUsername)
                this.setUsername({"username": this.state.username})
                window.location.replace("./../homepage")
            }
	    }).catch((error) => {
	    	// if an error occured it will be logged to the JavaScript console here.
	        console.log("An error occured with fetch:", error)
	    })
    }
    render() {


        return (
            <div style={this.paperStyle()} id="loginRight">
                <Typography component="h1" variant="h5">
                    Welcome Back!
                </Typography>
                <form noValidate style={this.formStyle()}>
                    <TextField value={this.state.username} onChange = {(e) => this.setState({username: e.target.value})} id="username" variant="outlined" margin="normal" label="Username" required fullWidth />
                    <TextField value={this.state.password} onChange = {(e) => this.setState({password: e.target.value})}  id="password" variant="outlined" margin="normal" label="Password" type="password" required fullWidth />
                    <Grid>
                        <FormControl >
                            <InputLabel> Type</InputLabel>
                            <Select
                                value={this.state.type}
                               onChange = {(e) => this.setState({type: e.target.value})}
                            >
                            <MenuItem value={0}>Client</MenuItem>
                            <MenuItem value={1}>Writer</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    
                    <span id='button-container'>
                        <Button id='login-button' type="submit" variant="contained" color="primary" 
                            style={this.buttonStyle()} onClick={this.submitLogin}>
                            Login
                        </Button>
                    </span>
                    
                    <Grid container>
                        <Grid item>
                            <Link href="./../register" variant="body2">
                                {"Register"}
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
        )
    }
}

export default LoginRight;