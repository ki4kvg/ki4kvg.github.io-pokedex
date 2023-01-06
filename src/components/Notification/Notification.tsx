import {notification} from "antd";
import {NotificationType} from "../../types/tsTypes";

export const openNotification = (message: string, description: string, type: NotificationType) => {
    notification[type]({
        message: message,
        description: description,
    });
};