import React from "react"
import { NotebookKea } from "../../keas/notebook-kea"
import { makeStyles } from "@material-ui/core/styles"
import { contains } from "ramda"
import StarIcon from "@material-ui/icons/Star"
import StarBorderIcon from "@material-ui/icons/StarBorder"

const useStyles = makeStyles(theme => ({
  root: {
    cursor: "pointer",
    marginTop: props => (props.shift ? props.shift : "0px")
  }
}))

const Star = props => {
  const classes = useStyles(props)
  const active = contains(props.value, props.starred[props.path])
  const mySize = props.size ? props.size : 40
  const onStarClick = () => {
    if (active) {
      props.actions.removeStarred(props.value, props.path)
    } else {
      props.actions.addStarred(props.value, props.path)
    }
  }
  return (
    <div onClick={onStarClick} className={classes.root}>
      {active && <StarIcon style={{ fontSize: mySize }} color="primary" />}
      {!active && (
        <StarBorderIcon color="disabled" style={{ fontSize: mySize }} />
      )}
    </div>
  )
}

export default NotebookKea(Star)
