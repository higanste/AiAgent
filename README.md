# Rtrvr - AI Agent for Web

A cloud-based AI agent that works across all websites. No login required, fully functional, and powered by OpenRouter API with free models.

## Features

- 🤖 **AI-Powered**: Advanced AI models for natural language understanding
- 🌐 **Works Everywhere**: Compatible with all websites
- 🔒 **No Login**: Fully cloud-based, no account required
- ⚡ **Fast & Responsive**: Built with Next.js and modern web technologies
- 🎨 **Beautiful UI**: Modern, animated interface with smooth transitions
- 🔌 **Browser Extension**: Microsoft Edge extension for enhanced functionality

## Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Backend**: Supabase
- **AI**: OpenRouter API (free models)
- **Deployment**: Vercel

## Environment Variables

Create a `.env.local` file with the following variables:

```env
NEXT_PUBLIC_OPENROUTER_API_KEY=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
NEXT_PUBLIC_SUPABASE_URL=https://pfhooryqziljvzyorbin.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBmaG9vcnlxemlsanZ6eW9yYmluIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI5ODM3ODcsImV4cCI6MjA3ODU1OTc4N30.psEdD7KsNQ8UDV_4_6EEJGuS0IQQ2eaE9H65De45hDU
NEXT_PUBLIC_SITE_URL=https://your-project.vercel.app
```

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd rtrvr-clone
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env.local` file with the environment variables above

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Deployment to Vercel

1. Push your code to GitHub
2. Import your repository in Vercel
3. Add the environment variables in Vercel project settings
4. Deploy!

### Environment Variables for Vercel

Add these in your Vercel project settings:

- `NEXT_PUBLIC_OPENROUTER_API_KEY`
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `NEXT_PUBLIC_SITE_URL` (your Vercel URL)

## Browser Extension

The Microsoft Edge extension is located in the `extension/` folder. See `extension/README.md` for installation instructions.

## Pages

- `/` - Main AI agent interface
- `/about` - About page
- `/extension` - Extension download and installation guide

## API Routes

- `/api/chat` - Chat endpoint for AI interactions

## License

MIT

