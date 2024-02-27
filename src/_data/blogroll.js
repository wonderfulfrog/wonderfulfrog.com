const blogroll = [
  {
    title: "Rach Smith's Digital Garden",
    url: "https://rachsmith.com/",
  },
  {
    title: "Robb Knight",
    url: "https://rknight.me/",
  },
  {
    title: "Stephanie Stimac",
    url: "https://stephaniestimac.com/",
  },
  {
    title: "Lene Saile",
    url: "https://www.lenesaile.com/en/",
  },
  {
    title: "Chris Nicholas",
    url: "https://chrisnicholas.dev/",
  },
  {
    title: "Katherine Yang",
    url: "https://kayserifserif.place/",
  },
  {
    title: "Alice Bartlett",
    url: "https://alicebartlett.co.uk/",
  },
  {
    title: "Arcana Computer",
    url: "https://www.arcana.computer/",
  },
  {
    title: "Jonas Downey",
    url: "https://jonas.do/",
  },
  {
    title: "Robin Rendle",
    url: "https://robinrendle.com/",
  },
  {
    title: "Robb Owen",
    url: "https://robbowen.digital/",
  },
  {
    title: "CSS in Real Life",
    url: "https://css-irl.info/",
  },
  {
    title: "Ryan Mulligan",
    url: "https://ryanmulligan.dev/",
  },
  {
    title: "cliophate",
    url: "https://cliophate.wtf/",
  },
  {
    title: "Ryan P. Randall",
    url: "https://www.ryanpatrickrandall.com/",
  },
  {
    title: "Aleksandr Hovhannisyan",
    url: "https://www.aleksandrhovhannisyan.com/",
  },
  {
    title: "Casey Williams",
    url: "https://cassidoo.co/",
  },
  {
    title: "Chris Coyier",
    url: "https://chriscoyier.net/",
  },
  {
    title: "Winnie Lim",
    url: "https://winnielim.org/",
  },
  {
    title: "Cory Dransfeldt",
    url: "https://coryd.dev/",
  },
];

const sortedBlogroll = blogroll.sort((a, b) => a.title.localeCompare(b.title));

module.exports = sortedBlogroll;
