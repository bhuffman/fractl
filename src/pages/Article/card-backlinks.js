import React from "react"
import { values, map, defaultTo, length } from "ramda"
import { NotebookKea } from "../../keas/notebook-kea"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"
import Divider from "@material-ui/core/Divider"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import Link from "@material-ui/core/Link"
import Star from "./star"

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
  },
  starLink: {
    marginLeft: "5px"
  },
  listItem: {
    marginLeft: "-10px"
  }
}))

const CardBacklinks = props => {
  const classes = useStyles()
  const backlinks = values(
    map(link => {
      const date = link.Date.day
        ? link.Date.day + "/" + link.Date.month + "/" + link.Date.year
        : ""
      return (
        <ListItem key={Math.random()} className={classes.listItem}>
          <Star
            value={link.URL}
            path={["articles"]}
            size={25}
            className={classes.star}
          />
          <Link
            href="#"
            onClick={() => {
              props.actions.setActive({ articleUrl: link.URL })
            }}
            className={classes.starLink}
          >
            <ListItemText primary={link.Title} secondary={date} />
          </Link>
        </ListItem>
      )
    }, defaultTo([], props.links))
  )

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent style={{ height: "100%" }}>
        <Typography color="textSecondary" gutterBottom>
          {props.title} ({length(defaultTo([], props.links))})
        </Typography>
        <Divider className={classes.divider} className={classes.title} />
        <List dense={true}>{props.data && backlinks}</List>
      </CardContent>
    </Card>
  )
}

export default NotebookKea(CardBacklinks)
