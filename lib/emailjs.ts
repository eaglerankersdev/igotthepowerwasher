// Drop-in for @emailjs/browser used by the original forms.
// By default the clone does NOT deliver submissions to the original business's
// EmailJS account; it resolves like a successful send so the UI behaves the same.
// Set NEXT_PUBLIC_EMAILJS_ENABLED=true to send for real with the IDs passed by the form.
import * as real from "@emailjs/browser";

const enabled = process.env.NEXT_PUBLIC_EMAILJS_ENABLED === "true";
const fake = (label: string, args: unknown[]) => {
  if (typeof window !== "undefined") console.info(`[clone] emailjs.${label} not sent`, args);
  return new Promise<{ status: number; text: string }>((resolve) => setTimeout(() => resolve({ status: 200, text: "OK" }), 400));
};

export const init: typeof real.init = (...args) => (enabled ? real.init(...args) : undefined);
export const send: typeof real.send = (...args) => (enabled ? real.send(...args) : (fake("send", args) as ReturnType<typeof real.send>));
export const sendForm: typeof real.sendForm = (...args) => (enabled ? real.sendForm(...args) : (fake("sendForm", args) as ReturnType<typeof real.sendForm>));
const emailjs = { init, send, sendForm };
export default emailjs;
