# Design Tokens — LiftUp

Dieses Dokument definiert ausschließlich die technischen Foundation Tokens. Regeln
zur Erweiterung, Pflege und Governance befinden sich in
`Design_System_Governance.md`.

---

## 1. Color

Semantisch, kein Primitive-Layer.

| Token | Wert |
|---|---|
| `color-background-primary` | `#FAF7F2` |
| `color-background-secondary` | `#F3EEE6` |
| `color-surface-default` | `#FEFCF9` |
| `color-surface-elevated` | `#F6F1EA` |
| `color-surface-deep` | `#1F1E1C` |
| `color-border-default` | `#E4DCD0` |
| `color-border-divider` | `#ECE5DA` |
| `color-text-primary` | `#2A2825` |
| `color-text-secondary` | `#59564F` |
| `color-text-disabled` | `#A69E92` |
| `color-text-on-deep` | `#FAF7F2` |
| `color-accent-default` | `#2E4756` |
| `color-accent-hover` | `#243A47` |
| `color-accent-active` | `#1C2B3B` |
| `color-status-success` | `#3F6B4A` |
| `color-status-error` | `#A13D2E` |
| `color-focus-ring` | `#3E6C82` |
| `color-selection` | `#D7E0E4` |
| `color-overlay` | `rgba(28,25,21,0.55)` |

`color-text-on-deep` ist ein eigenständiges Token, kein Alias. Die Focus-Farbe wird
ausschließlich über `color-focus-ring` referenziert.

---

## 2. Typography

### 2.1 Font Family

| Token | Wert |
|---|---|
| `font-family-sans` | `"IBM Plex Sans", ui-sans-serif, system-ui, sans-serif` |
| `font-family-mono` | `"IBM Plex Mono", ui-monospace, monospace` |

### 2.2 Font Size (Primitive)

| Token | Wert |
|---|---|
| `text-xs` | 0.75rem / 12px |
| `text-sm` | 0.875rem / 14px |
| `text-base` | 1rem / 16px |
| `text-lg` | 1.125rem / 18px |
| `text-xl` | 1.25rem / 20px |
| `text-2xl` | 1.5rem / 24px |
| `text-3xl` | 1.875rem / 30px |
| `text-4xl` | 2.25rem / 36px |
| `text-5xl` | 3rem / 48px |

### 2.3 Font Weight (Primitive)

| Token | Wert |
|---|---|
| `font-weight-regular` | 400 |
| `font-weight-medium` | 500 |
| `font-weight-semibold` | 600 |
| `font-weight-bold` | 700 |

### 2.4 Leading (Primitive)

| Token | Wert |
|---|---|
| `leading-none` | 1 |
| `leading-tight` | 1.15 |
| `leading-snug` | 1.35 |
| `leading-normal` | 1.5 |
| `leading-relaxed` | 1.65 |

### 2.5 Tracking (Primitive)

| Token | Wert |
|---|---|
| `tracking-tight` | -0.02em |
| `tracking-normal` | 0 |
| `tracking-wide` | 0.02em |

### 2.6 Rollen (Semantic)

| Rolle | Family | Size | Weight | Leading | Tracking |
|---|---|---|---|---|---|
| `hero-display` | sans | `text-5xl` | bold | tight | tight |
| `heading-1` | sans | `text-4xl` | bold | tight | tight |
| `heading-2` | sans | `text-3xl` | semibold | tight | normal |
| `heading-3` | sans | `text-2xl` | semibold | snug | normal |
| `heading-4` | sans | `text-xl` | semibold | snug | normal |
| `body-lead` | sans | `text-lg` | regular | relaxed | normal |
| `body-default` | sans | `text-base` | regular | relaxed | normal |
| `ui-default` | sans | `text-sm` | medium | normal | normal |
| `navigation` | sans | `text-sm` | medium | normal | normal |
| `emphasis-quote` | sans italic | `text-base` | regular | relaxed | normal |
| `emphasis-founder` | sans italic | `text-lg` | medium | relaxed | normal |
| `numeric` | — (erbt Kontextgröße) | — | regular | — | normal |
| `table` | sans | `text-sm` | regular | normal | normal |
| `code` | mono | `text-sm` | regular | normal | normal |
| `caption` | sans | `text-xs` | regular | normal | normal |

`numeric` und `table` aktivieren zusätzlich das OpenType-Feature `tabular-nums`.
Rollen werden als Tailwind-v4-`@utility`-Klassen bzw. Figma Text Styles realisiert,
nicht als einzelne CSS-Variablen.

---

## 3. Spacing

### 3.1 Primitive

