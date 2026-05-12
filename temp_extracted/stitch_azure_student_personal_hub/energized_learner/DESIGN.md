---
name: Energized Learner
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#434656'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#747688'
  outline-variant: '#c4c5d9'
  surface-tint: '#104af0'
  primary: '#0040df'
  on-primary: '#ffffff'
  primary-container: '#2d5bff'
  on-primary-container: '#efefff'
  inverse-primary: '#b8c3ff'
  secondary: '#7b24dc'
  on-secondary: '#ffffff'
  secondary-container: '#9547f7'
  on-secondary-container: '#fffbff'
  tertiary: '#00623d'
  on-tertiary: '#ffffff'
  tertiary-container: '#007d4f'
  on-tertiary-container: '#bcffd5'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dde1ff'
  primary-fixed-dim: '#b8c3ff'
  on-primary-fixed: '#001355'
  on-primary-fixed-variant: '#0035bd'
  secondary-fixed: '#eddcff'
  secondary-fixed-dim: '#d8b9ff'
  on-secondary-fixed: '#290055'
  on-secondary-fixed-variant: '#6200bc'
  tertiary-fixed: '#50ffaf'
  tertiary-fixed-dim: '#00e293'
  on-tertiary-fixed: '#002111'
  on-tertiary-fixed-variant: '#005232'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  display-lg:
    fontFamily: Poppins
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Poppins
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Poppins
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  headline-md:
    fontFamily: Poppins
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Poppins
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Poppins
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-bold:
    fontFamily: Poppins
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
  label-sm:
    fontFamily: Poppins
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-padding: 32px
  gutter: 24px
  margin-mobile: 16px
  card-gap: 20px
---

## Brand & Style

The design system is built to transform the academic experience from a chore into a high-energy pursuit. It targets modern students who balance heavy workloads with a desire for aesthetic inspiration and clarity. The brand personality is **proactive, optimistic, and rhythmic**, utilizing a "vibrant-clean" aesthetic that sits at the intersection of Minimalism and Glassmorphism. 

The emotional goal is to evoke a "flow state" the moment the dashboard is opened. By moving away from heavy, academic navies toward an airy, light-filled environment punctuated by high-saturation accents, the UI acts as a digital stimulant. Surfaces are crisp and light, while interactive elements pulse with electric hues to guide the user’s eye toward their next goal.

## Colors

The palette is anchored by **Electric Blue** (#2D5BFF) for primary actions, signifying intelligence and reliability. **Bright Violet** (#9D50FF) serves as the secondary color, used for creative tasks and progress milestones, while **Mint Green** (#00F5A0) is reserved for success states, completed tasks, and "on-track" indicators. 

A stark white background ensures these energetic colors pop without causing visual fatigue. Neutral tones are kept cool (slate-leaning) to maintain the "fresh" feel. High contrast is mandatory; text must maintain a minimum 4.5:1 ratio against the vibrant accents. Subtle gradients between the primary and secondary colors can be used for high-impact areas like "Current Streak" or "Goal Achieved" banners.

## Typography

The design system exclusively utilizes **Poppins** to leverage its geometric purity and friendly, open counters. 

- **Headlines:** Use Bold (700) weights with slight negative letter-spacing to create a tight, punchy, and confident look.
- **Body Text:** Use Regular (400) for long-form reading, ensuring ample line-height to maintain a "light" and breathable feel.
- **Micro-copy:** Labels for tags and categories should use Semi-Bold (600) and uppercase styling to provide a clear hierarchy against body text.
- **Responsive Note:** On mobile devices, display and large headline sizes must scale down significantly to prevent awkward word breaks in narrow dashboard columns.

## Layout & Spacing

The design system employs a **12-column fluid grid** for desktop and a **4-column grid** for mobile. The layout philosophy is centered on "Card-Based Focus," where each dashboard module (Calendar, To-Do, Focus Timer) is encapsulated in a distinct container.

A generous 24px gutter creates "air" between modules, preventing the dashboard from feeling cluttered. Content should be logically grouped with consistent internal padding (32px for large cards, 16px for small widgets). For vertical rhythm, all elements follow an 8px base grid, ensuring that icons, text baselines, and buttons feel harmoniously aligned.

## Elevation & Depth

To achieve a modern, vibrant look, the design system utilizes **Colored Ambient Shadows** rather than traditional grey shadows. Surfaces are primarily pure white or slightly tinted neutral, elevated by diffused shadows that take on a subtle tint of the primary or secondary color (e.g., a 10% opacity Electric Blue shadow).

- **Level 0 (Background):** Flat White.
- **Level 1 (Cards):** Soft, wide-spread shadow (20px blur) with 5% opacity.
- **Level 2 (Interactive/Hover):** More defined shadow with increased saturation of the color tint (12% opacity) to signify lift.
- **Level 3 (Modals/Popovers):** Deep, dramatic shadows with a backdrop blur (Glassmorphism) of 12px on the underlying content to maintain focus.

Avoid heavy borders; use elevation and subtle changes in background tint to define boundaries.

## Shapes

The shape language is **distinctly rounded** to convey friendliness and safety. 
- **Standard Cards/Containers:** 1rem (16px) corner radius.
- **Large Action Buttons:** 1rem (16px) to match cards, or fully pill-shaped (100px) for prominent CTAs like "Start Study Session."
- **Input Fields & Small Widgets:** 0.5rem (8px) for a sharper but still approachable look.
- **Progress Bars:** Fully rounded ends (pill-shaped) to represent the fluid nature of learning progress.

## Components

- **Buttons:** Primary buttons use a gradient from Electric Blue to Bright Violet with white text. Use a "squishy" hover effect—a subtle scale-down (0.98) and increased shadow depth.
- **Chips & Tags:** Small, pill-shaped elements using high-contrast combinations (e.g., Mint Green background with dark slate text). Use these for subjects like "Math," "History," or "Urgent."
- **Cards:** Cards should feature a 2px top border in a vibrant accent color to categorize the card type at a glance.
- **Checkboxes:** When checked, the box should pop into a full Mint Green fill with a bouncy spring animation.
- **Input Fields:** Use a 2px bottom border that transforms into a gradient (Blue to Violet) when focused. 
- **Focus Timer Widget:** A large, circular progress ring using a gradient stroke. The center should display high-impact Display-style typography for the countdown.
- **Gamification Elements:** Incorporate "Badge" components—octagonal or star shapes with glowing shadows to celebrate task completion streaks.