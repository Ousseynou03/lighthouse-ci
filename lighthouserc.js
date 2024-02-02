module.exports = {
    ci: {
      collect: {
         startServerCommand: 'npm run',
      //  url: ['https://web.dev/performance-scoring/']
      url: ['https://developer.chrome.com/docs/lighthouse/performance/performance-scoring?hl=fr'],
    //  numberOfRuns: 5
      },
      /*
      assert: {
        assertions: {
          'categories:performance': ['warn', {minScore: 1}],
          'categories:accessibility': ['error', {minScore: 1}]
        }
      },
      */
      upload: {
        target: 'temporary-public-storage',
      },
    },
  };

  // https://web.dev/performance-scoring/

  // 2x2nL0EWez7:46842367:8QwFQRAJFbxFC
  // LHCI_GITHUB_APP_TOKEN