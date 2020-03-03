import React from "react"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import DashboardIcon from "@material-ui/icons/Dashboard"
import ListAltIcon from "@material-ui/icons/ListAlt"
import DescriptionIcon from "@material-ui/icons/Description"
import { Link as RouterLink } from "react-router-dom"
import HomeWorkIcon from "@material-ui/icons/HomeWork"

export const mainListItems = (
  <div>
    <ListItem button>
      <RouterLink
        className="nav-link"
        to="/dashboard"
        style={{ textDecoration: "inherit", color: "inherit", display: "flex" }}
      >
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </RouterLink>
    </ListItem>
    <ListItem button>
      <RouterLink
        className="nav-link"
        to="/dashboard/contracts"
        style={{ textDecoration: "inherit", color: "inherit", display: "flex" }}
      >
        <ListItemIcon>
          <DescriptionIcon />
        </ListItemIcon>
        <ListItemText primary="Contracts" />
      </RouterLink>
    </ListItem>
    <ListItem button>
      <RouterLink
        className="nav-link"
        to="/dashboard/closings"
        style={{ textDecoration: "inherit", color: "inherit", display: "flex" }}
      >
        <ListItemIcon>
          <DescriptionIcon />
        </ListItemIcon>
        <ListItemText primary="Closings" />
      </RouterLink>
    </ListItem>
    <ListItem button>
      <RouterLink
        className="nav-link"
        to="/dashboard/costPredictor/1"
        style={{ textDecoration: "inherit", color: "inherit", display: "flex" }}
      >
        <ListItemIcon>
          <HomeWorkIcon />
        </ListItemIcon>
        <ListItemText primary="Cost Predictor Flow" />
      </RouterLink>
    </ListItem>
    <ListItem button>
      <RouterLink
        className="nav-link"
        to="/dashboard/contractBuilder/1"
        style={{ textDecoration: "inherit", color: "inherit", display: "flex" }}
      >
        <ListItemIcon>
          <HomeWorkIcon />
        </ListItemIcon>
        <ListItemText primary="Contract Builder Flow" />
      </RouterLink>
    </ListItem>
    <ListItem button>
      <RouterLink
        className="nav-link"
        to="/dashboard/logs"
        style={{ textDecoration: "inherit", color: "inherit", display: "flex" }}
      >
        <ListItemIcon>
          <ListAltIcon />
        </ListItemIcon>
        <ListItemText primary="Logs" />
      </RouterLink>
    </ListItem>
  </div>
)

export const secondaryListItems = (
  <div>
    {/* <ListSubheader inset>Saved reports</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItem> */}
  </div>
)
