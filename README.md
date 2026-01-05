# ClickDee Design System

A comprehensive React TypeScript design system built with Vite, Tailwind CSS, TanStack Query, and Zustand. This project implements a complete design system based on Figma designs with all components, typography, colors, and UI elements.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

#### Frontend

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

#### Backend (Email Service)

The backend service handles form submissions and sends emails. See [backend/README.md](./backend/README.md) for detailed setup instructions.

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Copy environment variables template
cp .env.example .env

# Edit .env with your SMTP credentials

# Start development server
npm run dev

# Build for production
npm run build
npm start
```

**Note:** The frontend expects the backend to be running on `http://localhost:3001` by default. You can configure this using the `VITE_API_BASE_URL` environment variable.

## 📦 Tech Stack

### Frontend
- **React 18.2+** - UI library
- **TypeScript 5.2+** - Type safety
- **Vite 5.0+** - Build tool and dev server
- **Tailwind CSS 3.3+** - Utility-first CSS framework
- **TanStack Query 5.17+** - Data fetching and caching
- **Zustand 4.4+** - Lightweight state management

### Backend
- **Node.js 18+** - Runtime environment
- **Express.js** - Web framework
- **TypeScript** - Type safety
- **Nodemailer** - Email service
- **CORS** - Cross-origin resource sharing

## 🎨 Design System

### Components

All components are located in `src/components/`:

- **Typography** - Text components with consistent sizing and weights
- **Button** - Primary, secondary, and outline variants
- **Input** - Text input with typing, filled, and error states
- **Logo** - ClickDee logo component
- **Breadcrumbs** - Navigation breadcrumbs with multiple separator styles
- **Checkbox** - Checkbox with selected/unselected states
- **Progress Indicator** - Step progress indicator
- **Tabs** - Tab navigation component
- **Label** - Badge/label component with variants
- **Accordion** - Expandable accordion component
- **Card** - Card container with multiple variants
- **Banner** - Promotional banner component
- **Avatar** - User avatar with name and role
- **Hovering Popup** - Popup tooltip component

### Design Tokens

Design tokens are defined in `src/design-system/tokens.ts`:

- **Colors**: Primary, Neutral, Success, Error color scales
- **Typography**: Font sizes, weights, line heights
- **Spacing**: Consistent spacing scale
- **Border Radius**: Component border radius values
- **Shadows**: Elevation shadows

### Typography

Font: **Satoshi** (Regular 400, Medium 500, Bold 700)

Available variants:
- Display (48px)
- H1 (40px)
- H2 (32px)
- H3 (24px)
- H4 (20px)
- P (16px)
- S (14px)
- XS (13px)
- 2XS (12px)

All typography uses 130% line height (1.3).

### Colors

#### Primary
- Primary 100: `#F7FAFC`
- Primary 200: `#ECF1F9`
- Primary 500: `#0070FF` (Main brand color)
- Primary 600: `#005ACC`

#### Neutrals
- Neutral 10: `#FFFFFF`
- Neutral 50: `#FAFAFA`
- Neutral 100: `#F4F4F5`
- Neutral 200: `#E4E4E7`
- Neutral 300: `#D4D4D8`
- Neutral 500: `#71717A`
- Neutral 800: `#27272A`
- Neutral 900: `#18181B`

#### Success & Error
- Success 100: `#BBF7D0`
- Success 200: `#14532D`
- Error 100: `#FECACA`
- Error 200: `#DC2626`

## 📁 Project Structure

```
clickdee-main/
├── src/
│   ├── components/          # All UI components
│   │   ├── Typography/
│   │   ├── Button/
│   │   ├── Input/
│   │   ├── Logo/
│   │   ├── Breadcrumbs/
│   │   ├── Checkbox/
│   │   ├── ProgressIndicator/
│   │   ├── Tabs/
│   │   ├── Label/
│   │   ├── Accordion/
│   │   ├── Card/
│   │   ├── Banner/
│   │   ├── Avatar/
│   │   ├── HoveringPopup/
│   │   └── index.ts
│   ├── modules/            # Feature modules
│   │   ├── affiliates/     # Affiliate program
│   │   ├── contact/        # Contact form
│   │   ├── services/       # Services pages
│   │   └── ...
│   ├── utils/              # Utility functions
│   │   └── api.ts          # API client functions
│   ├── design-system/      # Design tokens and types
│   │   ├── tokens.ts
│   │   └── types.ts
│   ├── store/              # Zustand stores
│   │   └── useStore.ts
│   ├── App.tsx             # Main app component
│   ├── main.tsx            # Entry point
│   └── index.css           # Global styles
├── backend/                # Backend email service
│   ├── src/
│   │   ├── services/
│   │   │   └── emailService.ts  # Reusable email service
│   │   ├── routes/
│   │   │   └── formRoutes.ts    # API routes
│   │   └── index.ts             # Express server
│   ├── package.json
│   ├── tsconfig.json
│   └── README.md
├── icons/                  # SVG icons
├── DESIGN_SYSTEM_SPEC.md   # Complete design system specification
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── vite.config.ts
```

## 🎯 Usage Examples

### Using Components

```tsx
import { Typography, Button, Input } from '@/components';

function MyComponent() {
  return (
    <div>
      <Typography variant="h1" weight="bold">
        Welcome
      </Typography>
      <Button variant="primary" onClick={handleClick}>
        Get Started
      </Button>
      <Input
        label="Email"
        state="typing"
        onChange={setEmail}
      />
    </div>
  );
}
```

### Using Design Tokens

```tsx
import { colors, typography, spacing } from '@/design-system/tokens';

// Use in styles
const style = {
  color: colors.primary[500],
  fontSize: typography.fontSize.h1,
  padding: spacing.lg,
};
```

### Using Zustand Store

```tsx
import { useStore } from '@/store/useStore';

function MyComponent() {
  const { theme, setTheme } = useStore();
  
  return (
    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      Toggle Theme
    </button>
  );
}
```

### Using TanStack Query

```tsx
import { useQuery } from '@tanstack/react-query';

function MyComponent() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
  });
  
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  
  return <div>{/* Render data */}</div>;
}
```

## 📚 Documentation

For complete documentation, see [DESIGN_SYSTEM_SPEC.md](./DESIGN_SYSTEM_SPEC.md)

## 🎨 Figma Design References

- **Typography**: [Figma Link](https://www.figma.com/design/7rQbEks4NQ8kg2uPSDBuf7/Clikdee-Website?node-id=1-445&m=dev)
- **Colors**: [Figma Link](https://www.figma.com/design/7rQbEks4NQ8kg2uPSDBuf7/Clikdee-Website?node-id=1-4728&m=dev)
- **Components**: [Figma Link](https://www.figma.com/design/7rQbEks4NQ8kg2uPSDBuf7/Clikdee-Website?node-id=1-848&m=dev)

## 🛠️ Development

### Code Style

- Use TypeScript for all components
- Follow React best practices
- Use Tailwind utility classes
- Maintain component prop interfaces
- Export components from index files

### Adding New Components

1. Create component folder in `src/components/`
2. Create component file with TypeScript interface
3. Export from `index.ts` in component folder
4. Add to `src/components/index.ts`
5. Update `DESIGN_SYSTEM_SPEC.md` if needed

## 📝 License

This project is proprietary and confidential.

## 🤝 Contributing

Follow the design system specification and maintain consistency with existing components.

