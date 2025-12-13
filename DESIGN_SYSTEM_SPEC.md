# ClickDee Design System Specification

## Overview
This document provides a comprehensive specification for the ClickDee design system, built with React, TypeScript, Tailwind CSS, TanStack Query, and Zustand. All components and design tokens are based on the Figma design system.

## Technology Stack
- **Framework**: React 18.2+ with TypeScript
- **Build Tool**: Vite 5.0+
- **Styling**: Tailwind CSS 3.3+
- **State Management**: Zustand 4.4+
- **Data Fetching**: TanStack Query 5.17+
- **Font**: Satoshi (Regular 400, Medium 500, Bold 700)

## Design Tokens

### Colors

#### Primary Colors
- **Primary 100**: `#F7FAFC` - Light background
- **Primary 200**: `#ECF1F9` - Secondary background
- **Primary 500**: `#0070FF` - Main brand color
- **Primary 600**: `#005ACC` - Darker brand color

#### Neutral Colors
- **Neutral 10**: `#FFFFFF` - White
- **Neutral 50**: `#FAFAFA` - Very light gray
- **Neutral 100**: `#F4F4F5` - Light gray background
- **Neutral 200**: `#E4E4E7` - Border color
- **Neutral 300**: `#D4D4D8` - Medium gray border
- **Neutral 500**: `#71717A` - Medium gray text
- **Neutral 800**: `#27272A` - Dark gray
- **Neutral 900**: `#18181B` - Darkest text

#### Success Colors
- **Success 100**: `#BBF7D0` - Light green background
- **Success 200**: `#14532D` - Dark green text

#### Error Colors
- **Error 100**: `#FECACA` - Light red background
- **Error 200**: `#DC2626` - Red text/error state

### Typography

#### Font Family
- **Primary**: Satoshi (Regular 400, Medium 500, Bold 700)
- **Fallback**: sans-serif

#### Font Sizes & Line Heights
All typography uses a line height of **130% (1.3)**:

| Variant | Size | Weight Options | Usage |
|---------|------|----------------|-------|
| Display | 48px | Medium (500), Bold (700) | Hero headings |
| H1 | 40px | Bold (700) | Main page headings |
| H2 | 32px | Medium (500), Bold (700) | Section headings |
| H3 | 24px | Medium (500), Bold (700) | Subsection headings |
| H4 | 20px | Medium (500) | Card titles |
| P | 16px | Medium (500), Bold (700) | Body text |
| S (Small) | 14px | Medium (500), Bold (700) | Small text, labels |
| XS (X-Small) | 13px | Medium (500) | Very small text |
| 2XS (2X-Small) | 12px | Medium (500) | Smallest text |

### Spacing
- **XS**: 4px
- **SM**: 8px
- **MD**: 16px
- **LG**: 24px
- **XL**: 32px
- **2XL**: 40px
- **3XL**: 48px

### Border Radius
- **Button**: 32px (fully rounded)
- **Input**: 10px
- **Card**: 20px
- **Label**: 24px (fully rounded)
- **Checkbox**: 6px

### Shadows
- **Card**: `0px 10px 25.2px 0px rgba(0,0,0,0.1)`
- **Card Light**: `0px 10px 16px 0px rgba(0,0,0,0.05)`
- **Popup**: `0px 10px 25px 0px rgba(0,0,0,0.1)`
- **Button**: `0px 0.682px 1.365px 0px rgba(16,24,40,0.05)`

## Components

### Typography Component
**Location**: `src/components/Typography`

**Props**:
- `variant`: 'display' | 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 's' | 'xs' | '2xs'
- `weight`: 'regular' | 'medium' | 'bold'
- `as`: HTML element to render (optional)
- `children`: React.ReactNode

**Usage**:
```tsx
<Typography variant="h1" weight="bold">Heading</Typography>
```

### Button Component
**Location**: `src/components/Button`

**Props**:
- `variant`: 'primary' | 'secondary' | 'outline'
- `icon`: React.ReactNode (optional)
- `iconPosition`: 'left' | 'right' (default: 'right')
- `disabled`: boolean
- Standard button HTML attributes

