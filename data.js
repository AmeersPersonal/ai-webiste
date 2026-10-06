// All site content lives here. Each job follows Google’s XYZ formula:
// Accomplished [X], as measured by [Y], by doing [Z].

export const profile = {
  "name": "Doughy Jon",
  "handle": "doughyjon@portfolio:~$",
  "trade": "Carpet & Flooring",
  "years": "10+",
  "location": "NY · India",
  "phone": "(676) 767-6767",
  "phoneHref": "tel:6767676767",
  "email": "[your@email.com]",
  "status": "Booking installs for Fall 2026",
  "bio": "Carpet installer with 10+ years of stretching, seaming and fitting floors across New York — from brownstone stair runners to 18,000 sq ft offices. Clean seams, tight edges, on schedule.",
  "skills": [
    "Stretch-in",
    "Glue-down",
    "Carpet tile",
    "Stair runners",
    "Seaming"
  ],
  "training": "OSHA 10 safety trained · Fully insured",
  "tools": "Power stretcher, knee kicker, seaming iron, wall trimmer, stair tools, laser measure",
  "contactBlurb": "Homes, offices, stairs, repairs — free measure and quote anywhere in NYC. Text is the fastest way to reach me."
};

export const filters = ["All","Residential","Commercial","Stairs","Repair"];

