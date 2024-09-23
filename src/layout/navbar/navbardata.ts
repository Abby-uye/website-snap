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
        link: "",
        icon: navbarIcons.businessLoanLight,

        color: "rgba(11, 131, 118, 1)",
      },
      {
        label: "Raven — POS",
        description: "Accept bills and purchases with RAVEN POS ",
        link: "",
        icon: navbarIcons.posLight,

        color: "rgba(11, 131, 118, 1)",
      },
      {
        label: "Finalytics",
        description: "Connect all bank apps all in one place.",
        link: "",
        icon: navbarIcons.finalyticsLight,

        color: "rgba(11, 131, 118, 1)",
      },

      {
        label: "Business Banking",
        description: "Corporate finance product for firms and businesses",
        link: "",
        icon: navbarIcons.businessBankingLight,

        color: "rgba(11, 131, 118, 1)",
      },
      {
        label: "Card Issuing",
        description: "Digital Cards for Businesses",
        link: "",
        icon: navbarIcons.cardIssueingLight,

        color: "rgba(11, 131, 118, 1)",
      },
      {
        label: "Raven — Atlas",
        description: "Digital Product for retailers and small business onwers",
        link: "",
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
        icon: navbarIcons.ravenWingLight,

        color: "rgba(11, 131, 118, 1)",
      },
      {
        label: "Careers",
        description: "Join the Raven team to make Raven better",
        link: "/careers",
        icon: navbarIcons.careersLight,

        color: "rgba(11, 131, 118, 1)",
      },
      {
        label: "Support",
        description: "Get in touch with us. we are never far from you!",
        link: "/about-us",
        icon: navbarIcons.supportLight,

        color: "rgba(11, 131, 118, 1)",
      },
    ],
  },
  { name: "FAQ", icon: false, onAction: () => {} },
];
