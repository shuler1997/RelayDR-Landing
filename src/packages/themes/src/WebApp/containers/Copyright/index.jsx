import React from 'react';
import PropTypes from 'prop-types';

import Box from 'packages/common/src/components/Box';
import Container from 'packages/common/src/components/Container';
import Typography from 'packages/common/src/components/Typography';

import data from '../../data';
import { alignItems, justifyContent } from 'styled-system';

const Copyright = ({ copyright, WrapperProps, TextProps }) => (
  <Box {...WrapperProps}>
    <Container>
      <Typography {...TextProps}>{copyright}</Typography>
    </Container>
  </Box>
);

Copyright.propTypes = {
  /**
   * Main content
   */
  copyright: PropTypes.node,
  /**
   * Main content text props
   * @See packages/common/src/components/Typography
   */
  TextProps: PropTypes.object,
  /**
   * Main wrapper props
   * @See packages/common/src/components/Box
   */
  WrapperProps: PropTypes.object,
};

Copyright.defaultProps = {
  copyright: data.copyright,
  TextProps: {
    variant: 'body2',
    textAlign: 'center',
    color: 'gray.1',
  },
  WrapperProps: {
    py: 4,
    backgroundColor: 'gray.5',
    height: 150,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

export default Copyright;
