import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const INITIAL_OWNER = "0x794b0bBDeC606858A9AeA58463612C086b47AfAc";

const AWSCloudPractionerRewardModule = buildModule("AWSCloudPractionerRewardModule", (m) => {
  const initialOwner = m.getParameter("initialOwner", INITIAL_OWNER);

  const awsCloudPractionerReward = m.contract("AWSCloudPractionerReward", [initialOwner]);

  return { awsCloudPractionerReward };
});

export default AWSCloudPractionerRewardModule;
