import { toast } from "react-toastify";

export const requiredToast = (
  errorId: string,
  ref: HTMLInputElement | HTMLTextAreaElement
) => {
  toast(`${ref?.placeholder ?? errorId} is required`, {
    type: "warning",
    position: "top-left",
    theme: "dark",
    autoClose: 2000,
    pauseOnFocusLoss: false,
    hideProgressBar: true,
    bodyClassName: "toast-font",
  });
};

export const alphaToast = () => {
  toast(`Please enter only alphabetical characters for your name.`, {
    type: "warning",
    position: "top-left",
    theme: "dark",
    autoClose: 2000,
    pauseOnFocusLoss: false,
    hideProgressBar: true,
    bodyClassName: "toast-font",
  });
};

export const emailPatternToast = () => {
  toast(
    `Must be gmail`,
    {
      type: "warning",
      position: "top-left",
      theme: "dark",
      autoClose: 2000,
      pauseOnFocusLoss: false,
      hideProgressBar: true,
      pauseOnHover: true,
      bodyClassName: "toast-font",
    }
  );
};

export const successToast = () => {
    toast(`SENT`, {
        icon: "👍",
        position: "top-center",
        theme: "dark",
        autoClose: 2000,
        pauseOnFocusLoss: false,
        hideProgressBar: true,
        bodyClassName: "toast-fontLarge",
    })
}