---
version: alpha
name: Midnight Systems Portfolio
description: A dark, cyan-lit portfolio for documenting practical software systems with technical clarity and quiet confidence.
colors:
  primary: "#34D7FF"
  primaryStrong: "#00B8F0"
  background: "#050912"
  backgroundSecondary: "#071426"
  surface: "#0D1A2E"
  surfaceStrong: "#0C1829"
  text: "#EEF8FF"
  textSoft: "#D8E8F2"
  textMuted: "#A8B7C8"
  border: "#2A4D63"
  inverseText: "#04111C"
typography:
  display:
    fontFamily: "Inter, Segoe UI, Roboto, Arial, sans-serif"
    fontSize: "7.5rem"
    fontWeight: 700
    lineHeight: 0.95
    letterSpacing: "0em"
  heading-xl:
    fontFamily: "Inter, Segoe UI, Roboto, Arial, sans-serif"
    fontSize: "3rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0.01em"
  heading-md:
    fontFamily: "Inter, Segoe UI, Roboto, Arial, sans-serif"
    fontSize: "1.35rem"
    fontWeight: 700
    lineHeight: 1.25
  body:
    fontFamily: "Inter, Segoe UI, Roboto, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: "Inter, Segoe UI, Roboto, Arial, sans-serif"
    fontSize: "0.78rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0.08em"
rounded:
  sm: "8px"
  md: "14px"
  lg: "24px"
  pill: "999px"
spacing:
  xs: "0.45rem"
  sm: "0.75rem"
  md: "1rem"
  lg: "2rem"
  section: "6rem"
components:
  primary-button:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.inverseText}"
    rounded: "{rounded.sm}"
    padding: "0.95rem 1.4rem"
  system-card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    rounded: "{rounded.md}"
    padding: "1.75rem"
  system-card-hover:
    backgroundColor: "{colors.surfaceStrong}"
    textColor: "{colors.textSoft}"
    rounded: "{rounded.md}"
  modal:
    backgroundColor: "{colors.surfaceStrong}"
    textColor: "{colors.text}"
    rounded: "{rounded.lg}"
  primary-button-hover:
    backgroundColor: "{colors.primaryStrong}"
    textColor: "{colors.inverseText}"
    rounded: "{rounded.sm}"
  page-canvas:
    backgroundColor: "{colors.backgroundSecondary}"
    textColor: "{colors.textMuted}"
  border-utility:
    backgroundColor: "{colors.border}"
    textColor: "{colors.text}"
---

## Overview

The portfolio is an original **midnight systems journal**: a dark technical canvas, cyan interaction light, restrained surfaces, and editorial explanations. It documents real work without pretending private systems are public products. The visual language should feel like an engineer's observatory rather than a generic SaaS landing page.

The primary page surface is **Decide / Learn**: visitors should quickly understand what Jing Kai builds, why the systems exist, and how the pieces relate. The Current Systems section adds an **Explore / Inspect** layer through compact cards and modal detail views.

## Colors

- **Background (`#050912`)** is the base midnight blue-black.
- **Secondary background (`#071426`)** creates depth behind sections and the masthead.
- **Cyan (`#34D7FF`)** is the single interaction accent for links, focus, buttons, active states, and system emphasis.
- **Strong cyan (`#00B8F0`)** is reserved for gradients and pressed/hover emphasis.
- **Text (`#EEF8FF`)** is used for headings and primary content.
- **Muted text (`#A8B7C8`)** is used for supporting explanations; it must remain readable against the dark background.
- **Borders** are cool blue, translucent in CSS, and used sparingly to define surfaces.

Do not introduce a rainbow accent system, purple tech gradients, or unrelated light cards. Per-system colors may appear only as low-intensity icon/status hints inside the existing midnight palette.

## Typography

Inter is the site's deliberate UI and editorial typeface. Use it consistently for headings, body copy, navigation, buttons, labels, and modal content. Avoid falling back to the original Start Bootstrap Roboto Slab/Montserrat pairing in new work. Display headings are large and left-aligned where possible; body copy stays around 1rem with generous line height. Small labels use uppercase text and tracking for navigation and metadata, not for paragraphs.

## Layout

Sections use generous vertical rhythm (`6rem` by default) and a centered content width. The masthead is left-aligned and image-backed; later sections alternate between dark surfaces and subtle translucent panels. Prefer asymmetry, clear hierarchy, and meaningful whitespace over identical three-column feature grids.

Current Systems uses a featured Command Center card followed by supporting service cards. Cards are entry points, not containers for every paragraph: a short summary, system role, technology tags, and a clear `Inspect system` action should be visible. Longer explanations belong in modals.

## Elevation & Depth

Depth comes from translucent navy surfaces, thin cyan-blue borders, backdrop blur in navigation, and restrained cyan glow on primary actions. Avoid heavy shadows and glassmorphism. A modal may use a stronger shadow because it is a focused inspection surface.

## Shapes

Cards use 14px radii, buttons and controls use 8px radii, and metadata tags use pill radii. Do not make every element pill-shaped. Close buttons and icon buttons must have a minimum 44px hit area and a visible keyboard focus state.

## Components

- **Navigation:** compact, uppercase, tracked Inter labels on a dark translucent bar. Active and hover states use cyan.
- **Section headings:** large Inter headings with muted explanatory subheadings.
- **Project cards:** image-first cards from the existing My Projects pattern, with hover reveal and modal expansion.
- **System cards:** dark technical cards with a small role label, system name, concise summary, tags, and an inspect affordance. The card text itself must follow the global Inter system.
- **System modals:** use the existing Bootstrap modal behavior and portfolio modal shell. Each modal contains a focused overview, architecture/constraints list, a visual snapshot panel, and privacy note. Keep the modal scannable; use short sections instead of a wall of prose.
- **Snapshot panels:** use authentic screenshots when available. If a screenshot is unavailable, use a clearly labelled interface/architecture preview rather than implying fabricated live data.

## Do's and Don'ts

- **Do** reuse existing tokens and the My Projects modal interaction model.
- **Do** keep private/local-first boundaries explicit.
- **Do** use cyan as the interaction signal, not decoration everywhere.
- **Do** make modal content useful on mobile and keyboard accessible.
- **Don't** use unstyled plain text blocks for system documentation.
- **Don't** invent public URLs, metrics, user counts, or live data.
- **Don't** expose credentials, private data, or internal infrastructure details.
- **Don't** use Roboto Slab or Montserrat for new Current Systems content when Inter is available.
