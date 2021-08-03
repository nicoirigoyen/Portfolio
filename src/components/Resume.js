import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
  },
  timeLine: {
    position: "relative",
    padding: "1rem",
    margin: "o auto",
    "&:before": {
      content: "''",
      position: "absolute",
      height: "100%",
      border: "1px solid tan",
      right: "40px",
      top: 0,
    },
    "&:after": {
      content: "''",
      display: "table",
      clear: "both",
    },
    [theme.breakpoints.up("md")]: {
      padding: "2rem",
      "&:before": {
        left: "calc(50% - 1px)",
        right: "auto",
      },
    },
  },
  timeLineItem: {
    padding: "1rem",
    borderBottom: "2px solid tan",
    position: "relative",
    margin: "1rem 3rem 1rem 1rem",
    clear: "both",
    "&:after": {
      content: "''",
      position: "absolute",
    },
    "&:before": {
      content: "''",
      position: "absolute",
      right: "-0.625rem",
      top: "calc(50% - 5px)",
      borderStyle: "solid",
      borderColor: "tomato tomato transparent transparent",
      borderWidth: "0.625rem",
      transform: "rotate(45deg)",
    },
    [theme.breakpoints.up("md")]: {
      width: "44%",
      margin: "1rem",
      "&:nth-of-type(2n)": {
        float: "right",
        margin: "1rem",
        borderColor: "tan",
      },
      "&:nth-of-type(2n):before": {
        right: "auto",
        left: "-0.625rem",
        borderColor: "transparent transparent tomato tomato",
      },
    },
  },
  timeLineYear: {
    textAlign: "center",
    maxWidth: "9.375rem",
    margin: "0 3rem 0 auto",
    fontSize: "1.8rem",
    color: "#fff",
    background: "tomato",
    lineHeight: 1,
    padding: "0.5rem 1rem",
    "&:before": {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      margin: "0 auto",
      "&:nth-of-type(2n)": {
        float: "none",
        margin: "0 auto",
      },
      "&:nth-of-type(2n):before": {
        display: "none",
      },
    },
  },
  heading: {
    color: "tomato",
    padding: "3rem 0",
    textTransform: "uppercase",
  },
  subHeading: {
    color: "#fff",
    padding: 0,
    textTransform: "uppercase",
  },
  body1: {
    color: "tomato",
  },
  subtitle1: {
    color: "tan",
  },
}));

const Resume = () => {
  const classes = useStyles();
  return (
    <Box component="header" className={classes.mainContainer}>
      <Typography variant="h4" align="center" className={classes.heading}>
        Estudios & Experiencia 
      </Typography>
      <Box component="div" className={classes.timeLine}>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2015
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Drustore 
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            Drustore 
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            Encargado general del local, compras, ventas, objetivos y manejo del personal.
          </Typography>
        </Box>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Curso Intensivo de Ingles 
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            Universidad Nacional de Cordoba
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            Enfocado principalmente en la lectocomprension y traduccion de los temas planteados.
          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2018
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Analisis en Sistemas
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            Institucion Cervantes
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
               Realizar diagnósticos de necesidades de información, diseñar nuevos sistemas y modificar los existentes.
              Realizar el relevamiento, análisis, diseño, implementación y prueba de los sistemas de información.
          </Typography>
        </Box>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Bootcamp Full-Stack
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            HENRY
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
             Un programa intensivo en línea que simula un entorno 
            de trabajo real y te prepara para una carrera como Full Stack.
            Implementando tecnologias como JavaScript React&Redux, Node.js, Express.js, HTML
            Sass, Bootstrap, Material-UI, Formik, Algoritmos, Data Structures, Sequelize
            ,PostgreSQL, Git, GitHub
          </Typography>
        </Box>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Full-Stack  Countries App
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            HENRY
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
              Proyecto individual y de seleccion como finalizacion de los estudios en SoyHeny, aplicando todos los conocimientos dados. 
              <br></br>
              React - Redux - CSS - Express - Sequelize - Psql  
               </Typography>
        </Box>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Full-Stack Hiring TECHO
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            HENRY
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            Plataforma para gestion de empleos en latinoamerica desarrollada para la organizacion TECHO.
              <br></br>
              React - Redux - MaterialUi - Formik - TypeScript - Express - Sequelize - Psql - Firabase - Swagger
               </Typography>
        </Box>

        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2021
        </Typography>
  
      </Box>
    </Box>
  );
};

export default Resume;
