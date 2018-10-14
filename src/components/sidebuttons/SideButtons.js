import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add';
import NavigationIcon from '@material-ui/icons/Navigation';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
  centerButtons: {
    maxWidth: 100,
  },
  right: {
    textAlign: 'right',
  }
});

function FloatingActionButtons(props) {
  const { classes } = props;
  return (
    <div className={classes.centerButtons}>
      <Button variant="fab" color="primary" aria-label="Add" className={classes.button}>
        <MenuIcon/>
      </Button>
    </div>
  );
}

FloatingActionButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FloatingActionButtons);
