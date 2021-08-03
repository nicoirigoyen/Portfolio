import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from '@material-ui/core/IconButton';
import BottomNavigation from "@material-ui/core/BottomNavigation";
import Instagram from "@material-ui/icons/Instagram";
import GitHub from '@material-ui/icons/GitHub';
import LinkedIn from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles({
  bottomNavContainer: {
    background: "#222",
  },
  root: {
    "& .MuiSvgIcon-root": {
      fill: "tan",
      margin:'0.5rem',
      "&:hover": {
        fill: "tomato",
        fontSize: "1.8rem",
      },
    },
  },
});

const Footer = () => {
  const classes = useStyles();

  return (
    <BottomNavigation className={classes.bottomNavContainer}>
      <IconButton className={classes.root} href='https://github.com/nicoirigoyen'><GitHub /></IconButton>
      <IconButton className={classes.root} href='https://linkedin.com/in/nicolas-irigoyen-terre'><LinkedIn /></IconButton>
      <IconButton className={classes.root} href='https://www.instagram.com/nicoirigoyen1'><Instagram /></IconButton>
    </BottomNavigation>
  );
};
export default Footer;
