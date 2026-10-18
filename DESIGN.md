---
name: "Filip Koražija's portfolio"
description: "A personal developer workspace for browsing real projects."
colors:
  background: "#090b0f"
  surface: "#11151c"
  foreground: "#eceff4"
  muted: "#a0a9b8"
  accent: "#9cc5ff"
  line: "#292e38"
  selected: "#17202d"
  row-hover: "#131923"
  selected-hover: "#1b2637"
  snowfall: "#e9efff"
typography:
  display:
    fontFamily: "Fira Code, monospace"
    fontSize: "clamp(44px, 6.3vw, 96px)"
    fontWeight: 500
    lineHeight: 1.12
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Fira Code, monospace"
    fontSize: "38px"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Fira Code, monospace"
    fontSize: "23px"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Fira Code, monospace"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.8
  reading-headline:
    fontFamily: "Fira Code, monospace"
    fontSize: "clamp(38px, 4.2vw, 64px)"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "-0.03em"
  reading-lead:
    fontFamily: "Fira Code, monospace"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.9
  section-heading:
    fontFamily: "Fira Code, monospace"
    fontSize: "21px"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "-0.02em"
  project-body:
    fontFamily: "Fira Code, monospace"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.9
  label:
    fontFamily: "Fira Code, monospace"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.8
  metadata:
    fontFamily: "Fira Code, monospace"
    fontSize: "11px"
    fontWeight: 400
    lineHeight: 1.8
rounded:
  sharp: "0px"
spacing:
  inline-tight: "8px"
  inline: "12px"
  inset: "20px"
  group: "22px"
  navigation: "32px"
  workspace: "44px"
  section: "64px"
components:
  filter:
    backgroundColor: "transparent"
    textColor: "{colors.muted}"
    typography: "{typography.label}"
    padding: "8px 0"
  filter-selected:
    backgroundColor: "transparent"
    textColor: "{colors.foreground}"
    typography: "{typography.label}"
    padding: "8px 0"
  project-row:
    backgroundColor: "transparent"
    textColor: "{colors.foreground}"
    rounded: "{rounded.sharp}"
    padding: "18px 17px"
    width: "100%"
  project-row-selected:
    backgroundColor: "{colors.selected}"
    textColor: "{colors.accent}"
    rounded: "{rounded.sharp}"
    padding: "18px 17px"
    width: "100%"
  icon-button:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.sharp}"
    width: "44px"
    height: "44px"
  thumbnail:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.sharp}"
    padding: "0"
    width: "64px"
    height: "44px"
  snow-toggle:
    backgroundColor: "{colors.background}"
    textColor: "{colors.muted}"
    rounded: "{rounded.sharp}"
    padding: "7px 13px"
---

# Design System: Filip Koražija's portfolio

## Overview

**Creative North Star: "The Personal Developer Workspace"**

A quiet working surface built around Filip's actual projects. Fira Code, midnight charcoal, pale text, and cool blue selection carry the original portfolio identity. The tone is personal and practical; useful controls and genuine project imagery supply the character.

The interface is compact within groups and generous between subjects. Rectangular media, plain text navigation, and fine separators make the project index feel immediately usable. Snowfall is a restrained background layer with a visible user control, and starts off for reduced-motion preferences, with an explicit opt-in.

**Key Characteristics:**

- One monospace family across identity, reading, metadata, and controls.
- Flat charcoal surfaces with blue reserved for selection and interaction.
- Square media and rows with thin structural separators.
- Real project assets inspected through contained previews and a modal gallery.
- Direct project selection with an accessible, responsive index.

## Colors

The palette is a cool, near-black workspace with pale reading text and a restrained blue interaction signal. Frontmatter values are normative; CSS custom properties in `src/app/globals.css` supply the six core colors.

### Primary

- **Cool Selection Blue** (`accent`): selected project titles, focus outlines, active thumbnail borders, hover text, clipboard feedback, and native text selection.

### Neutral

- **Midnight Charcoal** (`background`): page, sticky header, snowfall control, and gallery shell.
- **Matte Panel** (`surface`): icon controls, thumbnail wells, mobile navigation, and missing-image fallback.
- **Pale Reading White** (`foreground`): headings, main links, and primary reading text.
- **Cool Secondary Gray** (`muted`): descriptions, project roles, utility labels, and inactive navigation.
- **Structural Slate** (`line`): section rules, list separators, and control borders.
- **Selected Slate** (`selected`): selected project row fill; **Hover Slate** (`row-hover`) and **Selected Hover Slate** (`selected-hover`) distinguish pointer states.
- **Snow White** (`snowfall`): the small background flakes only.

**The Selection Signal Rule.** Use blue to identify selection, focus, and interaction; keep ordinary reading text pale white or muted gray.

Project-specific image well colors belong to each project's data and are not global brand accents. Retain the assets' own colors rather than recoloring them to match the interface.

## Typography

