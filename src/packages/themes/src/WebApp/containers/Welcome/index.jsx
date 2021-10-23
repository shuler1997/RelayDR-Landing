import React from 'react';
import PropTypes from 'prop-types';
import { Parallax } from 'react-scroll-parallax';

import Box from 'packages/common/src/components/Box';
import Container from 'packages/common/src/components/Container';
import Fade from 'react-reveal/Fade';
import Typography from 'packages/common/src/components/Typography';
import Button from 'packages/common/src/components/Button';
import Img from 'packages/common/src/components/Img';

import Reveal from 'react-reveal/Reveal';
import Liquid from '../../components/Liquids/A';

import hero from '../../assets/Hero.svg';
import feature1 from '../../assets/Feature-1.svg';
import feature2 from '../../assets/Feature-2.svg';
import feature3 from '../../assets/Feature-3.svg';
import feature4 from '../../assets/Feature-4.svg';
import addcase from 'images/screenshots/addcase.png'
import handover from 'images/screenshots/handover.png'
import login from 'images/screenshots/login.png'
import logs from 'images/screenshots/logs.png'
import patient from 'images/screenshots/patient.png'
import plans from 'images/screenshots/plans.png'
import welcome from 'images/screenshots/welcome.png'

import data from '../../data';

const Welcome = ({
  name,
  title,
  text,
  actions,
  features,
  WrapperProps,
  ContainerProps,
  CaptionProps,
  TitleProps,
  TextProps,
  ActionButtonsProps,
  HeroImgWrapperProps,
  LiquidProps,
}) => (
  <Box name={name} {...WrapperProps}>
    <Container {...ContainerProps}>
      <Box {...CaptionProps}>
        <Fade bottom cascade duration={600}>
          <Typography {...TitleProps}>{title}</Typography>
          <Typography {...TextProps}>{text}</Typography>
          <Box {...ActionButtonsProps}>
            {actions.map(({ label, ...props }, key) => (
              <Button {...props} key={key}>
                {label}
              </Button>
            ))}
          </Box>
        </Fade>
      </Box>
    </Container>
  </Box>
);

Welcome.propTypes = {
  /**
   * Name of container, can be used for anchors
   */
  name: PropTypes.string.isRequired,
  /**
   * Wrapper props
   * @See packages/common/src/components/Box
   */
  WrapperProps: PropTypes.object,
  /**
   * Component container props
   * @See packages/common/src/components/Container
   */
  ContainerProps: PropTypes.object,
  /**
   * Caption props
   * @See packages/common/src/components/Box
   */
  CaptionProps: PropTypes.object,
  /**
   * Title text props
   * @See packages/common/src/components/Typography
   */
  TitleProps: PropTypes.object,
  /**
   * Main text props
   * @See packages/common/src/components/Typography
   */
  TextProps: PropTypes.object,
  /**
   * Wrapper with action buttons
   * @See packages/common/src/components/Box
   */
  ActionButtonsProps: PropTypes.object,
  /**
   * Props of hero img wrapper
   * @See packages/common/src/components/Box
   */
  HeroImgWrapperProps: PropTypes.object,
  /**
   * Props for liquid in background
   */
  LiquidProps: PropTypes.object,
  /**
   * Title node of component
   */
  title: PropTypes.node,
  /**
   * Main description
   */
  text: PropTypes.node,
  /**
   * Action buttons
   */
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.node,
    }),
  ),
  /**
   * List of feature images
   */
  features: PropTypes.arrayOf(
    PropTypes.shape({
      WrapperProps: PropTypes.object,
      ParallaxProps: PropTypes.object,
      ImgProps: PropTypes.object,
    }),
  ),
};

Welcome.defaultProps = {
  WrapperProps: {
    pb: {
      _: 0,
      lg: 60,
    },
  },
  CaptionProps: {
    pt: {
      _: 40,
      lg: 100,
    },
    pb: {
      _: 0,
      lg: 60,
    },
    textAlign: 'center',
    maxWidth: 770,
    mx: 'auto',
  },
  TitleProps: {
    as: 'h1',
    variant: 'h1',
    mb: 4,
    maxWidth: 570,
    mx: 'auto',
  },
  TextProps: {
    variant: 'body1',
  },
  ActionButtonsProps: {
    mt: 4,
  },
  HeroImgWrapperProps: {
    position: 'relative',
    pt: 70,
    pb: {
      _: 60,
      lg: 120,
    },
  },
  LiquidProps: {
    position: 'absolute',
    zIndex: -1,
    width: '100%',
    maxWidth: 1099,
    top: {
      _: 0,
      md: -60,
      lg: -120,
    },
  },
  features: [
    {
      WrapperProps: {
        mx: 'auto',
        display: 'block',
      },
      ImgProps: {
        src: addcase,
        maxWidth: '30%',
      },
      ParallaxProps: {
        y: ['10%', '-10%'],
      },
    },
    {
      WrapperProps: {
        display: {
          _: 'none',
          lg: 'block',
        },
        position: 'absolute',
        left: 40,
        top: -30,
      },
      ParallaxProps: {
        y: ['10%', '-10%'],
      },
      ImgProps: {
        src: handover,
        maxWidth: '30%',

      },
    },
    {
      WrapperProps: {
        display: {
          _: 'none',
          lg: 'block',
        },
        position: 'absolute',
        right: 10,
        top: 45,
      },
      ParallaxProps: {
        y: ['30%', '-30%'],
      },
      ImgProps: {
        src: feature2,
      },
    },
    {
      WrapperProps: {
        display: {
          _: 'none',
          lg: 'block',
        },
        position: 'absolute',
        left: -16,
        top: 205,
      },
      ParallaxProps: {
        y: ['20%', '-40%'],
      },
      ImgProps: {
        src: feature3,
      },
    },
    {
      WrapperProps: {
        display: {
          _: 'none',
          lg: 'block',
        },
        position: 'absolute',
        right: 192,
        top: 490,
      },
      ParallaxProps: {
        y: ['10%', '-100%'],
      },
      ImgProps: {
        src: feature4,
      },
    },
  ],
  ...data.welcome,
};

export default Welcome;
