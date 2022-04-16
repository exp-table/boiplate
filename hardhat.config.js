require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require('hardhat-docgen');

const {subtask} = require("hardhat/config");
const {TASK_COMPILE_SOLIDITY_GET_SOURCE_PATHS} = require("hardhat/builtin-tasks/task-names")

subtask(TASK_COMPILE_SOLIDITY_GET_SOURCE_PATHS)
  .setAction(async (_, __, runSuper) => {
    const paths = await runSuper();

    return paths.filter(p => !p.endsWith(".t.sol"));
});

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
 module.exports = {
  solidity: {
    version: "0.8.12",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000
      }
    }
  },
  paths: {
    sources: "./src",
    cache: 'hh-cache'
  }
};
