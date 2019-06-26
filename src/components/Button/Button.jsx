import React from 'react';
import PropTypes from 'prop-types';
import { pure } from 'recompose';
import { Button as ButtonStyle } from './styles';

const Button = props => <ButtonStyle {...props} />;

Button.defaultProps = {
  full: false,
  strong: false
};

Button.propTypes = {
  outline: PropTypes.bool.isRequired,
  full: PropTypes.bool,
  strong: PropTypes.bool
};

export default pure(Button);
