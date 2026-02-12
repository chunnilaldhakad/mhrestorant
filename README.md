# MH Restaurant Website

A modern, responsive restaurant website built with React, TypeScript, and Vite. This application showcases the restaurant's menu, daily meals, banquet services, and provides contact information with integrated WhatsApp communication.

## Features

- **Home Page** - Welcome and featured content
- **Menu** - Complete restaurant menu with categorized items
- **Daily Meals** - Current daily specials and offerings
- **Banquet Services** - Information and booking for special events
- **Contact Page** - Contact information and inquiry form
- **Responsive Design** - Mobile-friendly interface using Tailwind CSS
- **WhatsApp Integration** - Direct messaging button for customer inquiries
- **Modern UI Components** - Pre-built accessible components with shadcn/ui

## Tech Stack

- **Frontend Framework**: React 18+ with TypeScript
- **Build Tool**: Vite
- **Package Manager**: Bun
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Testing**: Vitest
- **Linting**: ESLint
- **Navigation**: React Router

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- Bun package manager ([install here](https://bun.sh))

### Installation

```bash
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to project directory
cd mhrestorant

# Install dependencies with Bun
bun install
```

### Development

```bash
# Start development server with hot reload
bun run dev
```

The application will be available at `http://localhost:5173` (or the next available port).

### Build

```bash
# Build for production
bun run build

# Preview production build locally
bun run preview
```

### Testing

```bash
# Run tests
bun run test
```

## Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Header.tsx          # Navigation header
│   │   ├── Footer.tsx          # Footer section
│   │   ├── Layout.tsx          # Main layout wrapper
│   │   └── WhatsAppButton.tsx  # WhatsApp messaging integration
│   ├── ui/                     # shadcn/ui components
│   └── NavLink.tsx             # Custom navigation link component
├── pages/
│   ├── Home.tsx                # Homepage
│   ├── Menu.tsx                # Full restaurant menu
│   ├── DailyMeal.tsx           # Daily specials/offerings
│   ├── Banquet.tsx             # Banquet services & events
│   ├── Contact.tsx             # Contact information & form
│   └── NotFound.tsx            # 404 page
├── hooks/
│   ├── use-mobile.tsx          # Responsive design hook
│   └── use-toast.ts            # Toast notification hook
├── lib/
│   └── utils.ts                # Utility functions
├── App.tsx                     # Main application component
├── App.css                     # Global styles
├── main.tsx                    # Application entry point
└── index.css                   # Base CSS styles
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `bun run dev` | Start development server |
| `bun run build` | Build for production |
| `bun run preview` | Preview production build |
| `bun run test` | Run test suite |
| `bun run lint` | Run ESLint to check code quality |

## Configuration Files

- **vite.config.ts** - Vite build configuration
- **tailwind.config.ts** - Tailwind CSS customization
- **tsconfig.json** - TypeScript configuration
- **vitest.config.ts** - Testing framework configuration
- **eslint.config.js** - Code linting rules
- **postcss.config.js** - PostCSS configuration for CSS processing

## Pages Overview

### Home
Main landing page featuring restaurant highlights and call-to-action elements.

### Menu
Comprehensive menu display with categorized food and beverage items.

### Daily Meal
Showcase of daily specials and rotating menu items.

### Banquet
Information about special event services, capacity, and reservation options.

### Contact
Contact details, location information, and customer inquiry form with WhatsApp integration.

## UI Components

The project includes a comprehensive set of reusable UI components from shadcn/ui:
- Buttons, Cards, Forms
- Dialogs, Modals, Toasts
- Tables, Tabs, Accordions
- Navigation menus and sidebars
- And many more...

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Create a feature branch (`git checkout -b feature/amazing-feature`)
2. Commit changes (`git commit -m 'Add amazing feature'`)
3. Push to branch (`git push origin feature/amazing-feature`)
4. Open a Pull Request

## License

This project is proprietary and confidential. All rights reserved.

## Support

For issues, questions, or feature requests, please contact the development team or use the WhatsApp integration on the website for customer inquiries.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
