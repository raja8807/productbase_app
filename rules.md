# AI Development Rules

## Tech Stack

- Next.js 16 (App Router)
- JavaScript (Do NOT use TypeScript)
- SCSS Modules
- React Functional Components
- No Tailwind CSS
- No Styled Components
- No CSS-in-JS

---

# Project Structure

```
src
├── app
├── components
│   ├── common
│   ├── layout
│   ├── screens
│   └── ui
├── constants
│   └── constants.js
├── context
│   └── AppContext.js
└── styles
    ├── fonts.js
    ├── globals.scss
    └── scss
        ├── _variables.scss
        ├── _mixins.scss
        └── _media_queries.scss
```

---

# Screen Components

Every page must have its own Screen Component.

Never place page UI directly inside:

```
src/app/[page]/page.js
```

Instead use:

```
src/components/screens/
```

Example

```
src
├── app
│   └── about
│       └── page.js

└── components
    └── screens
        └── About
            ├── About.js
            ├── About.module.scss
            ├── sections
            │   ├── Hero
            │   │   ├── Hero.js
            │   │   └── Hero.module.scss
            │   ├── Features
            │   │   ├── Features.js
            │   │   └── Features.module.scss
            │   └── CTA
            │       ├── CTA.js
            │       └── CTA.module.scss
            └── components
                ├── Card
                │   ├── Card.js
                │   └── Card.module.scss
                └── FeatureItem
                    ├── FeatureItem.js
                    └── FeatureItem.module.scss
```

---

# page.js Rules

Each page should only import its screen.

Example

```javascript
import About from "@/components/screens/About/About";

export default function Page() {
  return <About />;
}
```

No UI should be written inside page.js.

---

# Component Rules

Every component must have

```
ComponentName.js

ComponentName.module.scss
```

Never share module.scss files.

Never place multiple components in one file.

---

# Component Size

Maximum component size:

```
200 lines
```

If a component exceeds 200 lines:

- Split into multiple smaller components.
- Move each into its own folder.
- Give every component its own SCSS Module.

Example

```
Products
├── Products.js
├── Products.module.scss
└── components
    ├── ProductCard
    ├── ProductFilters
    ├── ProductGrid
    └── ProductPagination
```

---

# Styling Rules

Only SCSS Modules.

Example

```
Button.js

Button.module.scss
```

No inline styling.

No styled-components.

No Tailwind.

No CSS-in-JS.

---

# Global Styling

Global styles only belong inside

```
src/styles
```

Contains

- globals.scss
- fonts.js
- scss/\_variables.scss
- scss/\_mixins.scss
- scss/\_media_queries.scss

---

# Variables

Only use variables defined inside

```
_variables.scss
```

Never hardcode

- colors
- spacing
- border radius
- shadows
- z-index values
- transitions

If a required variable does not exist,

STOP

and ask before adding a new variable.

---

# Mixins

Only use mixins from

```
_mixins.scss
```

Do not duplicate flex helpers.

Do not duplicate button styles.

Do not duplicate responsive utilities.

If a new mixin is required,

ask first.

---

# Responsive Design

Only use breakpoints defined inside

```
_media_queries.scss
```

Never hardcode media queries.

Example

```scss
@include mobile {
}

@include tablet {
}

@include desktop {
}
```

---

# Fonts

Fonts must only be loaded from

```
src/styles/fonts.js
```

Never import Google Fonts anywhere else.

---

# Constants

Hardcoded content belongs inside

```
src/constants/constants.js
```

Examples

- Navigation
- Features
- Services
- Testimonials
- FAQ
- Pricing
- Footer Links

Never hardcode large datasets inside components.

---

# Context

Global state belongs inside

```
src/context
```

Never create duplicate contexts.

---

# Imports

Always use absolute imports.

Example

```javascript
import Button from "@/components/ui/Button/Button";
```

Never use long relative imports like

```
../../../../../
```

---

# Naming Convention

Components

```
Header
Hero
About
Footer
Button
```

Files

```
Header.js
Header.module.scss
```

Folders

```
Header/
Hero/
Button/
```

Use PascalCase.

---

# JavaScript Rules

Use

- Functional Components
- Hooks

Do not use

- Class Components

---

# Next.js Rules

Use

- App Router
- Server Components by default

Only use

```
"use client";
```

when required.

---

# Performance

- Lazy load heavy components.
- Optimize images using next/image.
- Avoid unnecessary re-renders.
- Keep components focused.

---

# Code Quality

- Keep components small.
- Reuse components.
- Avoid duplicated logic.
- Extract repeated UI.
- Keep files organized.

---

# Before Generating Code

Always verify:

- Correct folder placement
- Component has its own SCSS Module
- Uses existing variables
- Uses existing mixins
- Uses existing media queries
- Page imports Screen Component
- Component is under 200 lines
- No hardcoded colors
- No Tailwind
- No TypeScript
- No inline styles

If any rule cannot be followed, ask before proceeding.
