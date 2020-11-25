import { FollowerItem } from "../../types/types";

export function modifyGlobalRoutes(followers: FollowerItem[]) {
  let modifiedRoutes = [];
  for (let i = 0; i < followers.length; i++) {
    modifiedRoutes.push({ userId: followers[i].followerId });
  }
  return modifiedRoutes;
}
