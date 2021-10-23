import React from 'react';
import PropTypes from 'prop-types';
import Sticky from 'react-sticky-el';

import { Helmet } from 'react-helmet';

import Theme, { theme } from 'packages/themes/src/WebApp';
import {
  Navbar,
  Copyright,
  Footer,
  Welcome,
  Brands,
  About,
  Features,
  Screenshots,
  Clients,
  Cta,
  Pricing,
  Team,
} from 'packages/themes/src/WebApp/containers';

import preview from 'packages/themes/src/WebApp/assets/preview.png';

import SEO from '../components/SEO';

const WebApp = ({ url }) => (
  <Theme>
    <Helmet>
      <link href={theme.typography.googleFont} rel="stylesheet" />
      <meta name="theme-color" content={theme.colors.primary} />
      <meta property="og:image" content={`${url}${preview}`} />
    </Helmet>
    <SEO title="Mobile App" />

    <Sticky style={{ zIndex: 999, position: 'relative' }}>
      <Navbar />
    </Sticky>

    <Welcome name=""/>
    {/* <Brands name="" /> */}
    <Features name="problem" />
    <Screenshots name="solution" />
    <About name="about" />
    <Team name="team" />
    <Clients name="contact" />
    {/* <Pricing name="pricing" /> */}
    {/* <Cta /> */}

    {/* <Footer name="contact" /> */}
    <Copyright />
  </Theme>
);

WebApp.propTypes = {
  url: PropTypes.string,
};

WebApp.defaultProps = {
  url: 'https://pager.land/gatsby/',
};

export default WebApp;
