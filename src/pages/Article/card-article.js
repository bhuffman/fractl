import React from "react"
import { NotebookKea } from "../../keas/notebook-kea"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"
import Divider from "@material-ui/core/Divider"
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
    paddingTop: "7px",
    whiteSpace: "pre-wrap"
  },
  titleSection: {
    display: "flex",
    justifyContent: "space-between"
  }
}))

const CardArticle = props => {
  const classes = useStyles()
  return (
    <Card className={classes.root} variant="outlined">
      {props.data && (
        <CardContent style={{ height: "100%" }}>
          <div className={classes.titleSection}>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              {props.data.Title}
            </Typography>
            <Star
              value={props.data.DocumentIdentifier}
              path={["articles"]}
              size={25}
              shift="-5px"
            />
          </div>
          <Divider className={classes.divider} />
          <div className={classes.body}>
            <Typography variant="body2" component="p" className={classes.text}>
              {props.data.Text}
            </Typography>
          </div>
        </CardContent>
      )}
    </Card>
  )
}

export default NotebookKea(CardArticle)
