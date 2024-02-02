module.exports = {
    ci: {
      collect: {
      url: ['https://developer.chrome.com/docs/lighthouse/performance/performance-scoring?hl=fr'],
      numberOfRuns: 5
      },

      upload: {
        target: 'temporary-public-storage',
      },
    },
  };
