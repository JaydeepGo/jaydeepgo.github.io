const { execSync } = require('child_process');

module.exports = {
  version: () => {
    return String(Date.now());
  },
  postcssWatch: () => {
    try {
      execSync('npx postcss src/css/main.css --o docs/css/main.css');
    } catch (error) {
      console.log(JSON.stringify(error));
    }
    return 'CSS BUILD';
  },
};
