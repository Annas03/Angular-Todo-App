module.exports = {
    ci: {
      collect: {
        startServerReadyPattern: 'Compiled successfully', // This phrase prints out after preview server starts
        startServerCommand: 'npm run preview',
        url: process.env.AUDIT_URL,
        numberOfRuns: 1,
        settings: {
          preset: 'desktop',
        }
      },
      upload: {
        target: 'lhci',
        serverBaseUrl: process.env.LHCI_SERVER_BASE_URL,
        token: process.env.LHCI_SERVER_TOKEN, // build token from lhci wizard
      },
      assert: {
        assertions: {
          "categories:seo" : ["warn", {"minScore": 0.85}],
        }
      },
    },
  }; 