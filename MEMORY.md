# Nirvag Pro Web - Project Memory

## Overview
Nirvag Pro Web is a web application built using Next.js 16 (App Router) and React 19. It serves as an administrative and management portal with features like CRM, Project Management, and Workforce Management.

## Technology Stack
- **Framework:** Next.js 16 (App Router)
- **Library:** React 19 (Functional Components & Hooks)
- **Styling:** SCSS Modules (Strictly no Tailwind, styled-components, or inline styles)
- **UI Components:** Bootstrap 5, react-bootstrap
- **Data Grids:** AG Grid (`ag-grid-community`, `ag-grid-react`)
- **Charting:** Recharts
- **Icons & Animations:** lucide-react, AOS

## Architecture & Conventions
1. **Screen Component Pattern:**
   - Every page must have its own Screen Component inside `src/components/screens/`.
   - `src/app/[page]/page.js` files must ONLY import and render their respective Screen Component. No UI logic is allowed in `page.js`.
2. **Component Structure:**
   - Every component must have a `.js` file and a `.module.scss` file.
   - Max 200 lines per component. Larger components must be split.
3. **Styling Rules:**
   - Use SCSS Modules exclusively.
   - Global styles live in `src/styles/` (e.g., `globals.scss`, `_variables.scss`, `_mixins.scss`, `_media_queries.scss`).
   - Variables, mixins, and media queries are globally injected via `next.config.mjs`. Do not manually `@use` them.
   - Never hardcode media queries or standard variables (colors, spacing, etc.). Use predefined mixins like `@include respond-above(md)`.

## Implemented Modules & Features
- **CRM (`src/components/screens/crm/`)**
  - Clients, CreateClient, ClientDetails
  - Leads, LeadDetails
- **Projects (`src/components/screens/projects/`)**
  - CreateProject, ProjectDetails
- **Workforce (`src/components/screens/workforce/`)**
  - WorkforceDashboard, WorkforceReports
  - WorkersList, EmployeesList, ContractorsList, PaymentsList
  - CreateWorker, CreateEmployee, CreateContractor
  - AttendanceGrid
- **Core / Site**
  - Home, Login
  - Layout & Navigation

## Development Guidelines
- Follow absolute imports (e.g., `import Button from "@/components/ui/Button/Button";`).
- Store constants in `src/constants/constants.js`.
- Manage global state via `src/context/`.
- Use server components by default; use `"use client";` only when necessary.
