import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import Divider from '@material-ui/core/Divider';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing.unit - 5,
  },
});

class NestedList extends React.Component {
  state = {
    open: true,
  };

  handleClick = () => {
    this.setState(state => ({ open: !state.open }));
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <small>Loading Results...</small>
        <List
          component="nav"
        >
          <ListItem button onClick={this.handleClick}>
            <ListItemText primary="EC 1" />
            {this.state.open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={this.state.open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}>
                <ListItemText inset>
                  <StarBorder className={classes.iconHover} style={{ fontSize: 10 }} />
                  0-2: A_lakd_1_14_15_1
                </ListItemText>
              </ListItem>
              <ListItem selected={true}  button className={classes.nested}>
                <ListItemText inset primary="0-2: A_ldfg_1_5_28_1" />
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemText inset primary="0-2: A_lcbh_1_5_6_1" />
              </ListItem>
            </List>
          </Collapse>
          <Divider />
          <ListItem button onClick={this.handleClick}>
            <ListItemText primary="EC 2" />
            {!this.state.open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse  timeout="auto" unmountOnExit>
          </Collapse>
          <Divider />
          <ListItem button onClick={this.handleClick}>
            <ListItemText primary="EC 3" />
            {!this.state.open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse  timeout="auto" unmountOnExit>
          </Collapse>
        </List>
      </div>
    );
  }
}

NestedList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NestedList);
