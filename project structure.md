BraveLion Holdings/
├── public/                        # Static assets (favicon, manifest.json)
└── src/
    ├── assets/                    # Global images, icons, and videos
    │   ├── images/                # Hero images, offshore vessel photos
    │   └── icons/                 # SVG icons for services
    ├── components/                # Reusable UI components
    │   ├── common/                # Shared across all pages
    │   │   ├── Navbar/            # Shared Navbar (Home, About, Contact)
    │   │   └── Footer/            # Shared Footer (Home, About, Contact)
    │   └── features/              # ServiceCards, ContactForm, Testimonials
    ├── hooks/                     # Custom React hooks (e.g., useForm, useAuth)
    ├── pages/                     # Main route components
    │   ├── Home/
    │   │   └── Home.jsx
    │   ├── About/
    │   │   └── About.jsx
    │   ├── Contact/
    │   │   └── Contact.jsx
    │   ├── Estates/               # Has its own Navbar + Footer
    │   │   ├── Estates.jsx
    │   │   ├── components/
    │   │   │   ├── Navbar/        # Estates-specific Navbar
    │   │   │   └── Footer/        # Estates-specific Footer
    │   ├── Services/              # Has its own Navbar + Footer
    │   │   ├── Services.jsx
    │   │   ├── components/
    │   │   │   ├── Navbar/        # Services-specific Navbar
    │   │   │   └── Footer/        # Services-specific Footer
    │   └── Training/              # Has its own Navbar + Footer
    │       ├── Training.jsx
    │       ├── components/
    │       │   ├── Navbar/        # Training-specific Navbar
    │       │   └── Footer/        # Training-specific Footer
    ├── services/                  # API calls and external integrations
    ├── styles/                    # Global CSS or Tailwind configuration
    ├── utils/                     # Helper functions (formatting, validation)
    ├── App.jsx                    # Root component & routing (DefaultLayout / BareLayout)
    └── main.jsx                   # Entry point