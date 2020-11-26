import { NotificationItem } from "../../types/types";

export function returnNotifyNew(notifications: NotificationItem[]) {
  let notifyNew = false;
  if (notifications.length === 0) {
    notifyNew = false;
  } else {
    for (let v = 0; v < notifications.length; v++) {
      if (notifications[v].viewed === false) {
        notifyNew = true;
        break;
      } else if (notifications[v].viewed === true) {
        notifyNew = false;
      }
    }
  }
  return notifyNew;
}
