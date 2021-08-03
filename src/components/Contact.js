import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { Avatar  } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  cointainer:{
    position: 'center'
  },
  contactContainer: {
    background: "#233",
    height: "100vh",
  },
  heading: {
    color: "tomato",
    textAlign: "center",
    textTransform: "uppercase",
    marginBottom: "1rem",
  },
  input: {
    color: "#fff",
  },
  button: {
    marginTop: "2rem",
    color: "tomato",
    height: '200px',
    
  },
  field: {
    margin: "1rem 0rem",
  },
}));


const Contact = () => {
  const classes = useStyles();
  return (

    <Box  component="div" className={classes.contactContainer}>
   
        <Box component="form"  className={classes.form}>
          <Button
            target='blank'
            href='mailto:nico.irigoyen.terre@hotmail.com'
            fullWidth={true}
            startIcon={<Avatar  src={'http://assets.stickpng.com/images/584856ade0bb315b0f7675ab.png'}  />}
            className={classes.button}
          >
            &nbsp; Email
          </Button>
        </Box>
      
      
    </Box>
  );
};

export default Contact;
