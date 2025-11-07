# FSD_

This repository contains a small front-end project for a student information form. It includes the HTML, CSS, and a sample student page.

Files of interest
- `myFolder/form.html` — the main HTML page containing the student information form.
- `myFolder/form.css` — styles used by the form.
- `myFolder/student.html` — a sample student page (could be used to display submitted data or as a template).

How to view locally
1. Open the `myFolder` folder in your file manager.
2. Double-click `form.html` (or `student.html`) to open in your default browser.

Or serve locally with a simple HTTP server (recommended if you plan to use fetch/JS later):

PowerShell (Windows):

```powershell
# from the project root
python -m http.server 8000
# then open http://localhost:8000/myFolder/form.html in your browser
```

What you can do next
- Add form validation (HTML5 attributes or JavaScript).
- Wire up a backend endpoint to POST form data and display it on `student.html`.
- Add accessibility improvements (labels, ARIA attributes) and responsive CSS.

Contact / Notes
- If this repo is linked to a GitHub assignment, ensure you push changes to your branch and open a PR if required.
