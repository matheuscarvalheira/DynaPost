
import { toast, ToastContent } from "react-toastify";

export function ToastError(message: string | unknown) {
  toast.error(message as ToastContent<unknown>, {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });
}