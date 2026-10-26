// Homepage introduction adapted from the client-supplied outline, 2026-10-25.
export const homeContent = {
  metadata: {
    title: "American West Educational Center",
    description:
      "American West Educational Center connects the United States and China through education, cultural exchange, and international business activities.",
  },
  hero: {
    eyebrow: "International education",
    title: "A place for learning, connection, and opportunity across borders.",
    description:
      "Connecting the United States and China through education and cultural exchange. Discover student and educator exchanges, school visits, and opportunities to learn across cultures with American West Educational Center.",
  },
  introduction: {
    eyebrow: "Organization introduction",
    title: "Education without borders, growing together through culture.",
    description:
      "American West Educational Center (AWEC) brings together educational resources in the United States and supports educational and cultural exchange between China and the US.",
    body: "Guided by the belief in education without borders and growing together through culture, our work spans international learning, educational cooperation, and business and cultural exchange.",
  },
  focus: {
    eyebrow: "Areas of focus",
    title: "Prepared for reviewed educational content",
    description:
      "These broad categories show how future information can be organized without representing confirmed programs or services.",
    items: [
      {
        title: "International learning",
        description:
          "A future home for approved information about learning experiences with an international perspective.",
      },
      {
        title: "Cross-cultural exchange",
        description:
          "A prepared structure for reviewed material about connection and learning across cultures.",
      },
      {
        title: "Educational opportunity information",
        description:
          "A place to publish confirmed opportunity information once details have been reviewed.",
      },
    ],
  },
  operations: {
    eyebrow: "Business and Education",
    title: "Explore Business and Education",
    description:
      "Business and Education have separate sections for recovered information and future approved content.",
  },
  news: {
    eyebrow: "News & Activities",
    title: "Historical activities and future updates",
    description:
      "Explore source-backed historical activities recovered from the legacy website. Future dated news may be added alongside them.",
  },
  contact: {
    eyebrow: "Start a conversation",
    title: "A contact experience is being prepared",
    description:
      "Visit the Contact page to preview the inquiry structure. Official contact channels will be published after approval.",
  },
} as const;

// Adapted from the two client-supplied Chinese company profiles, reviewed 2026-10-25.
export const aboutContent = {
  metadata: {
    title: "About Us",
    description: "Learn about American West Educational Center, its US-China educational and cultural exchange work, and certificates of recognition.",
  },
  intro: {
    description: "Connecting people, schools, and ideas through education and cultural exchange between the United States and China.",
  },
  overview: {
    description: "American West Educational Center (AWEC) is a California-based organization focused on educational and cultural exchange between the United States and China. Its work brings together educational resources and international learning opportunities to support young people and mutual understanding.",
    body: "Alongside education, AWEC's work includes business visits, international exchange, trade cooperation, and support for participation in international exhibitions.",
  },
  mission: {
    statement: "Education without borders, growing together through culture.",
    description: "AWEC works to build connections between schools in China and the United States and create opportunities for students and educators to learn from one another. Its approach emphasizes cross-cultural understanding and a global outlook.",
  },
  activities: [
    { title: "Student and educator exchange", description: "School visits, student and teacher exchanges, and online and in-person learning connections between China and the United States." },
    { title: "Camps and study visits", description: "International summer and winter camps, study visits, and educational travel experiences." },
    { title: "Youth cultural exchange", description: "Visits to China involving language learning, history and culture, STEAM learning, and community activities." },
    { title: "Learning and dialogue", description: "Joint teaching activities, themed lectures, international education conferences, and seminars." },
  ],
  recognition: [
    { title: "American West Educational Center", date: "October 2018", description: "Certificate of Recognition from the California State Assembly for dedication and contributions to educational advancement.", src: "/images/about/recognition-awec-2018.jpg", width: 462, height: 582, alt: "California Legislature Assembly Certificate of Recognition presented to American West Educational Center, October 2018, signed by Assemblyman Phillip Chen." },
    { title: "Linda Liu", date: "August 2024", description: "Certificate of Recognition from the California State Assembly honoring Linda Liu, identified on the certificate as President of American West Educational Center, for community contributions and leadership in education.", src: "/images/about/recognition-linda-liu-2024.jpg", width: 461, height: 593, alt: "California Legislature Assembly Certificate of Recognition presented to Linda Liu, President of American West Educational Center, August 2024, signed by Assemblyman Phillip Chen." },
  ],
} as const;

export const contactContent = {
  metadata: {
    title: "Contact",
    description:
      "Contact American West Educational Center by email or phone, or find our office in City of Industry, California.",
  },
  intro: {
    eyebrow: "Contact",
    title: "Contact American West Educational Center",
    description:
      "Official contact details and inquiry procedures will be published after client approval. The form below is a non-functional Day 0 preview.",
  },
  form: {
    title: "Inquiry form preview",
    description:
      "This interface is provided for structural review only. It cannot send or store information.",
    status:
      "The inquiry form is disabled and will be activated only after delivery and privacy requirements are approved before launch.",
    categories: [
      "General inquiry",
      "Educational information",
      "Organization inquiry",
      "Other",
    ],
  },
  channels: {
    eyebrow: "Future contact information",
    title: "Official channels will be published after approval",
    description:
      "This area is structured for confirmed contact methods without displaying invented details.",
    items: [
      { label: "Email", value: "info@meixiedu.org", href: "mailto:info@meixiedu.org" },
      { label: "Phone", value: "626-677-1565", href: "tel:+16266771565" },
      { label: "Office location", value: "17528 Rowland Street, City of Industry, CA 91748", href: null },
      { label: "Website", value: "meixiedu.org", href: "https://meixiedu.org" },
    ],
  },
  response: {
    title: "Response expectations",
    description:
      "Inquiry routing and response procedures will be confirmed before launch. No response time is currently promised.",
  },
} as const;
