import type { NetworkId } from "@/utils/types";

type NetworkComponents = {
  home: string;
  profileSocial: string;
};

export const componentsByNetworkId: Record<
  NetworkId,
  NetworkComponents | undefined
> = {
  testnet: {
    home: "near-examples.testnet/widget/HelloNEAR",
    profileSocial: "aloin.testnet/widget/NearFollowButton",
  },

  mainnet: {
    home: "",
    profileSocial: "aloin.near/widget/ProfileSocial",
  },
};
