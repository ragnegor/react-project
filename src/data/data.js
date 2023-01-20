import photo from "../assets/img/header-photo.svg";
import iconPS from "../assets/img/icons/adobe-photoshop.svg";
import iconAI from "../assets/img/icons/adobe-illustration.svg";
import iconAAF from "../assets/img/icons/adobe-a-effects.svg";
import figma from "../assets/img/icons/figma.svg";

import fashionPic from "../assets/img/portfilio/fashion_web.svg";
import reebokPic from "../assets/img/portfilio/reebok_web.svg";
import braunPic from "../assets/img/portfilio/braun_web.svg";

import linkedlnIcon from "../assets/img/icons/social-media/linkedln.svg";
import instagramIcon from "../assets/img/icons/social-media/instagram.svg";
import behanceIcon from "../assets/img/icons/social-media/behance.svg";
import dribble from "../assets/img/icons/social-media/dribble.svg";

let data = {
  header: {
    navigation: {
      link1: {
        link: "#",
        label: "Home"
      },
      link2: {
        link: "#Section-about-designer",
        label: "About me"
      },
      link3: {
        link: "#SectionsSkills",
        label: "Skills"
      },
      link4: {
        link: "#SectionPortfolio",
        label: "Portfolio"
      },
      link5: {
        link: "#Contacts",
        label: "Contacts"
      }
    },
    shortInfo: {
      name: "Denis",
      surname: "Novik",
      profession: "UX | UI designer",
      age: "24 years old, Minsk",
      langru: "RU",
      lengEng: "ENG",
      picture: photo,
      alt: "designerPhoto"
    }
  },
  sectionAboutdesigner: {
    header: "About me",
    info1: "Hi, I'm Denis – UX/UI designer from Minsk.\n" +
      "I'm interested in design and everything connected with it.",
    info2: "I'm studying at courses \"Web and mobile design\n" +
      "interfaces\" in IT-Academy.",
    info3: "Ready to implement excellent projects\n" +
      "with wonderful people."
  },
  sectionSkills: {
    header: "Skills",
    subheader: "I work in such programs as",
    SkillsItems: {
      skill1: {
        link: "#",
        icon: iconPS,
        alt: "adobePh.icon",
        title: "Adobe\nPhotoshop"
      },
      skill2: {
        link: "#",
        icon: iconAI,
        alt: "iconAI",
        title: "Adobe\n" +
          "Illustration"
      },
      skill3: {
        link: "#",
        icon: iconAAF,
        alt: "iconAAF",
        title: "Adobe\n" +
          "After Effects\n"
      },
      skill4: {
        link: "#",
        icon: figma,
        alt: "figma",
        title: "Figma"
      }
    }
  },
  sectionPortfolio: {
    header: "Portfolio",
    portfolioItems: {
      item1: {
        picture: fashionPic,
        alt: "fashionPic.img",
        text: "Online fashion store - Homepage"
      },
      item2: {
        picture: reebokPic,
        alt: "reebokPic.img",
        text: "Reebok Store - Concept"
      },
      item3: {
        picture: braunPic,
        alt: "braunPic.img",
        text: "Braun Landing Page - Concept"
      },
    }
  },
  footer: {
    header: "Contacts",
    subheader: "Want to know more or just chat? \n" +
      "You are welcome!",
    socMedia: {
      item1: {
        icon: linkedlnIcon,
        alt: "linkedln.icon"
      },
      item2: {
        icon: instagramIcon,
        alt: "instagramIcon"
      },
      item3: {
        icon: behanceIcon,
        alt: "behanceIcon"
      },
      item4: {
        icon: dribble,
        alt: "dribble"
      }
    },
    description: "Like me on\n" +
      "LinkedIn, Instagram, Behance, Dribble"
  }
}


export default data;


