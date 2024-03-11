module.exports = {
    ci: {
      collect: {
        startServerReadyPattern: 'Local', // This phrase prints out after preview server starts
        startServerCommand: 'npm run preview',
        url: process.env.AUDIT_URL,
        numberOfRuns: 1,
      },
      upload: {
        target: 'lhci',
        serverBaseUrl: process.env.LHCI_SERVER_URL,
        token: process.evn.LHCI_BUILD_TOKEN, // build token from lhci wizard
      },
    },
  }; 