| Token | Wert |
|---|---|
| `space-0` | 0 |
| `space-1` | 0.25rem / 4px |
| `space-2` | 0.5rem / 8px |
| `space-3` | 0.75rem / 12px |
| `space-4` | 1rem / 16px |
| `space-5` | 1.25rem / 20px |
| `space-6` | 1.5rem / 24px |
| `space-8` | 2rem / 32px |
| `space-10` | 2.5rem / 40px |
| `space-12` | 3rem / 48px |
| `space-16` | 4rem / 64px |
| `space-20` | 5rem / 80px |
| `space-24` | 6rem / 96px |
| `space-32` | 8rem / 128px |
| `space-40` | 10rem / 160px |
| `space-48` | 12rem / 192px |

### 3.2 Semantic

| Token | Wert |
|---|---|
| `space-component-tight` | `space-2` (8px) |
| `space-component-default` | `space-4` (16px) |
| `space-stack-default` | `space-6` (24px) |
| `space-section-default` | `space-16` (64px) |
| `space-section-loose` | `space-24` (96px) |
| `space-breakout` | `space-40` (160px) |
| `space-page-margin-mobile` | `space-4` (16px) |
| `space-page-margin-desktop` | `space-12` (48px) |

---

## 4. Radius

| Token | Wert |
|---|---|
| `radius-default` | 0.5rem / 8px |
| `radius-full` | 9999px |

---

## 5. Border

| Token | Wert |
|---|---|
| `border-width-default` | 1px |
| `border-style-default` | solid |

Farbe wird ausschließlich aus `color-border-default` / `color-border-divider`
referenziert.

---

## 6. Motion

### 6.1 Duration (Primitive)

| Token | Wert |
|---|---|
| `duration-instant` | 100ms |
| `duration-fast` | 150ms |
| `duration-default` | 250ms |
| `duration-moderate` | 400ms |
| `duration-slow` | 600ms |

### 6.2 Easing (Primitive)

| Token | Wert |
|---|---|
| `ease-standard` | `cubic-bezier(0.4, 0, 0.2, 1)` |
| `ease-out` | `cubic-bezier(0, 0, 0.2, 1)` |
| `ease-in` | `cubic-bezier(0.4, 0, 1, 1)` |

### 6.3 Semantic

| Token | Zusammensetzung |
|---|---|
| `motion-hover` | `duration-fast` + `ease-standard` |
| `motion-state-change` | `duration-default` + `ease-standard` |
| `motion-entrance` | `duration-moderate`/`duration-slow` + `ease-out` |
| `motion-exit` | `duration-fast`/`duration-default` + `ease-in` |

---

## 7. Opacity

| Token | Wert |
|---|---|
| `opacity-overlay` | 0.55 |

---

## 8. Focus

| Token | Wert |
|---|---|
| `focus-ring-width` | 2px |
| `focus-ring-offset` | 2px |
| `focus-ring-style` | solid |

Farbe wird ausschließlich aus `color-focus-ring` referenziert.

---

## 9. Measure

| Token | Wert |
|---|---|
| `measure-default` | 65ch |

---

## 10. Container

| Token | Wert |
|---|---|
| `container-narrow` | 48rem / 768px |
| `container-standard` | 80rem / 1280px |
| `container-breakout` | 96rem / 1536px |
| `container-full` | 100% |

---

## 11. Grid

Kein eigener Token-Namespace. Grid besteht ausschließlich aus Verweisen auf bereits
bestehende Tokens sowie einer Nutzungskonvention:

- Spaltenraster: durchgängig `grid-cols-12` (Tailwind-Utility, konstant über alle
  Breakpoints).
- Gaps: ausschließlich aus der Spacing-Skala (Abschnitt 3).
- Margins: ausschließlich aus `space-page-margin-mobile` / `space-page-margin-desktop`
  (Abschnitt 3).

---

## 12. Breakpoints

| Token | Wert |
|---|---|
| `breakpoint-sm` | 40rem / 640px |
| `breakpoint-md` | 48rem / 768px |
| `breakpoint-lg` | 64rem / 1024px |
| `breakpoint-xl` | 80rem / 1280px |
| `breakpoint-2xl` | 96rem / 1536px |

---

## 13. Z-Index

| Token | Wert |
|---|---|
| `z-base` | 0 |
| `z-dropdown` | 10 |
| `z-sticky` | 20 |
| `z-fixed` | 30 |
| `z-overlay` | 40 |
| `z-modal` | 50 |
| `z-toast` | 60 |
| `z-tooltip` | 70 |

---

## 14. Component Tokens (reserviert)

Dritte Ebene, architektonisch reserviert, aktuell ohne Werte. Namensräume:
`button-*`, `card-*`, `nav-*`, `form-*`, `hero-*`, `section-*`. Referenz- und
Vererbungsregeln: siehe `Design_System_Governance.md`. Konkrete Architektur: siehe
`Component_Token_Architecture.md`.

---

## 15. Bewusst nicht enthalten

- **Shadow Tokens** — kein nachgewiesener Bedarf.
- **Icon Tokens** — Systemexistenz ungeklärt.
