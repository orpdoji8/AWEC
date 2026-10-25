// Temporary page copy. Replace only with verified or clearly identified provisional content.
export const homeContent = {
  metadata: {
    title: "American West Educational Center",
    description:
      "A structural introduction to American West Educational Center and future approved education content.",
  },
  hero: {
    eyebrow: "International education",
    title: "A place for learning, connection, and opportunity across borders.",
    description:
      "This website is being prepared to share approved information about American West Educational Center, international learning, cultural exchange, and overseas opportunities.",
  },
  introduction: {
    eyebrow: "Organization introduction",
    title: "A clear foundation for the organization’s story",
    description:
      "American West Educational Center will use this space to present approved organization information in a clear and accessible way.",
    body: "Details about the organization’s purpose, approach, and work will be added during the client-content phase.",
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
      "A temporary contact-page structure for American West Educational Center pending approved contact information.",
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
      { label: "Email", value: "Official email will be added after approval." },
      { label: "Phone", value: "Phone information will be published when confirmed." },
      { label: "Office location", value: "Location information will be added after approval." },
      { label: "WeChat or social channels", value: "Approved channel details will be added before launch." },
    ],
  },
  response: {
    title: "Response expectations",
    description:
      "Inquiry routing and response procedures will be confirmed before launch. No response time is currently promised.",
  },
} as const;
