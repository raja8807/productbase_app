# ProductBase Web

Next.js 16 (App Router) with React 19 application.

## Modules & Features

- **CRM**: Clients, Leads, ClientDetails, LeadDetails, CreateClient
- **Projects**: CreateProject, ProjectDetails
- **Workforce**: WorkforceDashboard, WorkforceReports, AttendanceGrid, WorkersList, EmployeesList, ContractorsList, PaymentsList, Create Worker/Employee/Contractor
- **Site / Core**: Home, Login, sample

## Key Libraries

- **UI & Styling**: Bootstrap 5, react-bootstrap, SASS (SCSS Modules)
- **Data & Visuals**: AG Grid (`ag-grid-community`, `ag-grid-react`), Recharts
- **Icons & Animations**: lucide-react, AOS

## Architecture & Rules

- Strict Screen Component pattern: all page logic and UI reside in `src/components/screens/`.
- `page.js` files should only import and render their corresponding screen component.
- SCSS Modules for all components (no Tailwind, styled-components, or inline styles).
- Global variables, mixins, and media queries are globally injected via `next.config.mjs` (no manual `@use` statements).
- Strictly use defined breakpoint mixins (`respond-above`, `respond-below`, `respond-between`) from `_media_queries.scss` instead of hardcoded `@media` queries.
- Refer to `AGENTS.md` for full AI Development Rules and constraints.

@AGENTS.md
