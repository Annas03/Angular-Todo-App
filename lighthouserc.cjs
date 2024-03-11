const { environment } = require('./src/environments/environment');
module.exports = {
    ci: {
      collect: {
        startServerReadyPattern: 'Local', // This phrase prints out after preview server starts
        startServerCommand: 'npm run preview',
        url: environment.auditURL,
        numberOfRuns: 1,
      },
      upload: {
        target: 'lhci',
        serverBaseUrl: environment.lhciServerURL,
        token: environment.lhciBuildToken, // build token from lhci wizard
      },
    },
  }; 