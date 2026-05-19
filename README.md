# Dynamic Certification Laboratories LLC - Website

B2B marketing and lead-generation website for **Dynamic Certification Laboratories LLC (DCL)** - A VMC Group Company. Showcases seismic, wind, and vibration testing services, highlights accreditations, and collects qualified project inquiries.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 18, Vite 5, React Router v6, React-Bootstrap 5, Axios, React-Helmet-Async |
| Backend | Node.js, Express.js |
| Database | MongoDB, Mongoose |
| Styling | Bootstrap 5 + Custom CSS Variables |
| Tooling | ESLint, Prettier, Concurrently |

## Project Structure

```
dcl-website/
├── client/                    # React frontend (Vite)
│   ├── public/                # Static assets (favicon, etc.)
│   ├── src/
│   │   ├── api/               # Axios API client
│   │   ├── components/        # Reusable React components
│   │   ├── pages/             # Page-level components
│   │   ├── utils/             # Utilities (SEO, etc.)
│   │   ├── App.jsx            # Main app with routing
│   │   ├── main.jsx           # Entry point
│   │   └── index.css          # Global styles + CSS variables
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
├── server/                    # Express API backend
│   ├── src/
│   │   ├── models/            # Mongoose schemas
│   │   ├── routes/            # API route handlers
│   │   ├── middleware/        # Error handling, etc.
│   │   └── index.js           # Server entry point
│   └── package.json
├── .env.example               # Root environment variables template
├── .eslintrc.json
├── .prettierrc
├── package.json               # Root with concurrent dev script
└── README.md
```

## Prerequisites

- **Node.js** 18+ (LTS recommended)
- **npm** 9+ or **yarn** 1.22+
- **MongoDB** running locally or MongoDB Atlas connection string

## Quick Start

### 1. Clone & Install

```bash
cd dcl-website

# Install all dependencies (root + client + server)
npm run install:all
```

### 2. Configure Environment Variables

Copy the example files and update with your values:

```bash
# Server environment
cp server/.env.example server/.env

# Client environment
cp client/.env.example client/.env
```

**Server `.env` variables:**

| Variable | Description | Default |
|----------|-------------|---------|
| `PORT` | Server port | `5000` |
| `MONGODB_URI` | MongoDB connection string | `mongodb://localhost:27017/dcl_website` |
| `NODE_ENV` | Environment | `development` |
| `CORS_ORIGIN` | Allowed CORS origin | `http://localhost:3000` |

**Client `.env` variables:**

| Variable | Description | Default |
|----------|-------------|---------|
| `VITE_API_URL` | Backend API URL | `http://localhost:5000/api` |

### 3. Run Development Server

```bash
npm run dev
```

This starts both the client (Vite on `http://localhost:3000`) and server (Express on `http://localhost:5000`) concurrently.

### Individual Commands

```bash
# Start server only
npm run server

# Start client only
npm run client

# Build for production
npm run build

# Start production server
npm run start

# Run linter
npm run lint
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/health` | Server health check |
| `POST` | `/api/quotes` | Submit a new quote request |
| `GET` | `/api/quotes` | List all quote requests (admin) |

### Quote Request Payload

```json
{
  "name": "John Smith",
  "email": "john@company.com",
  "phone": "+1 (555) 123-4567",
  "company": "Acme Engineering Inc.",
  "equipmentType": "HVAC Rooftop Unit",
  "standard": "AC156",
  "timeline": "Short-term (1-3 months)",
  "message": "Need seismic qualification for product line..."
}
```

## Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero, service cards, trust badges, CTA |
| Services | `/services` | Detailed service descriptions with standards |
| About | `/about` | Company mission, capabilities, team, VMC Group |
| Resources | `/resources` | Code references, downloadable PDFs, case studies |
| Contact | `/contact` | Quote request form with validation |

## Design System

### Color Palette

| Token | Value | Usage |
|-------|-------|-------|
| `--primary-blue` | `#0A3D62` | Headers, navbar, footer |
| `--primary-blue-dark` | `#072A45` | Footer background, hero gradient |
| `--accent-blue` | `#1E90FF` | Buttons, links, active states |
| `--bg-white` | `#FFFFFF` | Page background |
| `--bg-light` | `#F8F9FA` | Section backgrounds |
| `--text-dark` | `#212529` | Body text |

### Typography

- **Font Family**: Inter (Google Fonts) + system fallbacks
- **Weights**: 300 (light), 400 (regular), 500 (medium), 600 (semibold), 700 (bold), 800 (extra bold)

## Deployment

### Frontend (Client)

```bash
npm run build
```

Output is in `client/dist/`. Deploy to:
- Vercel, Netlify, Cloudflare Pages, or any static host
- Ensure environment variable `VITE_API_URL` points to production API

### Backend (Server)

```bash
cd server
npm start
```

Deploy to:
- Heroku, Railway, Render, AWS EC2, or any Node.js host
- Set `MONGODB_URI` to production MongoDB (Atlas recommended)
- Set `CORS_ORIGIN` to production frontend URL
- Set `NODE_ENV=production`

### MongoDB

- **Development**: Local MongoDB instance
- **Production**: MongoDB Atlas (free tier available)

## Security Features

- Helmet.js for HTTP security headers
- CORS restricted to frontend origin
- Rate limiting (100 requests per 15 minutes)
- Input sanitization (HTML tag stripping)
- Mongoose schema validation
- Request body size limits (10kb)

## Customization

### Replace Placeholders

Search for these placeholders and replace with actual content:

- `[Office Address]` - Company address
- `[Street Address]`, `[City, State ZIP]` - Full address
- `[Name]` - Team member names
- `[VMC Group company description and website link]` - VMC Group info
- `[File Size]` - PDF file sizes
- Lab facility photos and team headshots
- VMC Group logo and company logo
- Certification badge images (IAS, ISO, NVLAP)

### Adding New Pages

1. Create component in `client/src/pages/`
2. Add route in `client/src/App.jsx`
3. Add nav link in `client/src/components/Navbar.jsx`
4. Add footer link in `client/src/components/Footer.jsx`

### Adding New API Endpoints

1. Create route handler in `server/src/routes/`
2. Create Mongoose model in `server/src/models/` (if needed)
3. Mount route in `server/src/index.js`

## License

&copy; 2026 Dynamic Certification Laboratories LLC. All rights reserved.
