import { toast } from "react-toastify";

export default function notify(text, type) {
  if (type === "success") {
    toast.success(text);
  } else {
    toast.error(text);
  }
}
