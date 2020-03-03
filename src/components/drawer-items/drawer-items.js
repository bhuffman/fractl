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
import Badge from "@material-ui/core/Badge"

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
            <Badge badgeContent={length(props.authors)} color="primary">
              <PersonIcon />
            </Badge>
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
            <Badge badgeContent={length(props.entities)} color="primary">
              <BusinessIcon />
            </Badge>
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
            <Badge badgeContent={length(props.topics)} color="primary">
              <FormatListBulletedIcon />
            </Badge>
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
            <Badge badgeContent={length(props.keywords)} color="primary">
              <VpnKeyIcon />
            </Badge>
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
            <Badge badgeContent={length(props.articles)} color="primary">
              <MenuBookIcon />
            </Badge>
          </ListItemIcon>
          <ListItemText primary="Articles" />
        </RouterLink>
      </ListItem>
    </div>
  )
}

export default compose(NotebookKea)(DrawerItems)
