import { FollowingItem } from "../../types/types";

export function modifyGlobalRoutes(following: FollowingItem[]) {
  let globalRoutes = [];
  for (let i = 0; i < following.length; i++) {
    globalRoutes.push({ userId: following[i].userId });
  }
  return globalRoutes;
}
