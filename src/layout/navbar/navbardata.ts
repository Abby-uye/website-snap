import { navbarIcons } from "../../assets/layoutAssets/navbarIcons";
export const linkList = [
  {
    name: "Personal",
    icon: true,
    onAction: () => {},
    options: [
      {
        label: "Savings",
        description: "Digital Product for retailers and small business onwers",
        link: "/about-us",
        icon: navbarIcons.piggyLight,
        activeIcon: navbarIcons.piggyFilled,
      },
      {
        label: "Virtual and Physical Cards",
        description: "Spend anyday, anytime with the Raven digital card!",
        link: "/about-us",
        icon: navbarIcons.cardLight,
        activeIcon: navbarIcons.cardFilled,
      },
      {
        label: "Overdraft — Loans",
        description: "Accept bill payments and purchases with RAVEN POS ",
        link: "/about-us",
        icon: navbarIcons.loansLight,
        activeIcon: navbarIcons.loansFilled,
        color: "rgba(11, 131, 118, 1)",
      },
    ],
  },
  {
    name: "For Business",
    icon: true,
    onAction: () => {},
    bigOption: true,
    options: [
      {
        label: "Business Loans",
        description: "Loans, grants for businesses.",
        link: "/about-us",
        icon: navbarIcons.businessLoanLight,

        color: "rgba(11, 131, 118, 1)",
      },
      {
        label: "Raven — POS",
        description: "Accept bills and purchases with RAVEN POS ",
        link: "/about-us",
        icon: navbarIcons.posLight,

        color: "rgba(11, 131, 118, 1)",
      },
      {
        label: "Finalytics",
        description: "Connect all bank apps all in one place.",
        link: "/about-us",
        icon: navbarIcons.finalyticsLight,

        color: "rgba(11, 131, 118, 1)",
      },

      {
        label: "Business Banking",
        description: "Corporate finance product for firms and businesses",
        link: "/about-us",
        icon: navbarIcons.businessBankingLight,

        color: "rgba(11, 131, 118, 1)",
      },
      {
        label: "Card Issuing",
        description: "Digital Cards for Businesses",
        link: "/about-us",
        icon: navbarIcons.cardIssueingLight,

        color: "rgba(11, 131, 118, 1)",
      },
      {
        label: "Raven — Atlas",
        description: "Digital Product for retailers and small business onwers",
        link: "/about-us",
        icon: navbarIcons.atlasLight,

        color: "rgba(11, 131, 118, 1)",
      },
    ],
  },
  {
    name: "Comapany",
    icon: true,
    onAction: () => {},
    options: [
      {
        label: "About Us",
        description: "About Us at Raven Bank",
        link: "/about-us",
        icon: navbarIcons.ravenWingFilled,

        color: "rgba(11, 131, 118, 1)",
      },
      {
        label: "Careers",
        description: "Join the Raven team to make Raven better",
        link: "/careeers",
        icon: navbarIcons.careersFilled,

        color: "rgba(11, 131, 118, 1)",
      },
      {
        label: "Support",
        description: "Get in touch with us. we are never far from you!",
        link: "/about-us",
        icon: navbarIcons.supportFilled,

        color: "rgba(11, 131, 118, 1)",
      },
    ],
  },
  { name: "FAQ", icon: false, onAction: () => {} },
];
