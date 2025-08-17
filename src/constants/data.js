// Images for Hero section
import foodWaste                      from '../images/Artboard 1.jpg';
import foodWithAwesomeContainer       from '../images/water before.png';

// Images for slides in SustainabilityDelivered section
import containerImage25oz             from '../images/Winter (Flyer).png';
// import containerImage16oz             from '../images/gallery-containers-2.png';
// import containerImage100oz            from '../images/gallery-containers-3.png';

// Images for circular ecosystem in HowItWorks section
import HowItWorksImg1                 from '../images/how-it-works-1.svg';
import HowItWorksImg2                 from '../images/how-it-works-2.svg';
import HowItWorksImg3                 from '../images/how-it-works-3.svg';
import HowItWorksImg4                 from '../images/how-it-works-4.svg';

// Images of all the team members used in AwesomeTeam section
import huangLam                       from '../images/Winter (Flyer).png';
import edwinPhua                      from '../images/founders/edwin-phua.png';
import guillaumeCatella               from '../images/founders/guillaume-catella.png';

// Logos of all the partners used in AwesomePartners section
import chefAtWork                     from '../images/partners/chef-at-work.png';
import creatella                      from '../images/partners/creatella.png';
import goaGoa                         from '../images/partners/goa-goa.png';
import ninjaVan                       from '../images/partners/ninja-van.png';
import stewardsSolution               from '../images/partners/stewards-solution.png';
// import { t } from 'i18next';

