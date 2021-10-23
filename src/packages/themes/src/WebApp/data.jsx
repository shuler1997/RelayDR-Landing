import React from "react";

import MapMarker from "packages/icons/src/line/MapMarker";
import textToMultiline from "packages/common/src/utils/textToMultiline";
import Phone from "packages/icons/src/line/Phone";
import Envelope from "packages/icons/src/line/Envelope";
import FacebookF from "packages/icons/src/line/FacebookF";
import Instagram from "packages/icons/src/line/Instagram";
import Youtube from "packages/icons/src/line/Youtube";
import Plus from "packages/icons/src/line/Plus";
import Sync from "packages/icons/src/line/Sync";
import LifeRing from "packages/icons/src/line/LifeRing";
import MobileAndroid from "packages/icons/src/line/MobileAndroid";
import Stefan from "images/stefan.jpeg";
import Shuler from "images/shuler.jpeg";
import Jaafar from "images/jaafar.jpeg";
import Typography from "packages/common/src/components/Typography";
import Img from "packages/common/src/components/Img";

import { smoothLinkProps } from "packages/common/src/utils";

import maschable from "./assets/brands/maschable.svg";
import extremetech from "./assets/brands/extremetech.svg";
import techbragins from "./assets/brands/techbragins.svg";
import envato from "./assets/brands/envato.svg";
import geek from "./assets/brands/geek.svg";

import features1 from "./assets/features.svg";
import features2 from "./assets/features-2.svg";
import features3 from "./assets/features-3.svg";
import features4 from "./assets/features-4.svg";
import handoverViewer from "images/dashboard.gif";
import listViewer from "images/list_view.gif";
import patientInfo from "images/patient_info.gif";
import patientLogs from "images/patient_logs.gif";
import NHSCEP from "images/NHSCEP.png";

import Screenshot from "./assets/screenshot.jpg";
import Screenshot2x from "./assets/screenshot@2x.jpg";
import Avatar from "./assets/avatar.jpg";
import Avatar2x from "./assets/avatar@2x.jpg";

