module.exports = {
    ci: {
      "collect": {
      "url": ["https://developer.chrome.com/docs/lighthouse/performance/performance-scoring?hl=fr"],
      "numberOfRuns": 5
      },

      "assert": {
        "preset": "lighthouse:no-pwa"
      },
      "upload": {
        "target": "lhci",
        "serverBaseUrl": "http://localhost:9001/app/projects"
      },
      "headful": false
    }
  };

  // http://localhost:9001/app/projects