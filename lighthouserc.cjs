module.exports = {
    ci: {
      collect: {
        // startServerReadyPattern: 'Compiled successfully', // This phrase prints out after preview server starts
        // startServerCommand: 'npm run preview',
        // url: process.env.AUDIT_URL,
        staticDistDir: 'dist/todo-app',
        numberOfRuns: 3,
        settings: {
          preset: 'desktop',
        }
      },
      settings: {
      output: ["json"] // Include "json" in the output array
  }
      // upload: {
      //   target: 'filesystem',
      //   outputDir: 'lhreports'
      //   // serverBaseUrl: process.env.LHCI_SERVER_BASE_URL,
      //   // token: process.env.LHCI_SERVER_TOKEN, // build token from lhci wizard
      // },
      // assert: {
      //   assertions: {
      //     "categories:seo" : ["warn", {"minScore": 0.85}],
      //   }
      // },
    },
  }; 