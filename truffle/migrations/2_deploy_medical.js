const HealthManagement = artifacts.require("HealthManagement");

module.exports = function (deployer) {
  deployer.deploy(HealthManagement);
};
