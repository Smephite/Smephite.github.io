// ─────────────────────────────────────────────────────────────
//  SITE CONTENT — edit this file to update the website
// ─────────────────────────────────────────────────────────────

var SITE = {
  name: "Kai Berszin",
  tagline:
    "PhD researcher at ETH Zürich\n——————\ndesigning reliable RISC-V processors for space",
  location: "Zürich, Switzerland",

  // Set photo to a filename (e.g. "photo.jpg") to show a profile picture, or null for the placeholder
  photo: "pic.webp",

  social: {
    email: { user: "contact", domain: "kai.run" }, // assembled by JS; never appears in plain text in source
    linkedin: "https://www.linkedin.com/in/kaiberszin", // TODO: replace with your LinkedIn URL
    github: "https://github.com/Smephite",
    orcid: "0000-0002-6743-110X",
  },

  // Basic HTML is allowed here (e.g. <strong>)
  about: `I'm a <strong>PhD student at the Integrated Systems Laboratory (IIS), ETH Zürich</strong>,
working on heterogenous and embedded systems for space.
My work spans VLSI design, FPGA implementation, and on-board software — building computing systems
that operate reliably in the harshest environments, from deep-space radiation to ultra-tight power budgets.`,

  // ── Timeline ──────────────────────────────────────────────
  // type:    "work" | "education"
  // start:   display string, e.g. "Sep 2024"   (omit for single-date entries)
  // end:     display string, e.g. "Aug 2025", or null for "Present"
  // details: bullet points (plain text)

  timeline: [
    {
      type: "work",
      title: "PhD Candidate",
      org: "Integrated Systems Laboratory (IIS), ETH Zürich",
      start: "2026",
      end: null,
      details: ["PhD Candidate at PULP (Parallel Ultra-Low-Power) platform"],
    },
    {
      type: "work",
      title: "Technical Lead, SAGE Project",
      org: "ARIS — Akademische Raumfahrt Initiative Schweiz, Zürich",
      start: "Jan 2023",
      end: "Apr 2026",
      details: [
        "Developing a 3U CubeSat under ESA's Fly Your Satellite programme",
        "Co-leading a team of 80+ students",
        "Lead Engineer for ALICE — first ARIS hardware in space",
        "Representing the project at national and international conferences",
      ],
      links: [
        {
          label: "ALICE in Space",
          url: "https://aris-space.ch/alice-first-aris-technology-heading-to-space/",
        },
      ],
    },
    {
      type: "education",
      title: "MSc ETH in Electrical Engineering & Information Technology",
      org: "ETH Zürich",
      start: "Sep 2023",
      end: "Apr 2026",
      details: [
        "Focus: VLSI & Embedded Systems for Space; ML on energy-efficient embedded systems; SoC design with tightly coupled accelerators",
        "Master's thesis (IIS): Next Generation Space Processing Platform — Specification and Initial Prototype",
        "Semester project (IIS): On-Board Software for PULP on a Satellite",
      ],
    },
    {
      type: "work",
      title: "FPGA Engineering Intern",
      org: "Thales Alenia Space Switzerland — Zürich",
      start: "Sep 2024",
      end: "Aug 2025",
      details: [
        "Developed and verified FPGA IP blocks for ESA-funded space missions",
        "Industrial internship as part of the MSc programme",
      ],
    },
    {
      type: "work",
      title: "Teaching Assistant",
      org: "ETH Space, ETH Zürich",
      start: "Sep 2024",
      end: "Jan 2025",
      details: [
        "Supported the inaugural Master in Space Systems programme",
        "Designed exercises and a final project simulating a Venus mission with CanSats",
      ],
      links: [
        {
          label: "ETH News",
          url: "https://ethz.ch/de/news-und-veranstaltungen/eth-news/news/2025/02/eth-studierende-simulieren-venus-mission.html",
        },
      ],
    },
    {
      type: "work",
      title: "Smart Contract & Backend Developer",
      org: "Stellar Development Foundation — Remote",
      start: "Nov 2022",
      end: "Sep 2023",
      details: [
        "Built smart contract backend systems with Cloudflare Workers and Rust",
      ],
    },
    {
      type: "education",
      title: "BSc ETH in Electrical Engineering & Information Technology",
      org: "ETH Zürich",
      start: "Sep 2019",
      end: "Jul 2023",
      details: [
        "Focus: Embedded Systems, Control Systems, VLSI",
        "Bachelor's thesis (PBL): Future Generation of Highly Precise Real-Time Localization for Railway Applications",
      ],
      // links: jump to a publication (pub key must match the BibTeX cite key)
      //        or link to an external page (url)
      links: [{ label: "Publication", pub: "mikhaylov2023" }],
    },
    {
      type: "education",
      title: "Exchange Semester",
      org: "KTH Royal Institute of Technology — Stockholm, Sweden",
      start: "Feb 2022",
      end: "Jul 2022",
      details: [
        "Focus: Embedded Control Systems; Intercultural Communication for Management",
        "Test Engineer in the Function Testing group of the MIST student satellite project",
      ],
    },
  ],

  // ── Languages ─────────────────────────────────────────────
  // Publications are loaded from publicationsBib (publications.bib) at runtime

  //  languages: [
  //    { name: "German", level: "Native" },
  //    { name: "English", level: "C1 / C2" },
  //  ],
};