const data = {
  pageLoad: {
    companyName: 'AL-Khamayseh Beverage Company',
  },
  hero: {
    mainText: 'Pure, sterile, high-quality water, free from impurities and bacteria, locally bottled to serve the Palestinian market with confidence. ',
    companyName: 'Al-Khamayseh Beverage Company',
    imagesToCompare : {
      firstImg: {
        url: foodWaste,
        description: 'Food getting wasted without awesome containers',
      },
      secondImg: {
        url: foodWithAwesomeContainer,
        description: 'Food with awesome containers',
      }
    },

    chatMessages: [
      {
        sender: 'guest',
        color: 'default',
        hasOnClickEvent: false,
        message: 'Hey! What do you offer?',
      },
      {
        sender: 'admin',
        color: 'primary',
        hasOnClickEvent: false,
        message: ' We bottle and deliver high-quality filtered drinking water straight from our facility in Hebron – clean, safe, and refreshingly local.',
      },
      {
        sender: 'guest',
        color: 'default',
        hasOnClickEvent: false,
        message: 'Awesome!',
      },
      {
        sender: 'guest',
        color: 'highlight',
        hasOnClickEvent: true,
        message: ' Do you deliver to my area',
      },
      {
        sender: 'admin',
        color: 'primary',
        hasOnClickEvent: false,
        message: 'We currently deliver across most areas in Palestine. Just share your location and we well confirm availability!',
      },
    ]
  },

  plasticsBadEffects:[ 
  {
    title: ' Founded by Vision',
    text: 'The company was established by Mr. Nimer Khmayseh, who believes in investing in vital industries that serve the community and provide trusted local products with high standards.',
    image: containerImage25oz  ,
  },

  {
    title: 'Our Vision',
    text: [
      'Our ambition is to become a leading water and beverage brand in Palestine, delivering clean, safe, and healthy water with international-quality standards, and expanding throughout local and regional markets in the near future.'
    ],
  },

  {
    title: 'About Ice Water',
    text: [
      'Ice Water is our flagship product and represents the first step of our journey.',
      'The product line will include:',
      '1. Filtered drinking water',
      '2. Natural mineral water',
      '3. RO (Reverse Osmosis) treated water'
    ],
  },
],

  sustainabilityDeliveredSlides: [
    {
      id: 1,
      image: containerImage25oz,
      features: [
        'Removable/adjustable divider',
        'Leak-resistant lid keeps food fresh',
        'Rectangle shapes stack to save storage space',
        'Easy to sanitize and dishwasher safe',
        'Containers and lids are freezer safe',
        'Containers are oven safe up to 300 degrees',
        'Lighter and sturdier than glass',
        'Etched tare weights for easy bulk shopping',
        '304 (18/8) stainless steel, LDPE #4 plastic lid, PP #5 plastic divider',
        'Free of BPA, BPS, phthalates and lead',
      ],
      sizing: [
        '25oz container size with lid on: 7.75” x 1.75" x 5” Lids: 7.75” x 5"',
      ],
    },
    {
      id: 2,
      image: containerImage25oz,
      features: [
        'Leak-resistant lid keeps food fresh',
        'Easy to sanitize and dishwasher safe',
        'Containers and lids are freezer safe',
        'Containers are oven safe up to 300 degrees',
        'Three containers nest to save storage space',
        'Lighter and sturdier than glass',
        'Etched tare weights for easy bulk shopping',
        '304 (18/8) stainless steel, LDPE #4 plastic',
        'Free of BPA, BPS, phthalates and lead',
      ],
      sizing: [
        '16oz, container size with lid on: 4-5/8" x 2.25". Lid is 4.75” diameter',
        '9oz, container size with lid on: 4" x 2". Lid is 4” diameter',
        '5oz, container size with lid on: 3.5" x 1.5". Lid is 3.5” diameter',
      ],
    },
    {
      id: 3,
      image: containerImage25oz,
      features: [
        'Removable 2-section + 4-section divider',
        'Leak-resistant lid keeps food fresh',
        'Easy to sanitize and dishwasher safe',
        'Containers and lids are freezer safe',
        'Containers are oven safe up to 300 degrees',
        'Lighter and sturdier than glass',
        'Etched tare weights for easy bulk shopping',
        '304 (18/8) stainless steel, LDPE #4 plastic lid, PP#5 divider',
        'Free of BPA, BPS, phthalates and lead',
      ],
      sizing: [
        '100oz (3 liters, 12.5 cups), 9.5” x 3.25”',
      ],
    },
  ],
  howItWorks: {
    title: 'How it works?',
    circularEcosystem: {
      step1: {
        stepNo: '01',
        image: {
          url: HowItWorksImg1,
          description: 'a mobile app with containers',
        },
        caption: 'Restaurants request reusable containers via app',
      },
      step2: {
        stepNo: '02',
        image: {
          url: HowItWorksImg2,
          description: 'a delivery truck',
        },
        caption: 'Deliver containers to restaurants',
      },
      step3: {
        stepNo: '03',
        image: {
          url: HowItWorksImg3,
          description: 'a person picking up the used containers',
        },
        caption: 'Pick up used containers from users via app',
      },
      step4: {
        stepNo: '04',
        image: {
          url: HowItWorksImg4,
          description: 'a washed, clean and sparkling container',
        },
        caption: 'Wash containers at commercial facility',
      }
    }
  },
  impacts: {
    title: 'Impact',
    cards: [
      {
        id: 1,
        cardHeader: "For Businesses",
        cardContent: [
          "Save at least 50% on supply cost",
          "Save 50-60 hours per week of manager's labor cost: no inventory management, no reordering, no restocking",
          "Save real estate cost for storage",
          "Government helps Subsidize Up to 70%",
        ],
      },
      {
        id: 2,
        cardHeader: "For Users",
        cardContent: [
          "Remove all chemicals going into food: plastics, BPA, PFAS and other 'forever chemicals' used to hold compostable packaging together",
          "Gamification: reward for returned containers",
          "Sustainability sells: users feel good about helping the planet",
        ],
      },
    ],
  },
  competition: {
    title: 'The competition is no match',
    table: [
      ['', 'Awesome Container Company', 'Deliver Zero', 'Logistics Company', 'Washing Facility', 'Single-use plastics'],
      ['Save over 50% on supply costs', true, false, false, false, false],
      ['Save real estate storage costs', true, true, false, false, false],
      ['Inventory management', true, false, false, false, false],
      ['Never reorder supplies', true, false, false, false, false],
      ['Easy pickup and delivery', true, false, true, true, true],
      ['Sustainable products', true, false, false, true, false],
      ['App for tracking and reporting', true, false, true, false, false],
    ],
  },
  awesomeTeam: {
    title: 'An Awesome Team',
    members: [
      {
        name: 'Huang Lam',
        title: 'Founder / CEO',
        linkedIn: 'https://www.linkedin.com/in/hung-lam-85a502163/',
        image: huangLam,
      },
      {
        name: 'Edwin Phua',
        title: 'Co-founder / COO',
        linkedIn: 'https://www.linkedin.com/in/edwin-phua/',
        image: edwinPhua,
      },
      {
        name: 'Guillaume Catella',
        title: 'Co-founder / CTO',
        linkedIn: 'https://www.linkedin.com/in/guillaumecatella/',
        image: guillaumeCatella,
      },
    ],
  },
  awesomePartners: {
    title: 'And Awesome Partners',
    logos: [
      {
        imgUrl: chefAtWork,
        link: 'https://chefatwork.com.sg/',
      },
      {
        imgUrl: stewardsSolution,
        link: 'https://www.stewardssolution.com/',
      },
      {
        imgUrl: ninjaVan,
        link: 'https://www.ninjavan.co/en-sg',
      },
      {
        imgUrl: creatella,
        link: 'https://creatella.ventures/'
      },
      {
        imgUrl: goaGoa,
        link: 'http://goaltd.com.hk/index.php/en/'
      },
    ],
  },
  footer: {
    email: 'Hello@KhamaysehBeverage.com',
    address: {
      line1: 'Taffouh,',
      line2: 'Hebron,',
      country: 'palestine,',
      postcode: '9020000',
    },
    social: {
      instagram: 'Al-Khamayseh Beverage Company',
      profile: 'https://www.instagram.com/yazankh_7?igsh=MW91ajJyaW1xcmF1Mg%3D%3D&utm_source=qr',
    },
    activeInCountries: 'Palestine',
    planningToBeActiveInCountries: 'Jordan, Lebanon, Egypt, UAE, Saudi Arabia, Qatar, Oman, Kuwait',
  }
}

export default data;
