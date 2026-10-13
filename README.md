# Contact Form

An accessible, responsive contact form with client-side validation and a success toast. Built as a Frontend Mentor challenge.

## Languages used

- HTML
- CSS
- JavaScript

## Validation checks

- **First name, last name, message:** required, so empty or whitespace-only values show "This field is required"
- **Email address:** required, and must be a valid format (for example `name@example.com`)
- **Query type:** one option must be selected
- **Consent checkbox:** must be ticked before submitting
- **On a failed submit:** every error is shown and focus moves to the first invalid field
- **While fixing errors:** messages clear as the user corrects each field
- **On success:** the form resets and a "Message Sent!" toast appears for 5 seconds
