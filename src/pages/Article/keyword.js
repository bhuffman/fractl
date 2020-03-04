import React from "react"
import { NotebookKea } from "../../keas/notebook-kea"
import { makeStyles } from "@material-ui/core/styles"
import { contains } from "ramda"
import Chip from "@material-ui/core/Chip"
import Badge from "@material-ui/core/Badge"

const useStyles = makeStyles(theme => ({
  root: {
    cursor: "pointer"
  },
  badges: {
    margin: "3px"
  },
  chip: {
    cursor: "pointer"
  }
}))

const Keyword = props => {
  const classes = useStyles(props)
  const active = contains(props.value, props.starred[props.path])
  const onStarClick = () => {
    if (active) {
      props.actions.removeStarred(props.value, props.path)
    } else {
      props.actions.addStarred(props.value, props.path)
    }
  }
  return (
    <>
      {active && (
        <Badge
          badgeContent={props.mentions}
          className={classes.badges}
          onClick={onStarClick}
        >
          <Chip
            label={props.keyword}
            color={"primary"}
            className={classes.chip}
            size={props.mentions <= 5 ? "small" : "medium"}
          />
        </Badge>
      )}
      {!active && (
        <Badge
          badgeContent={props.mentions}
          className={classes.badges}
          onClick={onStarClick}
        >
          <Chip
            label={props.keyword}
            className={classes.chip}
            size={props.mentions <= 5 ? "small" : "medium"}
          />
        </Badge>
      )}
    </>
  )
}

export default NotebookKea(Keyword)
