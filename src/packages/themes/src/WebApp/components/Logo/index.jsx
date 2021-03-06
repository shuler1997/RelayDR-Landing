import React from 'react';
import styled from 'styled-components';

import { base } from 'packages/common/src/utils';

import logo from '../../assets/Logo.svg';

const Img = styled.img`
  display: block;
  ${base};
`;

const Logo = props => <Img src={logo} alt="WebApp" {...props} />;

export default Logo;
