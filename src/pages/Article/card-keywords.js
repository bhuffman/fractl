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
import Chip from "@material-ui/core/Chip"
import Badge from "@material-ui/core/Badge"
import blue from "@material-ui/core/colors/blue"
import Keyword from "./keyword"

const color = blue[300]

const useStyles = makeStyles(theme => ({
  root: {
    height: "100%",
    overflowY: "scroll"
  },
  keyword: {
    margin: "3px"
  },
  title: {
    marginBottom: "20px"
  }
}))

const CardKeyword = props => {
  const classes = useStyles()
  const keywords = values(
    map(keyword => {
      return (
        <Keyword
          key={keyword.Keyword}
          keyword={keyword.Keyword}
          mentions={keyword.Mentions}
          value={keyword.Keyword}
          path={["keywords"]}
        />
      )
    }, defaultTo([], props.data.Keywords))
  )

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent style={{ height: "100%" }}>
        <Typography color="textSecondary" gutterBottom>
          Keywords
        </Typography>
        <Divider className={classes.divider} className={classes.title} />
        {props.data && keywords}
      </CardContent>
    </Card>
  )
}

export default NotebookKea(CardKeyword)
