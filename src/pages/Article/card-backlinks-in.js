import React from "react"
import { values, map, defaultTo, length } from "ramda"
import { NotebookKea } from "../../keas/notebook-kea"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"
import Divider from "@material-ui/core/Divider"
import blue from "@material-ui/core/colors/blue"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"

const color = blue[300]

const useStyles = makeStyles(theme => ({
  root: {
    height: "100%",
    overflowY: "scroll"
  },
  keyword: {
    margin: "3px"
  },
  badges: {
    border: "1px solid #5c5c90",
    backgroundColor: "white",
    opacity: ".5"
  }
}))

// "Links_To": [
//   {
//     "Title": "HPR Streaming Music Show Archive",
//     "URL": "https://www.hawaiipublicradio.org/post/hpr-streaming-music-show-archive",
//     "Date": {
//       "month": null,
//       "day": null,
//       "year": null
//     },
//     "Link_Type": "DoFollow"
//   },

const CardBacklinksIn = props => {
  const classes = useStyles()
  const backlinks = values(
    map(link => {
      const date = link.Date.day
        ? link.Date.day + "/" + link.Date.month + "/" + link.Date.year
        : ""
      return (
        <ListItem key={Math.random()}>
          <ListItemText primary={link.Title} secondary={date} />
        </ListItem>
      )
    }, defaultTo([], props.data.Links_To))
  )

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent style={{ height: "100%" }}>
        <Typography color="textSecondary" gutterBottom>
          Backlinks in ({length(defaultTo([], props.data.Links_To))})
        </Typography>
        <Divider className={classes.divider} className={classes.title} />
        <List dense={true}>{props.data && backlinks}</List>
      </CardContent>
    </Card>
  )
}

export default NotebookKea(CardBacklinksIn)