**Variants**:
- **Primary**: Blue background (#0070FF), white text
- **Secondary**: Light blue background (#ECF1F9), blue text (#0070FF)
- **Outline**: White background, dark border, dark text

**Usage**:
```tsx
<Button variant="primary" icon={<Icon />}>Get Leads Now</Button>
```

### Input Component
**Location**: `src/components/Input`

**Props**:
- `label`: string (optional)
- `state`: 'default' | 'typing' | 'filled' | 'error'
- `error`: string (optional, error message)
- `icon`: React.ReactNode (optional)
- `onChange`: (value: string) => void
- Standard input HTML attributes

**States**:
- **Default**: Light gray background (#FAFAFA), gray border
- **Typing**: White background, blue border (#0070FF), shows typing cursor "|"
- **Filled**: Light gray background, gray border, dark text
- **Error**: Light gray background, red border, error message below

**Usage**:
```tsx
<Input label="Email" state="typing" onChange={handleChange} />
```

### Logo Component
**Location**: `src/components/Logo`

**Props**:
- `width`: number (default: 173)
- `height`: number (default: 34)
- `className`: string (optional)

**Usage**:
```tsx
<Logo width={173} height={34} />
```

### Breadcrumbs Component
**Location**: `src/components/Breadcrumbs`

**Props**:
- `items`: Array of `{ label: string, href?: string, isActive?: boolean }`
- `separator`: 'slash' | 'chevron' | 'arrow' (default: 'chevron')

**Usage**:
```tsx
<Breadcrumbs
  items={[
    { label: 'Home', href: '#' },
    { label: 'Page', isActive: true }
  ]}
/>
```

### Checkbox Component
**Location**: `src/components/Checkbox`

**Props**:
- `label`: string (optional)
- `checked`: boolean
- `onChange`: (checked: boolean) => void
- Standard checkbox HTML attributes

**States**:
- **Unselected**: White background, gray border
- **Selected**: Light blue background (#E2ECFF), blue border (#0047FF), checkmark icon

**Usage**:
```tsx
<Checkbox label="Option" checked={isChecked} onChange={setIsChecked} />
```

### Progress Indicator Component
**Location**: `src/components/ProgressIndicator`

**Props**:
- `steps`: number (total number of steps)
- `currentStep`: number (current active step, 1-indexed)
- `className`: string (optional)

**Usage**:
```tsx
<ProgressIndicator steps={3} currentStep={1} />
```

### Tabs Component
**Location**: `src/components/Tabs`

**Props**:
- `items`: Array of `{ label: string, value: string, disabled?: boolean }`
- `defaultValue`: string (optional)
- `value`: string (controlled, optional)
- `onChange`: (value: string) => void (optional)

**Usage**:
```tsx
<Tabs
  items={[
    { label: 'Home Services', value: 'home' },
    { label: 'Insurance', value: 'insurance' }
  ]}
  value={activeTab}
  onChange={setActiveTab}
/>
```

### Label Component
**Location**: `src/components/Label`

**Props**:
- `variant`: 'default' | 'success' | 'error' | 'info'
- `children`: React.ReactNode
- `onClick`: () => void (optional)

**Variants**:
- **Default**: White background, gray border, gray text
- **Success**: Light green background, dark green text
- **Error**: Light red background, red text
- **Info**: Light blue background, blue text

**Usage**:
```tsx
<Label variant="default">Pest Control</Label>
```

### Accordion Component
**Location**: `src/components/Accordion`

**Props**:
- `items`: Array of `{ title: string, content: string, value: string }`
- `allowMultiple`: boolean (default: false)
- `defaultOpen`: string[] (optional, array of item values to open by default)

**Usage**:
```tsx
<Accordion
  items={[
    { value: '1', title: 'Question?', content: 'Answer...' }
  ]}
/>
```

### Card Component
**Location**: `src/components/Card`

**Props**:
- `variant`: 'default' | 'bordered' | 'elevated'
- `children`: React.ReactNode
- `onClick`: () => void (optional)

**Variants**:
- **Default**: White background, shadow
- **Bordered**: White background, gray border
- **Elevated**: White background, stronger shadow

**Usage**:
```tsx
<Card variant="elevated">
  <Typography variant="h4">Card Title</Typography>
</Card>
```

### Banner Component
**Location**: `src/components/Banner`

**Props**:
- `title`: string
- `description`: string
- `icon`: React.ReactNode (optional)
- `actionLabel`: string (optional, default: 'Contact Us')
- `onAction`: () => void (optional)
- `variant`: 'default' | 'gradient' (optional)

**Usage**:
```tsx
<Banner
  title="Title"
  description="Description"
  actionLabel="Contact Us"
  onAction={handleAction}
/>
```

### Avatar Component
**Location**: `src/components/Avatar`

**Props**:
- `src`: string (optional, image URL)
- `alt`: string (optional)
- `name`: string (optional, displays first letter if no image)
- `role`: string (optional, subtitle)
- `size`: 'sm' | 'md' | 'lg' (default: 'md')

**Sizes**:
- **sm**: 32px (w-8 h-8)
- **md**: 48px (w-12 h-12)
- **lg**: 64px (w-16 h-16)

**Usage**:
```tsx
<Avatar name="John Doe" role="Client" size="md" />
```

### Hovering Popup Component
**Location**: `src/components/HoveringPopup`

**Props**:
- `amount`: string (e.g., "$500")
- `worth`: string (e.g., "worth")
- `title`: string
- `subtitle`: string
- `icon`: React.ReactNode (optional)

**Usage**:
```tsx
<HoveringPopup
  amount="$500"
  worth="worth"
  title="Fire Damage leads in"
  subtitle="Colorado"
/>
```

## File Structure

```
src/
├── components/
│   ├── Typography/
│   ├── Button/
│   ├── Input/
│   ├── Logo/
│   ├── Breadcrumbs/
│   ├── Checkbox/
│   ├── ProgressIndicator/
│   ├── Tabs/
│   ├── Label/
│   ├── Accordion/
│   ├── Card/
│   ├── Banner/
│   ├── Avatar/
│   ├── HoveringPopup/
│   └── index.ts
├── design-system/
│   ├── tokens.ts
│   └── types.ts
├── store/
│   └── useStore.ts
├── App.tsx
├── main.tsx
└── index.css
```

## Usage Guidelines

### Importing Components
```tsx
import { Typography, Button, Input } from '@/components';
```

### Using Design Tokens
```tsx
import { colors, typography, spacing } from '@/design-system/tokens';
```

### State Management (Zustand)
```tsx
import { useStore } from '@/store/useStore';

const { theme, setTheme } = useStore();
```

### Data Fetching (TanStack Query)
```tsx
import { useQuery } from '@tanstack/react-query';

const { data, isLoading } = useQuery({
  queryKey: ['key'],
  queryFn: fetchData,
});
```

## Tailwind Configuration

All design tokens are configured in `tailwind.config.js`:
- Colors: `primary-*`, `neutral-*`, `success-*`, `error-*`
- Font sizes: `text-display`, `text-h1`, `text-h2`, etc.
- Font weights: `font-regular`, `font-medium`, `font-bold`
- Border radius: `rounded-button`, `rounded-input`, `rounded-card`, `rounded-label`

## Best Practices

1. **Always use Typography component** for text instead of raw HTML elements
2. **Use design tokens** from `tokens.ts` for consistency
3. **Follow component prop interfaces** for type safety
4. **Use Tailwind classes** that match design tokens
5. **Maintain accessibility** with proper ARIA labels and semantic HTML
6. **Optimize performance** with React.memo for expensive components
7. **Follow naming conventions**: PascalCase for components, camelCase for props

## Next Steps

When building new features:
1. Reference this spec for design tokens
2. Use existing components as building blocks
3. Follow the established patterns and file structure
4. Update this spec if new tokens or components are added
5. Maintain consistency with Figma designs

## Figma References

- Typography: https://www.figma.com/design/7rQbEks4NQ8kg2uPSDBuf7/Clikdee-Website?node-id=1-445&m=dev
- Colors: https://www.figma.com/design/7rQbEks4NQ8kg2uPSDBuf7/Clikdee-Website?node-id=1-4728&m=dev
- Components: https://www.figma.com/design/7rQbEks4NQ8kg2uPSDBuf7/Clikdee-Website?node-id=1-848&m=dev