**Display Font:** Fira Code, with monospace fallback.
**Body Font:** Fira Code, with monospace fallback.
**Label/Mono Font:** the same family, loaded through Next.js with Latin and Latin Extended subsets and `display: swap`.

**Character:** measured, technical, and personal. Scale and weight create hierarchy without introducing another typeface. Labels retain natural casing; the large name uses a tightened, single-line setting.

### Hierarchy

- **Display:** the frontmatter display role sets the name. At the phone breakpoint it becomes `clamp(28px, 8.3vw, 48px)` with `-0.025em` tracking.
- **Headline:** the frontmatter headline role describes About. Contact uses the same weight, line height, and tracking at (42px); phone sizes are (30px) and (34px) respectively.
- **Title:** the frontmatter title role describes inspector titles; phones use (22px). Project and skill section headings are (21px), with `-0.02em` tracking; the phone project heading is (18px).
- **Index titles:** regular weight (400), size (20px), line height (1.4), tracking (`-0.025em`); compact desktop uses (17px) and phones (13px).
- **Body:** the base role governs general reading. About paragraphs use line height (1.95), while its lead is (17px) at (1.75); phone paragraph and lead sizes are (13px) and (16px).
- **Project body:** the smaller reading role is capped at (72ch); About story width is capped at (70ch).
- **Label / metadata:** navigation and filters use the label role; image labels, roles, counters, and footer use the metadata role. Secondary project kind labels have line height (1.6); technology strings are (10px).

**The One Family Rule.** Keep identity, prose, and interface controls in Fira Code; build emphasis with scale, weight, color, and spacing.

## Layout

The centered container has a maximum width of (1280px), with (56px) gutters on each side. At widths up to (1000px), gutters become (32px); up to (640px), they become (20px). The sticky header is (64px) tall. Smooth anchor scrolling reserves (88px) above targets, reduced to (80px) on phones.

The wide hero puts the name and a (315px) introduction side by side with (40px) gap and (58px / 48px) vertical padding. Up to (1200px), it stacks with (22px) gap and (48px / 36px) padding. Phones use (18px) gap and (42px / 30px) padding.

The project workspace uses `minmax(260px, .36fr) minmax(0, 1fr)` with the workspace spacing token between index and inspector. Up to (1000px), the index is (230px) wide and the gap is (28px). Up to (640px), the workspace stacks: named project tabs scroll horizontally, then the inspector follows with (25px) gap. Selecting a project updates this inspector without a page jump.

Preview height is (285px), (340px) at widths from (1600px), (270px) in compact desktop, and (220px) on phones. Desktop thumbnails are (64px × 44px); phone thumbnails are (44px × 44px). The About grid uses a (340px) portrait column and (90px) gap, reducing to (260px) and (45px) in compact desktop. Phones stack the portrait and story; the portrait becomes (230px × 270px). Skill rows use a (165px) label column before stacking on phones. Contact changes from two columns (`.7fr 1fr`) to one.

Spacing is deliberately role-based rather than a universal mathematical scale. Dense inline and control gaps contrast with section padding in the (56px–94px) range. Preserve the header, toolbar, preview, and details alignment when adding work.

## Elevation & Depth

There are no box shadows, glowing panels, or backdrop blur in the implemented surface. Depth comes from tonal selection fills, a darker gallery backdrop (`#030508ed`), thin borders, and layer order. The main content sits over snowfall; the header, snowfall control, and modal remain above it. Media remains a flat rectangular surface.

**The Flat Surface Rule.** Use tonal fills and fine separators for grouping; keep project and media surfaces flat.

## Shapes

Interface surfaces and controls have sharp corners. Fine (1px) rules define lists and groups; a selected thumbnail uses a (2px) blue border. SVG line icons accompany actionable controls, including gallery expansion, closure, image navigation, and snowfall. Only the (1px–3px) snowfall particles are circular. The mobile menu uses two horizontal strokes.

## Components

### Text actions and filters

Actions feel like links in a workspace. Project links are underlined, transparent, and unfilled. Filters have no boxes; the pressed filter gets pale text and an underline offset of (7px). Hover turns text blue. Filter controls are at least (44px) high; project text actions become (44px) high on phones. Contact retains both a mail link and a Copy email action, with a reserved status line announcing success or failure.

### Navigation

The identity sits opposite Work, About, Contact, and GitHub. Section links are muted at rest, pale and underlined on hover or when marked `aria-current`. At the phone breakpoint, a (44px × 44px) button toggles a full-width matte menu immediately below the header. It exposes `aria-expanded`, closes on a link choice, and returns focus to the button on Escape. A keyboard-visible skip link precedes the header.

### Project index and inspector

The inventory opens on the full All collection of 35 entries, with an optional eight-project Selected view. Search and a native category selector precede the semantic tablist; desktop scrolling is bounded at 460px and the mobile index remains horizontal. Category changes and search use the full collection, and no matches show an explicit recovery action. Project stages, engineering notes, and grouped related work accompany the inspector. Placeholder artwork is visibly labeled and can be replaced independently from its project record.

