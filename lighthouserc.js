module.exports = {
    ci: {
      collect: {

      url: ['https://developer.chrome.com/docs/lighthouse/performance/performance-scoring?hl=fr'],
      numberOfRuns: 5
      },
    /*  assert: {
        preset: 'lighthouse:recommended',
      },
      */
      upload: {
        target: 'lhci',
        'serverBaseUrl': 'http://localhost:9001'
      },
     // headful: false
    },
  }

  // https://web.dev/performance-scoring/

  // 2x2nL0EWez7:46842367:8QwFQRAJFbxFC
  // LHCI_GITHUB_APP_TOKEN

  // https://developer.chrome.com/docs/lighthouse/performance/performance-scoring?hl=fr