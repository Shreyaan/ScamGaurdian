const data = [
  {
    id: 1,
    title: "Education",
    content:
      "As online shoppers, we are held liable to the decisions we make, not a software, so learning to identify risks before it is too late is the best method to protect ourselves.",
  },
  {
    id: 2,
    title: "Accessible",
    content: "With our extension, you just need access to a Chrome browser.",
  },
  {
    id: 3,
    title: "Convenience",
    content:
      "You don't have to remember to check the FTC or other websites. Warnings and tips appear on-site when needed.",
  },
];

const reportData = [
  {
    id: 1,
    country: "United States",
    authority: ["FTC", "BBB", "Internet Crime Complaint Center (IC3)"],
    link: [
      "https://reportfraud.ftc.gov/#/",
      "https://www.bbb.org/scamtracker",
      "https://www.ic3.gov/Home/ComplaintChoice",
    ],
  },
  {
    id: 2,
    country: "Canada",
    authority: ["Anti Fraud Center", "Competition Bureau Canada"],
    link: [
      "https://www.antifraudcentre-centreantifraude.ca/report-signalez-eng.htm",
      "https://ised-isde.canada.ca/site/competition-bureau-canada/en/competition-bureau-canada",
    ],
  },
  {
    id: 3,
    country: "India",
    authority: ["Cyber Crime Portal"],
    link: ["https://cybercrime.gov.in/"],
  },
];

export { data, reportData };
