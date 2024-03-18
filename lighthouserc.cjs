module.exports = {
    ci: {
      collect: {
        staticDistDir: 'dist/todo-app',
        numberOfRuns: 3,
        settings: {
          preset: 'desktop',
        }
      },
      upload: {
        target: 'filesystem',
        outputDir: '/lhci'
      },
    },
  }; 