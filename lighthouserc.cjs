module.exports = {
    ci: {
      collect: {
        startServerReadyPattern: 'Local', // This phrase prints out after preview server starts
        startServerCommand: 'npm run preview',
        url: 'http://localhost:3000',
        numberOfRuns: 1,
      },
      upload: {
        target: 'lhci',
        serverBaseUrl: 'https://lighthouse-server-production-8084.up.railway.app',
        token: '0ac98669-2c1f-4b1d-99c2-4acd8f163e45', // build token from lhci wizard
      },
    },
  }; 