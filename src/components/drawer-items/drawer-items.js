import React from "react"
import { compose, mergeRight, defaultTo, path, length } from "ramda"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import DashboardIcon from "@material-ui/icons/Dashboard"
import ListAltIcon from "@material-ui/icons/ListAlt"
import DescriptionIcon from "@material-ui/icons/Description"
import { Link as RouterLink } from "react-router-dom"
import HomeWorkIcon from "@material-ui/icons/HomeWork"
import PersonIcon from "@material-ui/icons/Person"
import BusinessIcon from "@material-ui/icons/Business"
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted"
import VpnKeyIcon from "@material-ui/icons/VpnKey"
import MenuBookIcon from "@material-ui/icons/MenuBook"
import { NotebookKea } from "../../keas/notebook-kea"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  count: {
    border: "1px solid gray",
    borderRadius: "10px",
    position: "absolute",
    background: "white",
    height: "18px",
    width: "18px",
    top: "30px",
    left: "47px",
    fontSize: "10px",
    fontWeight: "600",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "steelblue"
  }
}))

const DrawerItems = props => {
  const classes = useStyles()
  return (
    <div>
      <ListItem button style={{ marginLeft: "-8px" }}>
        <RouterLink
          className="nav-link"
          to="/dashboard"
          style={{
            textDecoration: "inherit",
            color: "inherit",
            display: "flex"
          }}
        >
          <ListItemIcon>
            <>
              <PersonIcon />
              <div className={classes.count}>{length(props.authors)}</div>
            </>
          </ListItemIcon>
          <ListItemText primary="Authors" />
        </RouterLink>
      </ListItem>
      <ListItem button style={{ marginLeft: "-8px" }}>
        <RouterLink
          className="nav-link"
          to="/dashboard/contracts"
          style={{
            textDecoration: "inherit",
            color: "inherit",
            display: "flex"
          }}
        >
          <ListItemIcon>
            <>
              <BusinessIcon />
              <div className={classes.count}>{length(props.entities)}</div>
            </>
          </ListItemIcon>
          <ListItemText primary="Entities" />
        </RouterLink>
      </ListItem>
      <ListItem button style={{ marginLeft: "-8px" }}>
        <RouterLink
          className="nav-link"
          to="/dashboard/closings"
          style={{
            textDecoration: "inherit",
            color: "inherit",
            display: "flex"
          }}
        >
          <ListItemIcon>
            <>
              <FormatListBulletedIcon />
              <div className={classes.count}>{length(props.topics)}</div>
            </>
          </ListItemIcon>
          <ListItemText primary="Topics" />
        </RouterLink>
      </ListItem>
      <ListItem button style={{ marginLeft: "-8px" }}>
        <RouterLink
          className="nav-link"
          to="/dashboard/costPredictor/1"
          style={{
            textDecoration: "inherit",
            color: "inherit",
            display: "flex"
          }}
        >
          <ListItemIcon>
            <>
              <VpnKeyIcon />
              <div className={classes.count}>{length(props.keywords)}</div>
            </>
          </ListItemIcon>
          <ListItemText primary="Keywords" />
        </RouterLink>
      </ListItem>
      <ListItem button style={{ marginLeft: "-8px" }}>
        <RouterLink
          className="nav-link"
          to="/dashboard/contractBuilder/1"
          style={{
            textDecoration: "inherit",
            color: "inherit",
            display: "flex"
          }}
        >
          <ListItemIcon>
            <>
              <MenuBookIcon />
              <div className={classes.count}>{length(props.articles)}</div>
            </>
          </ListItemIcon>
          <ListItemText primary="Articles" />
        </RouterLink>
      </ListItem>
    </div>
  )
}

export default compose(NotebookKea)(DrawerItems)