export default {
  title: "WebApp",
  navbar: {
    links: [
      {
        to: "",
        label: "Home",
      },
      {
        to: "problem",
        label: "Problem",
      },
      {
        to: "solution",
        label: "Solution",
      },
      {
        to: "team",
        label: "Team",
      },
      {
        to: "contact",
        label: "Contact",
      },
      // {
      //   to: 'clients',
      //   label: 'Clients',
      // },
      // {
      //   to: 'pricing',
      //   label: 'Pricing',
      // },
      // {
      //   to: 'contact',
      //   label: 'Contact',
      // },
    ],
    actions: [
      // {
      //   href:
      //     'https://themeforest.net/item/pagerland-react-and-gatsby-landing-page-templates/26548567',
      //   label: 'Buy this theme',
      // },
    ],
  },
  welcome: {
    title: [
      <Typography as="span" variant="h1" color="primary">
        Cost Effective
      </Typography>,
      " web app solution for medical handovers",
    ],
    text:
      "RelayDR is a simple and smart solution for hospital departments to streamline their handover process",
    actions: [
      {
        label: "Learn more",
        to: "problem",
        ...smoothLinkProps,
        variant: "secondary",
      },
    ],
  },
  brands: [
    {
      src: NHSCEP,
      alt: "Maschable",
      LinkProps: {
        href: "https://mypags.app",
        title: "NHS Clinical Entrepreneur",
      },
    },
  ],
  about: {
    sections: [
      {
        IconWrapperProps: {
          bg: "primary",
        },
        title: "Works on all devices",
        text:
          "Our goal is to allow clinicians to use this on the go, meaning that they can access the app through their personal mobile",
        icon: MobileAndroid,
      },
      {
        IconWrapperProps: {
          bg: "secondary",
        },
        title: "Instantaneous data syncing",
        text:
          "As soon as Doctor A edits a patient record, Doctor B will be able to see the change immediately",
        icon: Sync,
      },
      {
        IconWrapperProps: {
          bg: "tertiary",
        },
        title: "Flexible features",
        text:
          "As a startup, we are quick to respond to our customers, let us know what additional features you need, and we will add it",
        icon: Plus,
      },
    ],
  },
  features: {
    title: "The problem we are trying to solve",
    text:
      "Many hospital departments are still printing out paper notes from Word and Excel documents for their medical handovers. This leads to...",
    features: [
      {
        title: "1) Increased risk of breaching confidentiality",
        text:
          "Having paper notes lying around increases the risk of leaking confidential information, which could result in harm to patients and indemnity bills for the responsible hospital",
        details: (
          <Img
            src={handoverViewer}
            maxWidth="121.0526315789%"
            ml="-10.5%"
            mt="-10.9%"
          />
        ),
      },
      {
        title: "2) Increased chance of repeating the same task",
        text:
          "What Doctor A has done will not be known to Doctor B until they communicate. There is currently no notification system in place to alert doctors about their colleagues' progress in real time",
        details: (
          <Img
            src={listViewer}
            maxWidth="121.0526315789%"
            ml="-10.5%"
            mt="-10.9%"
          />
        ),
      },
      {
        title:
          "3) Precious time and energy spent on manually preparing handover notes",
        text:
          "Junior doctors spend 1 hour on average preparing the notes for every handover. The task itself usually involves copying and pasting between documents.",
        details: (
          <Img
            src={patientInfo}
            maxWidth="121.0526315789%"
            ml="-10.5%"
            mt="-10.9%"
          />
        ),
      },
      {
        title:
          "4) Difficulty tracking down the relevant staff when things go wrong",
        text:
          "If a mistake is made by one of the staff, then it can be time-consuming to identify and then get in contact with the relevant individual in order to acquire crucial patient information.",
        details: (
          <Img
            src={patientLogs}
            maxWidth="121.0526315789%"
            ml="-10.5%"
            mt="-10.9%"
          />
        ),
      },
    ],
  },
  screenshots: {
    title: "Our solution",
    screenshots: [
      {
        ImgProps: {
          src: handoverViewer,
          srcSet: `${handoverViewer} 1x, ${handoverViewer} 2x`,
          alt: "Handover View",
        },
        title: "Handover Viewer - Card view",
        text:
          "Filter by patient, consultant or date. See all of your patients for the day in a single view. Tap on any of the cards to view and edit patient details.",
      },
      {
        ImgProps: {
          src: listViewer,
          srcSet: `${listViewer} 1x, ${listViewer} 2x`,
          alt: "Screenshot",
        },
        title: "Handover Viewer - List view",
        text:
          "A different way to display all your patients for the day. Click on the patient's MRN to navigate to their 'Patient View' page",
      },
      {
        ImgProps: {
          src: patientInfo,
          srcSet: `${patientInfo} 1x, ${patientInfo} 2x`,
          alt: "Screenshot",
        },
        title: "Patient View",
        text:
          "View all notes on this particular patient. This includes basic personal information, investigation results and previous handover notes. All of these data can be edited in this view mode.",
      },
      {
        ImgProps: {
          src: patientLogs,
          srcSet: `${patientLogs} 1x, ${patientLogs} 2x`,
          alt: "Screenshot",
        },
        title: "Patient logs",
        text:
          "Keep everyone accountable for their actions with our patient logs. On this page, every user can see the changes made to patient notes by other users. This allows everyone to sync their daily progress and also makes it easier to chase people up for things they have/haven't done",
      },
    ],
  },
  team: {
    title: "Meet our team",
    text:
      "We're a lean team of experienced full-stack developers with medical backgrounds. We believe our unique skill-set combining medicine and tech will help to deliver the best products for medical professionals",
    cta: {
      label: "Contact us",
      href:
        "https://themeforest.net/item/pagerland-react-and-gatsby-landing-page-templates/26548567",
    },
    people: [
      {
        avatar: {
          src: Stefan,
          srcSet: `${Stefan} 1x, ${Stefan} 2x`,
        },
        name: "Stefan Mitrasinovic",
        position: "Co-Founder",
        social: {
          linkedin: "https://www.linkedin.com/in/stefanmitrasinovic/",
        },
      },
      {
        avatar: {
          src: Shuler,
          srcSet: `${Shuler} 1x, ${Shuler} 2x`,
        },
        name: "Shuler Xu",
        position: "Co-Founder",
        social: {
          linkedin: "https://www.linkedin.com/in/shuler-xu-994011142/",
        },
      },
      {
        avatar: {
          src: Jaafar,
          srcSet: `${Jaafar} 1x, ${Jaafar} 2x`,
        },
        name: "Jaafar Rammal",
        position: "Co-Founder",
        social: {
          linkedin: "https://www.linkedin.com/in/jaafar-rammal-686aa4174/",
        },
      },
    ],
  },
  clients: {
    title: "If you would like to try a demo, please get in touch",
    avatar: {
      src: Stefan,
      srcSet: `${Stefan} 1x, ${Stefan} 2x`,
      alt: "Avatar",
    },
    comment: "S.mitrasinovic@nhs.net",
    author: "Dr Stefan Mitrasinovic, Co-founder",
  },
  pricing: {
    title: "Pricing",
    prices: {
      currency: "USD",
      types: {
        a: "Monthly",
        b: "Annually",
      },
      sections: [
        {
          title: "Beginner",
          price: "Free",
          period: "Forever",
          features: [
            {
              text: "user",
              prefix: "1",
            },
            {
              text: "clients",
              prefix: "2",
            },
            {
              text: "projects",
              prefix: "5",
            },
            {
              text: "tasks",
              prefix: "No",
            },
            {
              text: "subtasks",
              prefix: "No",
            },
            {
              text: "invoicing",
              prefix: "No",
            },
            {
              text: "estimating",
              prefix: "No",
            },
          ],
          button: {
            text: "Try now",
            ButtonProps: {
              as: "a",
              href: "https://mypags.app",
            },
          },
        },
        {
          title: "Advanced",
          price: "$25",
          period: "per month",
          features: [
            {
              text: "user",
              prefix: "1",
            },
            {
              text: "clients",
              prefix: "Unlimited",
            },
            {
              text: "projects",
              prefix: "Unlimited",
            },
            {
              text: "tasks",
              prefix: "Unlimited",
            },
            {
              text: "subtasks",
              prefix: "No",
            },
            {
              text: "invoices per month",
              prefix: "10",
            },
            {
              text: "estimates per month",
              prefix: "10",
            },
          ],
          button: {
            text: "Try now",
            ButtonProps: {
              as: "a",
              href: "https://mypags.app",
            },
          },
        },
        {
          title: "Expert",
          price: "$99",
          period: "per month",
          features: [
            {
              text: "user",
              prefix: "25",
            },
            {
              text: "clients",
              prefix: "Unlimited",
            },
            {
              text: "projects",
              prefix: "Unlimited",
            },
            {
              text: "tasks",
              prefix: "Unlimited",
            },
            {
              text: "subtasks",
              prefix: "Unlimited",
            },
            {
              text: "invoicing",
              prefix: "Unlimited",
            },
            {
              text: "estimating",
              prefix: "Unlimited",
            },
          ],
          button: {
            text: "Try now",
            ButtonProps: {
              as: "a",
              href: "https://mypags.app",
            },
          },
        },
      ],
    },
  },
  cta: {
    title: "Do you like what you see?",
    button: {
      label: "Buy it on Themeforest",
      href:
        "https://themeforest.net/item/pagerland-react-and-gatsby-landing-page-templates/26548567",
    },
  },
  socialLinks: [
    {
      icon: FacebookF,
      href: "https://mypags.app",
      title: "Facebook",
    },
    {
      icon: Instagram,
      href: "https://mypags.app",
      title: "Instagram",
    },
    {
      icon: Youtube,
      href: "https://mypags.app",
      title: "YouTube",
    },
  ],
  footer: {
    section1: {
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rhoncus dolor et dolor eleifend laoreet. Donec id nisi finibus, consequat libero vitae, imperdiet urna.`,
    },
    contact: {
      title: "Contact",
      sections: [
        {
          icon: MapMarker,
          text: textToMultiline(
            `9207 Lakeshore Rd\nShreveport, Rhode Island\n98563 United States`
          ),
        },
        {
          icon: Phone,
          text: "(262) 555-0131",
        },
        {
          icon: Envelope,
          text: "info@example.com",
        },
      ],
    },
    section3: {
      title: "Support & downloads",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rhoncus dolor et dolor eleifend.`,
      cta: {
        text: "Buy it on Themeforest",
        href: "https://mypags.app",
      },
    },
  },
  copyright: "© 2021 RelayDR",
};
