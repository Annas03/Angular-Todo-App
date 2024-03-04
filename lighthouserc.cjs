module.exports = {
    ci: {
      collect: {
        startServerReadyPattern: 'Local', // This phrase prints out after preview server starts
        startServerCommand: 'npm run preview',
        url: 'https://ang-todotask.netlify.app/',
        numberOfRuns: 1,
      },
      upload: {
        target: 'lhci',
        serverBaseUrl: 'http://localhost:64399',
        token: 'fba0f17f-a347-46a5-87bd-1c01f492bb6e', // build token from lhci wizard
      },
    },
  }; 