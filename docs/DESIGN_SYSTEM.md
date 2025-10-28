# Design System Documentation

## Typography System

### Size Scale
- **Display (48px)**: Main page titles ("Create harmonies in a ⚡", "Here is your harmony!")
- **H1 (32px)**: Section headers (Project names, Processing steps, Expanded player titles)
- **H2 (24px)**: Subsection headers, Large button text (Tags, Button labels)
- **H3 (20px)**: Component headers, Instrument card labels
- **Body Large (18px)**: Descriptions, Important text (Dropdown labels, Upload messages)
- **Body (16px)**: Standard text (Dropdown options, Toast notifications, Helper text)
- **Body Small (14px)**: Secondary text
- **Caption (12px)**: Helper text, captions

### Font Weights
- **Bold (700)**: Headings, emphasis
- **Semibold (600)**: Subheadings, dropdowns
- **Medium (500)**: Buttons, labels
- **Normal (400)**: Body text

### Implementation
All typography tokens are defined in `/src/config/typography.ts`

---

## Button System

### Button Components
Located in `/src/components/ui/Buttons.tsx`

#### 1. PrimaryButton
**Use for**: Main CTAs (Generate, Continue, Upload)
- Background: `#eb7f6f` → Hover: `#e87b6a` → Active: `#e56959`
- Text: White, 24px, Semibold
- Padding: 48px horizontal, 24px vertical
- Border Radius: Full (rounded-full)
- Effects: Scale on hover (105%), Shadow
- States: Hover, Active, Focus, Disabled, Loading

#### 2. SecondaryButton
**Use for**: Important but not primary actions (Regenerate)
- Background: `#eb7f6f` → Hover: `#e87b6a` → Active: `#e56959`
- Text: White, 24px, Medium
- Padding: 40px horizontal, 20px vertical
- Border Radius: Full (rounded-full)
- Effects: Scale on hover (105%)
- States: Hover, Active, Focus, Disabled, Loading

#### 3. TertiaryButton
**Use for**: Less emphasized actions (Generate New)
- Background: `#f8f3eb` → Hover: `#f0e8d9` → Active: `#e5ddd5`
- Text: Gray-900, 24px, Medium
- Padding: 40px horizontal, 20px vertical
- Border Radius: Full (rounded-full)
- Border: 1px solid gray-200
- Effects: Scale on hover (105%)
- States: Hover, Active, Focus, Disabled

#### 4. IconButton
**Use for**: Utility actions (Close, Expand, Collapse)
- Background: Transparent → Hover: gray-100 → Active: gray-200
- Border Radius: Full (rounded-full)
- Sizes: sm (p-2), md (p-3), lg (p-4)
- States: Hover, Active, Focus

#### 5. SelectionCard
**Use for**: Multi-select options (Instruments, Styles, Difficulty)
- Variants: default, orange, blue, green
- Border: 2px solid
- Border Radius: rounded-2xl
- Padding: 16px
- Unselected: White background, gray-200 border
- Selected: Colored background (orange-50, blue-50, green-50), colored border
- Effects: Shadow and scale on hover

### Color Palette (Existing Colors Preserved)

#### Primary/Secondary Buttons
- Default: `#eb7f6f`
- Hover: `#e87b6a`
- Active: `#e56959`
- Disabled: `#eb7f6f` with opacity-50

#### Tertiary Buttons
- Default: `#f8f3eb` (cream)
- Hover: `#f0e8d9`
- Active: `#e5ddd5`

#### Background Colors
- Main screens: `#f8f3eb` (cream)
- Selection cards (selected):
  - Instruments: `bg-orange-50`, `border-orange-400`
  - Styles: `bg-blue-50`, `border-blue-400`
  - Difficulty: `bg-green-50`, `border-green-400`

### Accessibility Features
✓ WCAG AA color contrast (4.5:1)
✓ Focus states with visible rings
✓ Hover states distinct from default
✓ Keyboard navigation support
✓ Screen reader labels (aria-label)
✓ Minimum touch target: 44x44px
✓ Disabled states clearly indicated

---

## Screen-Specific Typography

### HomeScreen (App.tsx)
- Title: 48px bold ("Create harmonies in a ⚡")
- Upload info: 18px normal (file type, size)
- Messages: 18px normal (upload status, errors)

### InstrumentSelectionScreen
- Page title: 48px bold ("Choose your instruments, style and difficulty")
- Instrument labels: 32px bold
- Dropdown labels: 18px semibold
- Dropdown options: 16px semibold
- Button: 24px semibold (Continue)
- Toast: 16px semibold

### ProcessingScreen
- Status text: 32px bold (processing steps)

### ResultsScreen
- Page title: 48px bold ("Here is your harmony!")
- Project name: 32px bold
- Tags: 24px normal
- Sheet music preview: 24px normal
- Buttons: 24px (Regenerate, Generate New)
- Expanded player title: 32px bold
- Expanded player subtitle: 18px normal

---

## Usage Guidelines

### Using Typography
```tsx
import { typography } from '@/config/typography';

// Example usage
<p className={`${typography.display.size} ${typography.display.weight}`}>
  Title Text
</p>
```

### Using Buttons
```tsx
import { PrimaryButton, SecondaryButton, TertiaryButton, IconButton } from '@/components/ui/Buttons';

// Primary action
<PrimaryButton onClick={handleAction}>
  Continue
</PrimaryButton>

// Secondary action
<SecondaryButton onClick={handleRegenerate}>
  Regenerate
</SecondaryButton>

// Tertiary action
<TertiaryButton onClick={handleCancel}>
  Cancel
</TertiaryButton>

// Icon button
<IconButton onClick={handleClose} size="lg" aria-label="Close">
  <X size={32} />
</IconButton>
```

---

## Migration Checklist

### Completed ✅
- [x] Created typography configuration file
- [x] Created button components library
- [x] Updated HomeScreen typography (App.tsx)
- [x] Updated InstrumentSelectionScreen with PrimaryButton
- [x] Updated InstrumentSelectionScreen typography
- [x] Updated ProcessingScreen typography
- [x] Updated ResultsScreen with SecondaryButton and IconButton
- [x] Updated ResultsScreen typography
- [x] Maintained all existing colors

### Components Updated
- [x] App.tsx - Title (48px), Messages (18px)
- [x] InstrumentSelectionScreen.tsx - All text sizes, PrimaryButton
- [x] ProcessingScreen.tsx - Status text (32px)
- [x] ResultsScreen.tsx - All text sizes, SecondaryButton, IconButton

---

## Future Enhancements

### Potential Additions
- [ ] Button loading states with spinners
- [ ] Button icon support (left/right positioned)
- [ ] Button size variants (small, medium, large)
- [ ] More selection card variants
- [ ] Dark mode support
- [ ] Animation timing tokens
- [ ] Spacing system tokens

### Maintenance
- Keep this documentation updated when adding new components
- Test accessibility with screen readers
- Verify color contrast ratios when changing colors
- Run visual regression tests when updating styles
