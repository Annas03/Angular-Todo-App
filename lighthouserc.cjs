module.exports = {
    ci: {
      collect: {
        startServerReadyPattern: 'Local', // This phrase prints out after preview server starts
        startServerCommand: 'npm run preview',
        url: 'https://ang-todotask.netlify.app',
        numberOfRuns: 1,
      },
      upload: {
        target: 'lhci',
        serverBaseUrl: 'http://localhost:9001',
        token: '859bb99f-85d0-44d0-9b89-a19b0f1fddcb', // build token from lhci wizard
      },
    },
  }; 