// recipe 1: Generating a LH report and saving it to temporary storage
module.exports = {
  ci: {
    collect: {
      startServerReadyPattern: "Compiled successfully", // This phrase prints out after preview server starts
      startServerCommand: "npm run preview",
      url: process.env.AUDIT_URL,
      numberOfRuns: 5,
      settings: {
        preset: "desktop",
      },
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
};

// recipe 2: Save LH report on LH server
// module.exports = {
//   ci: {
//     collect: {
//       startServerReadyPattern: "Compiled successfully",
//       startServerCommand: "npm run preview",
//       url: process.env.AUDIT_URL,
//       numberOfRuns: 5,
//       settings: {
//         preset: "desktop",
//       },
//     },
//     upload: {
//       target: "lhci",
//       serverBaseUrl: process.env.LHCI_SERVER_BASE_URL,
//       token: process.env.LHCI_SERVER_TOKEN,
//     },
//   },
// };


// recipe 3: Generated LH report asserted
// module.exports = {
//   ci: {
//     collect: {
//       startServerReadyPattern: "Compiled successfully",
//       startServerCommand: "npm run preview",
//       url: process.env.AUDIT_URL,
//       numberOfRuns: 5,
//       settings: {
//         preset: "desktop",
//       },
//     },
//     upload: {
//       target: "lhci",
//       serverBaseUrl: process.env.LHCI_SERVER_BASE_URL,
//       token: process.env.LHCI_SERVER_TOKEN,
//     },
//     assert: {
//       assertions: {
//         "categories:seo": ["warn", { minScore: 0.85 }],
//       },
//     },
//   },
// };