"use client";

// The original forms call toast.success / toast.error but never mounted a container, so visitors
// got no confirmation after submitting. This mounts one: polite, auto-dismissing, above the action bar.
import { ToastContainer } from "react-toastify";

export default function Toasts() {
  return <ToastContainer position="top-center" autoClose={4500} newestOnTop closeOnClick pauseOnFocusLoss={false} theme="light" />;
}
