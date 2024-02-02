module.exports = {
    ci: {
      collect: {
         startServerCommand: 'npm run',
      //  url: ['https://web.dev/performance-scoring/']
      url: ['https://developer.chrome.com/docs/lighthouse/performance/performance-scoring?hl=fr'],
      numberOfRuns: 5
      },
      upload: {
        target: 'temporary-public-storage',
      },
    },
  };

  // https://web.dev/performance-scoring/