const form = document.getElementById("contact-form");
const toast = document.getElementById("toast");
const toastTitle = document.getElementById("toast-title");
const toastText = document.getElementById("toast-text");
let toastTimer;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

// Each validator returns an error message or "" if valid.
const validators = {
  "first-name": (el) => el.value.trim() ? "" : "This field is required",
  "last-name":  (el) => el.value.trim() ? "" : "This field is required",
  email: (el) => {
    if (!el.value.trim()) return "This field is required";
    return EMAIL_RE.test(el.value.trim()) ? "" : "Please enter a valid email address";
  },
  message: (el) => el.value.trim() ? "" : "This field is required",
  consent: (el) => el.checked ? "" : "To submit this form, please consent to being contacted",
};

function setError(id, message) {
  const el = document.getElementById(id);
  const err = document.getElementById(`${id}-error`);
  err.textContent = message;
  if (message) el.setAttribute("aria-invalid", "true");
  else el.removeAttribute("aria-invalid");
}

function validateRadios() {
  const checked = form.querySelector('input[name="query"]:checked');
  const err = document.getElementById("query-error");
  err.textContent = checked ? "" : "Please select a query type";
  return !checked;
}

function validateAll() {
  let firstInvalid = null;
  for (const id of ["first-name", "last-name", "email"]) {
    const msg = validators[id](document.getElementById(id));
    setError(id, msg);
    if (msg && !firstInvalid) firstInvalid = document.getElementById(id);
  }
  if (validateRadios() && !firstInvalid) firstInvalid = document.getElementById("general");
  for (const id of ["message", "consent"]) {
    const msg = validators[id](document.getElementById(id));
    setError(id, msg);
    if (msg && !firstInvalid) firstInvalid = document.getElementById(id);
  }
  return firstInvalid;
}

// Clear / re-check a field's error as the user fixes it
form.addEventListener("input", (e) => {
  const id = e.target.id;
  if (validators[id] && e.target.getAttribute("aria-invalid") === "true") {
    setError(id, validators[id](e.target));
  }
});
form.addEventListener("change", (e) => {
  if (e.target.name === "query") validateRadios();
  if (e.target.id === "consent" && e.target.getAttribute("aria-invalid") === "true") {
    setError("consent", validators.consent(e.target));
  }
});

function showToast() {
  clearTimeout(toastTimer);
  toastTitle.textContent = "Message Sent!";
  toastText.textContent = "Thanks for completing the form. We'll be in touch soon!";
  toast.classList.add("show");
  toastTimer = setTimeout(() => toast.classList.remove("show"), 5000);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const firstInvalid = validateAll();
  if (firstInvalid) {
    firstInvalid.focus(); // moves keyboard + screen reader users to the first problem
    return;
  }
  form.reset();
  showToast();
});
