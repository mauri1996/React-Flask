import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import {Link} from 'wouter'

export const mainListItems = (
  <div>
    <ListItem button component={Link} to='/'>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Home" />
    </ListItem>
    <ListItem button component={Link} to='/consulta1'>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Consulta 1" />
    </ListItem>
    <ListItem button component={Link} to='/consulta2'>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Consulta 2" />
    </ListItem>
    <ListItem button component={Link} to='/consulta3'>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Consulta 3" />
    </ListItem>
    <ListItem button component={Link} to='/consulta4'>
      <ListItemIcon >
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Consulta 4" />
    </ListItem>
    <ListItem button component={Link} to='/consulta5'>
      <ListItemIcon >
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Consulta 5" />
    </ListItem>

  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Saved reports</ListSubheader>
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
    </ListItem>
  </div>
);