export const projects = [
  {
    "id": "brownstone-stair-runner",
    "title": "Brownstone Stair Runner",
    "category": "Stairs",
    "year": "2025",
    "featured": true,
    "xyz": "Restored a four-floor brownstone staircase with no visible seams, as measured by the owner’s final walkthrough sign-off, by hand-fitting a wool runner over 62 straight and winder treads.",
    "highlights": [
      {
        "value": "62",
        "label": "treads fitted"
      },
      {
        "value": "3 days",
        "label": "start to finish"
      }
    ],
    "metrics": [
      {
        "value": "62",
        "label": "treads & winders"
      },
      {
        "value": "0",
        "label": "visible seams"
      },
      {
        "value": "3 days",
        "label": "on site"
      }
    ],
    "stack": [
      "Wool runner",
      "Hollywood wrap",
      "Brass rods",
      "Stair tools"
    ],
    "why": "A Park Slope family bought a 120-year-old brownstone with a worn, patched runner and curved winder steps two other installers had refused to quote. They wanted it to look original — pattern lined up floor to floor.",
    "execution": [
      "Templated every winder tread in kraft paper before cutting a single inch of carpet.",
      "Matched the runner’s border pattern so it runs straight from the parlor floor to the top landing.",
      "Hollywood (upholstered) wrap on each nose, with hand-sewn joins hidden at the turns.",
      "Protected original oak edges and finished with brass stair rods the owners chose."
    ],
    "impact": "Signed off on the first walkthrough with no punch list. The owners referred two neighbors on the same block, both booked within the month."
  },
  {
    "id": "midtown-office-tile",
    "title": "Midtown Office Rollout",
    "category": "Commercial",
    "year": "2025",
    "featured": false,
    "xyz": "Installed 18,000 sq ft of carpet tile two days ahead of schedule, as measured against the general contractor’s timeline, by working nights in phased zones so the office never closed.",
    "highlights": [
      {
        "value": "18k",
        "label": "sq ft installed"
      },
      {
        "value": "2 days",
        "label": "ahead of schedule"
      }
    ],
    "metrics": [
      {
        "value": "18,000",
        "label": "sq ft of carpet tile"
      },
      {
        "value": "-2 days",
        "label": "vs GC schedule"
      },
      {
        "value": "0",
        "label": "workdays lost"
      }
    ],
    "stack": [
      "Carpet tile",
      "Pressure-sensitive adhesive",
      "Floor prep",
      "Night shifts"
    ],
    "why": "A 120-person office needed new flooring across a full floor but couldn’t shut down. The GC needed a crew who could move furniture, prep, lay and clean up before 7 a.m. every day.",
    "execution": [
      "Split the floor into eight zones and scheduled one per night with the facilities manager.",
      "Ground and patched old adhesive so tiles sat flat on a clean, level subfloor.",
      "Laid tiles quarter-turned with a pattern that hides wear in walkways.",
      "Lead a crew of four; furniture back in place and vacuumed before staff arrived."
    ],
    "impact": "Finished early with zero disruption to the business. The GC has since brought me onto three more commercial fit-outs."
  },
  {
    "id": "queens-basement",
    "title": "Basement Family Room",
    "category": "Residential",
    "year": "2024",
    "featured": false,
    "xyz": "Kept material waste under 5%, as measured by leftover square footage, by planning seams and roll direction on a scaled layout before ordering.",
    "highlights": [
      {
        "value": "<5%",
        "label": "material waste"
      },
      {
        "value": "1 day",
        "label": "install"
      }
    ],
    "metrics": [
      {
        "value": "<5%",
        "label": "waste (typical 15%)"
      },
      {
        "value": "850",
        "label": "sq ft"
      },
      {
        "value": "1 day",
        "label": "install"
      }
    ],
    "stack": [
      "Stretch-in",
      "Moisture barrier pad",
      "Seam planning",
      "Tack strip"
    ],
    "why": "A Queens homeowner was turning a damp, L-shaped basement into a family room on a tight budget. Every extra foot of carpet came out of her pocket.",
    "execution": [
      "Measured with a laser and drew a scaled layout to place seams away from traffic and light.",
      "Ordered exactly one roll cut, with pile running the same way across the whole room.",
      "Laid moisture-barrier pad over the concrete to stop musty smells coming through.",
      "Power-stretched the carpet so it stays tight for years, not months."
    ],
    "impact": "The homeowner paid for far less material than her other quotes. The room has stayed dry and wrinkle-free through two winters."
  },
  {
    "id": "hotel-corridor-restretch",
    "title": "Hotel Corridor Repair",
    "category": "Repair",
    "year": "2024",
    "featured": false,
    "xyz": "Removed ripples from 900 ft of hotel hallway with no callbacks in 12 months, as measured by the hotel’s maintenance log, by power-stretching and re-seaming instead of replacing.",
    "highlights": [
      {
        "value": "900 ft",
        "label": "of hallway"
      },
      {
        "value": "0",
        "label": "callbacks in 12 mo"
      }
    ],
    "metrics": [
      {
        "value": "900 ft",
        "label": "corridor restored"
      },
      {
        "value": "0",
        "label": "callbacks in a year"
      },
      {
        "value": "4 nights",
        "label": "floor by floor"
      }
    ],
    "stack": [
      "Power stretcher",
      "Seaming iron",
      "Re-seaming",
      "Trip-hazard repair"
    ],
    "why": "A Brooklyn hotel had ripples and split seams down four hallways — a trip hazard and a bad first impression. A full replacement quote was beyond their budget.",
    "execution": [
      "Inspected every run and found the carpet itself was sound; the original install was under-stretched.",
      "Pulled back, re-stretched with a power stretcher and re-set new tack strip where it had rotted.",
      "Cut out and re-seamed the split joins with hot-melt tape so they disappear.",
      "Worked overnight, one floor at a time, so no guest rooms were blocked."
    ],
    "impact": "The hotel kept its carpet and avoided a full replacement. Zero trip complaints since, and they now call me first for every floor issue."
  }
];

export const jobs = [
  {
    "id": "loom",
    "company": "Loomline Carpet & Flooring",
    "role": "Lead Carpet Installer",
    "dates": "2019 — Present",
    "place": "Queens, NY",
    "points": [
      "Lead a crew of 3–4 on residential and commercial installs across all five boroughs.",
      "Measure, estimate and plan seams on 150+ jobs a year; keep waste well under industry average.",
      "Train new installers on power-stretching, seaming and stair work."
    ]
  },
  {
    "id": "kings",
    "company": "Kings Floor Co.",
    "role": "Carpet Installer",
    "dates": "2015 — 2019",
    "place": "Brooklyn, NY",
    "points": [
      "Installed stretch-in and glue-down carpet in apartments, brownstones and retail spaces.",
      "Became the go-to installer for stairs, winders and custom runners.",
      "Handled floor prep: tear-out, subfloor patching and moisture barriers."
    ]
  },
  {
    "id": "app",
    "company": "Family flooring business",
    "role": "Apprentice Installer",
    "dates": "2013 — 2015",
    "place": "India",
    "points": [
      "Learned the trade hands-on: measuring, cutting, knee-kicking and finishing edges.",
      "Worked on homes, shops and wedding halls — fast turnarounds and high standards."
    ]
  }
];
