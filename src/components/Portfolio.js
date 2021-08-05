import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";


import countriesapp from "../images/countriesapp.jpg";
import breackingbadapp from "../images/brackingbadapp.jpg";
import weatherapp from "../images/weatherapp.jpg";
import project5 from "../images/react-redux.jpg";
import project6 from "../images/react.png";
import techo from "../images/techo.jpg";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
    height: "100%"
  },
  cardContainer: {
    width: '80%',
    maxWidth: 345,
    margin: "3rem auto",
  },
}));

const projects = [
  {
    name: "Techo Hiring",
    description: `Como proyecto final de mi carrera en HENRY, junto a TECHO y compañeros desarrollamos una plataforma de empleos 
    que permite al usuario filtrar según sus intereses y aplicar a distintas postulaciones.`,
    image: techo,
    link: 'https://www.youtube.com/watch?v=bomZFa_DhUs'
  },
  {
    name: "Countries App",
    description: `Plataforma desarrollada en soyHeny como proyecto individual que permite al usuario filtrar paises segun su interes, consultar informacion detallada de un pais,
    como su actividad turistica y la posibilidad de crear una nueva actividad`,
    image: countriesapp,
    VIVO: 'https://countriesapp23.herokuapp.com/',
    Github: 'https://github.com/nicoirigoyen/Countries-App'
  },
  {
    name: "Breacking Bad App",
    description: `Es una pequeña plataforma de la popular serie Breacking Bad que permite al usuario filtrar y consultar informacion
    detallada de un personajes en particular, ademas de consultar capitulos y temporadas de la serie.`,
    image: breackingbadapp,
    VIVO: 'https://infobreakingbad.netlify.app/',
    Github:'https://github.com/nicoirigoyen/BreackingBad-App'
  },
  {
    name: "Weather App",
    description: `Clasica aplicacion de clima desarrolada con React que permite al usuario filtrar un pais en particular y consultar informacion detallada del Clima `,
    image: weatherapp,
    VIVO: 'https://infooweatherapp.netlify.app',
    Github:'https://github.com/nicoirigoyen/Weather-App'
  },
  // {
  //   name: "Movies App",
  //   description: `Plataforma que permite al usuario filtrar peliculas/sagas segun su interes`,
  //   image: project5,
  // },
  // {
  //   name: "Project 6",
  //   description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis\
  //   consequatur magni quod nesciunt necessitatibus molestiae non\
  //   eligendi, magnam est aliquam recusandae? Magnam soluta minus\
  //   iste alias sunt veritatis nisi dolores!`,
  //   image: project6,
  // },
];

const Portfolio = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer} >
      <Grid container justify="center" >

         {projects.map((project, i) => ( 
          <Grid item xs={12} sm={8} md={4} >
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Techo Hiring"
                  height="180"
                  image={project.image}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {project.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {project.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button target="_blank" size="small" color="primary" href={project.VIVO}>
                  VIVO
                </Button>
                <Button target="_blank" size="small" color="primary" href={project.Github}>
                  Code
                </Button>
              </CardActions>
            </Card>
        
          </Grid>
          ))}
      </Grid>
         
    </Box>
  );
};

export default Portfolio;
