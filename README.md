# Contact Form

An accessible, responsive contact form with client-side validation and a success toast. Built as a Frontend Mentor challenge.

## Languages used

- **HTML5**: semantic markup, labels, `fieldset`/`legend` for the radio group
- **CSS3**: custom properties, Grid and Flexbox, responsive layout (mobile and desktop)
- **JavaScript (vanilla)**: form validation and the toast message

## Validation checks

- **First name, last name, message:** required, so empty or whitespace-only values show "This field is required"
- **Email address:** required, and must be a valid format (for example `name@example.com`)
- **Query type:** one option must be selected
- **Consent checkbox:** must be ticked before submitting
- **On a failed submit:** every error is shown and focus moves to the first invalid field
- **While fixing errors:** messages clear as the user corrects each field
- **On success:** the form resets and a "Message Sent!" toast appears for 5 seconds

## Accessibility

- Every input has a linked `<label>`, and errors are tied to fields with `aria-describedby` and `aria-invalid`
- The toast is a `role="status"` live region, so screen readers announce it
- Fully keyboard operable, with visible hover and focus states
- Respects `prefers-reduced-motion`

## Run it

Open `index.html` in your browser. No build step or dependencies needed.
