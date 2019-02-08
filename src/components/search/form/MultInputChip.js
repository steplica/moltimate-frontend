import React from 'react';
import PropTypes from 'prop-types';

import ChipInput from 'material-ui-chip-input';

function MultInputChip(props) {
  return (
    <ChipInput
      id='pdbIds'
      defaultValue={[]}
      fullWidth
      label='PDB Names'
      placeholder='Press enter to add'
      onChange={this.props.handleChange}
    />
  );
}

MultInputChip.propTypes = {
  handleChange: PropTypes.func
};

export default MultInputChip;
