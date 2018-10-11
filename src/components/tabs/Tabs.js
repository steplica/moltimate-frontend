import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import ResultList from './results/ResultList';
import ToolList from './tools/ToolList';
import Badge from '@material-ui/core/Badge';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

/*
<Tab
  label={
    <Badge className={classes.padding} color="secondary" badgeContent={1}>Results</Badge>
  }
/>
*/

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  padding: {
    padding: `0 ${theme.spacing.unit * 2}px`,
  },
});

class SimpleTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs
            value={value} onChange={this.handleChange}>
            <Tab label="Tools" />
            <Tab label="Results" />
          </Tabs>
        </AppBar>
        {value === 0 && <TabContainer><ResultList/></TabContainer>}
        {value === 1 && <TabContainer><ToolList/></TabContainer>}
      </div>
    );
  }
}

SimpleTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTabs);
