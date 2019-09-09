import { NotificationManager } from "react-notifications";
 
const Notifiaction = (type, content, title) => {
    switch (type) {
    case "info":
        NotificationManager.info(content, title, 3000);
        break;
    case "success":
        if (content) {
            NotificationManager.success(content, title, 3000);
        }
        break;
    case "warning":
        NotificationManager.warning(content, title, 3000);
        break;
    case "error":
        NotificationManager.error(content, title, 3000);
        break;
    default:
    }
};

export default Notifiaction;
