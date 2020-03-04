import React from "react"
import { values, map, defaultTo } from "ramda"
import { NotebookKea } from "../../keas/notebook-kea"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"
import CardMedia from "@material-ui/core/CardMedia"
import CardActionArea from "@material-ui/core/CardActionArea"
import Divider from "@material-ui/core/Divider"
import Grid from "@material-ui/core/Grid"
import { green, red, blue } from "@material-ui/core/colors"
import Avatar from "@material-ui/core/Avatar"
import SentimentSatisfiedAltIcon from "@material-ui/icons/SentimentSatisfiedAlt"
import SentimentSatisfiedIcon from "@material-ui/icons/SentimentSatisfied"
import SentimentVeryDissatisfiedIcon from "@material-ui/icons/SentimentVeryDissatisfied"
import Badge from "@material-ui/core/Badge"
import Star from "./star"

const useStyles = makeStyles(theme => ({
  root: {
    height: "100%"
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  body: {
    overflowY: "scroll",
    height: "calc(100% - 23px)",
    marginRight: "-17px"
  },
  divider: {
    marginRight: "-17px"
  },
  text: {
    paddingTop: "7px"
  },
  media: {
    height: "80px"
  },
  red: {
    color: theme.palette.getContrastText(red[500]),
    backgroundColor: red[500]
  },
  green: {
    color: "#fff",
    backgroundColor: green[500]
  },
  blue: {
    color: "#fff",
    backgroundColor: blue[500]
  },
  centered: {
    display: "flex",
    justifyContent: "center"
  },
  flexGrid: {
    display: "flex"
  }
}))

const CardMeta = props => {
  const classes = useStyles()
  const authors = map(author => {
    return (
      <Grid container key={Math.random()} item xs={12}>
        <Grid item xs={4} className={classes.flexGrid}>
          <Star
            value={author.Name}
            path={["authors"]}
            size={20}
            shift={"-2px"}
          />
          <Typography className={classes.title} color="textSecondary">
            {author.Name}
          </Typography>
        </Grid>
        <Grid item xs={8}>
          <Typography className={classes.title} color="textSecondary">
            {author.Emails}
          </Typography>
        </Grid>
      </Grid>
    )
  }, defaultTo([], props.data.Author_Information))

  const publishers = map(pub => {
    return (
      <Grid container key={Math.random()} item xs={12}>
        <Grid item xs={8} className={classes.flexGrid}>
          <Star
            value={pub.Domain_Name}
            path={["entities"]}
            size={20}
            shift={"-2px"}
          />
          <Typography className={classes.title} color="textSecondary">
            {pub.Domain_Name}
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography className={classes.title} color="textSecondary">
            {pub.Open_Page_Rank}
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography className={classes.title} color="textSecondary">
            {pub.Domain_Authority}
          </Typography>
        </Grid>
      </Grid>
    )
  }, defaultTo([], props.data.Publisher_Information))
  return (
    <Card className={classes.root} variant="outlined">
      {props.data && props.data.associated_image && (
        <>
          <CardMedia
            className={classes.media}
            image={props.data.associated_image}
            title={props.data.Title}
          />
        </>
      )}
      <CardContent style={{ height: "100%" }}>
        {props.data && (
          <Grid container spacing={1}>
            <Grid item xs={4}>
              <Typography className={classes.title} color="textSecondary">
                Date:
              </Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography className={classes.title} color="textSecondary">
                {props.data.date.day}/{props.data.date.month}/
                {props.data.date.year}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Divider />
            </Grid>
            {authors}
            <Grid item xs={12}>
              <Divider />
            </Grid>
            {publishers}
            <Grid item xs={12}>
              <Divider style={{ marginBottom: "10px" }} />
            </Grid>
            <Grid item xs={4} className={classes.centered}>
              <Badge badgeContent={props.data.tone_negative} color="primary">
                <Avatar className={classes.red}>
                  <SentimentVeryDissatisfiedIcon />
                </Avatar>
              </Badge>
            </Grid>
            <Grid item xs={4} className={classes.centered}>
              <Badge badgeContent={props.data.tone_overall} color="primary">
                <Avatar className={classes.blue}>
                  <SentimentSatisfiedIcon />
                </Avatar>
              </Badge>
            </Grid>
            <Grid item xs={4} className={classes.centered}>
              <Badge badgeContent={props.data.tone_positive} color="primary">
                <Avatar className={classes.green}>
                  <SentimentSatisfiedAltIcon />
                </Avatar>
              </Badge>
            </Grid>
          </Grid>
        )}
      </CardContent>
    </Card>
  )
}

export default NotebookKea(CardMeta)
