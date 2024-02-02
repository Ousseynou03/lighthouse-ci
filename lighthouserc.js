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

  // Use build token b8b30f34-917b-4c0f-bca7-47315172fbbc to add data.
  // Use admin token SqzDrNQHlozcX0I3NEYFlebKfzmtFxMzMQelyadU to manage data. KEEP THIS SECRET!
