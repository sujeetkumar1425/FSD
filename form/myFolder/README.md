# Employee Form (myFolder)

This folder contains a simple client-side employee form and a page to display stored data.

Files
- `form.html` — the form page (uses `form.css` and `form.js`).
- `form.css` — styling for the form and display page.
- `form.js` — client-side validation and localStorage wiring.
- `student.html` — reads stored data from localStorage and displays it.

How to run locally
1. From the project root run:

```powershell
python -m http.server 8000
# then open http://localhost:8000/myFolder/form.html
```

Notes
- Data is stored in the browser's localStorage under the key `employeeForm`.
- This is a client-only demo — no server-side persistence.
