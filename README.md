# Livestock Accounting System v2

Professional UI prototype for livestock accounting.

## Added
- Animal Profile with history, purchase value, current value and value change
- Animal ID / Group ID with automatic ID suggestion
- Expense management: Tax/Canshuur, Feed/Raac, Transport, Veterinary, Labor, Other
- Expense breakdown
- Redesigned dashboard with financial snapshot and recent activity
- Settings: English/Somali, Dark Mode, Logout
- CSV export
- Print-to-PDF report (browser print dialog -> Save as PDF)
- JSON export and JSON import
- Responsive desktop/tablet/mobile UI
- Inline international-style iconography with no icon package dependency
- Updated Supabase/PostgreSQL schema with expense category

The prototype currently uses localStorage. Supabase integration is the next production step.

## v2.2 — Add Animal fix
- Fixed Add Animal button opening the correct bulk animal form.
- Removed stale single-animal dialog handler that referenced a missing field.
- Reduced dashboard/stat and header icon sizes for a cleaner UI.

## v2.3 — UI redesign (structure unchanged)
- Sidebar replaced by a bottom tab bar (floating pill on desktop, docked on mobile) with new line icons.
- Icons removed from the dashboard stat cards; cards joined into one ledger strip, Current Capital highlighted.
- New palette (field green + ear-tag yellow), Bricolage Grotesque / Public Sans type, flat panels, status pills.
- Capital fix: translated labels were wiping the Currency and Opening capital inputs (applyLang replaced the label's children). Inputs now survive, the form validates, confirms the save and shows the new current capital.
- Page title now follows the selected language; "Assets minus liabilities" relabelled "Cash plus livestock value".

## v2.4 — Settings: Data & Export fixed
- PDF: now a real downloadable .pdf file (no libraries) containing only the data: capital summary, profit & loss, animal movement, animals, transactions, expenses. No UI, inputs or code. Multi-page with page numbers.
- CSV: animals + transactions + summary in one Excel-friendly file (UTF-8 BOM, formula-injection safe).
- JSON: dated backup file with app name, version and export time.
- Import JSON: validates and cleans the file, asks before replacing data, shows the result in Settings, works for the same file twice, and no longer lets imported text run as HTML.

## v2.5 — PDF picker, place/date/day, edit/delete, PIN
- Settings > Download PDF opens a picker: include Summary / Animals / Movement / Expenses, date range (From, To), movement type, "Bought from" place and user. Live count shows what will be included; filtered PDFs show the filters and totals.
- Add Animal: Purchase date (weekday shown, e.g. Sunday) and "Bought from" place. Every row has its own place and date, so a group can be split between places/dates; defaults only fill rows you have not edited. Animals page can be filtered by place.
- Edit and delete (animals, activity records, expenses). Editing an animal also updates its purchase record; deleting an animal removes its related records.
- PIN (Settings > Security): required for every delete and every import (created on first use; 4-8 digits, stored as a salted PBKDF2 hash, 5 wrong tries lock for 60 s). This is a guard inside this browser, not server-side security.
- "Your name" (Settings > Security) is saved on each record as "By" and can be used as a PDF filter.
- Fix: the X button in the Add Animal dialog used to submit the form and save animals.

## v2.6 — Smarty System look
- New palette matching Smarty System: deep navy + Smarty green, blue/orange/purple accents, light and dark themes.
- Plus Jakarta Sans typography; rounded cards, soft shadows, gradient buttons, sticky blurred top bar.
- Modern icons (Phosphor) replace the inline SVGs: tab bar, buttons, export tools, edit/delete rows, dialogs.
- Dashboard: navy hero with chart art, color-coded stat cards (Current Capital highlighted), colored bar chart.
- Floating bottom tab bar restyled (navy pill, green active state).
- Tables, status pills, dialogs, PIN and toast restyled. Structure, IDs and logic unchanged.

## App icon
- New icon: cattle head + growth badge on navy/green (icon.svg, favicon.svg/.ico, apple-touch-icon.png, icon-192/512.png, icon-maskable-512.png).
- Linked in index.html (favicon, Apple touch icon, manifest.webmanifest) and used as the top-bar logo.