The index is a semantic tablist. Selected rows use the selected fill and blue text; hover uses the two dedicated row fills. Each row is at least (86px) high on desktop, with a secondary project-kind label and a chevron. Phone tabs are outlined rectangular buttons at least (48px) high, with secondary labels and chevrons removed to preserve space.

Roving tab focus, arrow keys, Home, and End move selection. The linked tabpanel holds the registered image, role, supplied description, technology string, gallery action, and real external destinations. Filters announce how many projects remain, preserve the selected project when possible, and otherwise select the first result.

### Media and thumbnails

Large previews and gallery images use `object-fit: contain` so identity artwork, screenshots, and source-code images stay intact. Thumbnails alone use `cover`; unselected thumbnails sit at opacity (0.65), becoming fully opaque on hover or selection. The portrait uses `cover` with `object-position: center 30%`. Preserve supplied project assets and portrait; no generated imagery or decorative stock assets are introduced.

The initial PrismAC website image is prioritized. An image-load failure reveals a textual fallback with a link to the original asset. Project and thumbnail image changes reveal top-to-bottom with a (420ms) clipping animation and `cubic-bezier(.16,1,.3,1)` easing. Text remains stationary.

### Gallery

A native modal dialog keeps the sharp matte shell: maximum width (1180px), (16px) outer horizontal clearance, maximum height (94svh), and a fine slate border. Its padding is (20px), reducing to (12px) on phones. Image height is `min(65svh, 660px)`, becoming (55svh) on phones. Close, Previous, and Next use square icon controls; a tabular-number image counter announces changes.

The dialog locks background scrolling, uses native modal focus containment, accepts Escape or backdrop click to close, restores the previously focused control, and advances images with left/right arrows. Previous and Next are disabled and dimmed to opacity (0.35) when only one image exists.

### Snowfall and interaction states

Snowfall renders (30) low-opacity flakes behind content with durations from (18s–37s); phones hide every second flake. The bottom-right control exposes a pressed state and lets visitors pause or enable the effect. Reduced-motion preferences start snowfall off and remove other transition/animation effects, with immediate anchor scrolling. The enabled button reads Enable snow or Pause snow; a visitor can explicitly opt into snowfall even with reduced motion. Only the active snowfall particles override the global animation reset, and pausing removes them. Ordinary text and row transitions last (180ms).

All keyboard-operable elements receive a (2px) blue `:focus-visible` outline offset by (5px); project rows place the outline inside with offset (-3px). Gallery icon controls are (44px × 44px), gain a muted border on hover, and retain an explicit disabled state. The snowfall control preserves its border and turns blue on hover or focus.

## Do's and Don'ts

### Do:

- **Do** use blue for selection, focus, and interaction while preserving readable white and gray hierarchy.
- **Do** keep the project index and inspector directly connected, including keyboard selection and responsive tab orientation.
- **Do** show supplied project imagery intact in previews and galleries, with purposeful thumbnail and portrait cropping.
- **Do** retain visible keyboard focus, modal focus restoration, status announcements, and reduced-motion behavior.
- **Do** preserve the flat, square, monospace workspace when extending the interface.

### Don't:

- **Don't** replace the chosen dark monospace identity and restrained snowfall with an unrelated visual world.
- **Don't** turn project browsing into repeated rounded cards or add numbered sections and hero pills.
- **Don't** introduce invented project claims, dates, awards, or testimonials as visual proof.
- **Don't** treat project artwork colors as global interface accents or recolor the supplied images.

Documentation evidence: PRODUCT.md, the selected surface contract, globals and component styles, rendered homepage components and project data, and the desktop, mobile, and user-width review captures. No alternate typeface, shadow system, input form, or animated scroll wrapper is inferred from unused files.

## AI reading page

The `/ai` route inherits the dark Fira Code world, shared header, snowfall control, and footer. Its reading structure uses a left-aligned 38–64px title, a muted introduction, four plain text sections, and a maximum 70ch body measure. The body uses the existing 14px reading style and 1.9 line height. Section titles remain 21px; spacing is 48px on desktop and 36px on phones. No decorative panels or additional visual effects are introduced. AI is a top-level navigation link with `aria-current="page"`; homepage section links resolve correctly from both routes.

The skills heading is followed by a muted, readable experience disclaimer. Twenty projects retain placeholder artwork. Eleven projects use 25 supplied images, alongside four retained original project records; the collection remains 35 entries. Supplied images stay intact, with labels identifying prototypes, development captures, and the two approved workplace design boards.

## Contact and identity update

The header home link displays the user-requested `[fk.]` mark while retaining its accessible full-name label. Discord is the first contact option, with the username `.astonic`, a Most active on Discord note, a copy action, and shared success/error feedback. Its handle uses the existing 23px title step and utility labels use 12px. Email, GitHub, and LinkedIn follow. Both LinkedIn destinations use the profile URL explicitly supplied by the user.

The project collection opens in All on every fresh page load, exposing the full 35-entry index immediately. Selected remains an optional curated view.
