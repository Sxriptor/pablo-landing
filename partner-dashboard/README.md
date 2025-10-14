# PlayCircle Partner Dashboard

A comprehensive partner management dashboard for PlayCircle venues and courts.

## Features

- **Dashboard Overview**: Real-time stats and analytics
- **Venue Management**: Create and manage venue locations
- **Court Management**: Configure courts with pricing and availability
- **Match Creation**: Schedule matches and tournaments
- **Event Management**: Host classes, clinics, and events
- **Analytics**: Performance insights and revenue tracking
- **Settings**: Partner profile and account management

## Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **UI Components**: Shadcn/UI, Radix UI, Tailwind CSS
- **Charts**: Recharts
- **Backend**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth with RLS

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Supabase project with the provided SQL schema

### Installation

1. Clone the repository and navigate to the partner dashboard:
   ```bash
   cd partner-dashboard
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env.local
   ```
   
   Update `.env.local` with your Supabase credentials:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. Run the database migrations:
   Execute the SQL files in the `/sql` directory in order:
   - `01_create_partners.sql`
   - `02_create_partner_applications.sql`
   - `03_create_venues.sql`
   - `04_create_courts.sql`
   - `05_create_matches.sql`
   - `06_create_events.sql`
   - `07_rls_policies.sql`

5. Start the development server:
   ```bash
   npm run dev
   ```

6. Open [http://localhost:3001](http://localhost:3001) in your browser.

## Database Schema

The partner dashboard uses the following main tables:

- **partners**: Core partner company information
- **partner_applications**: Partner registration requests
- **venues**: Physical locations managed by partners
- **courts**: Individual courts within venues
- **matches**: Partner-created matches and games
- **events**: Classes, clinics, and tournaments
- **match_participants**: Match registration tracking
- **event_registrations**: Event registration tracking

## Authentication & Authorization

- Partners must have an approved status to access the dashboard
- Row Level Security (RLS) ensures partners can only access their own data
- Authentication is handled through Supabase Auth

## Development

### Project Structure

```
partner-dashboard/
├── app/                    # Next.js app directory
│   ├── (auth)/            # Authentication pages
│   ├── (dashboard)/       # Protected dashboard pages
│   └── globals.css        # Global styles
├── components/            # Reusable components
│   ├── layout/           # Layout components
│   └── ui/               # UI components
├── lib/                  # Utilities and configurations
│   ├── types/           # TypeScript type definitions
│   ├── auth-utils.ts    # Authentication utilities
│   └── supabase.ts      # Supabase client
└── sql/                 # Database schema files
```

### Key Components

- **Navbar**: Top navigation with user menu and notifications
- **Sidebar**: Main navigation menu with collapsible design
- **StatCard**: Reusable metric display component
- **TableCard**: Data table with actions and pagination
- **ChartCard**: Analytics charts using Recharts

## Deployment

1. Build the application:
   ```bash
   npm run build
   ```

2. Start the production server:
   ```bash
   npm start
   ```

## Contributing

1. Follow the existing code style and patterns
2. Add proper TypeScript types for new features
3. Test authentication flows thoroughly
4. Ensure RLS policies are properly configured

## Support

For partner support or technical issues, contact the PlayCircle development team.