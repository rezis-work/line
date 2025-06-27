# AI Code Generator

A Next.js 15 application that generates code using AI models like OpenAI and Claude, built with TypeScript, tRPC, and deployed on Vercel with Docker support.

## Features

- 🚀 Next.js 15 with App Router
- 🔥 TypeScript for type safety
- ⚡ tRPC for end-to-end typesafe APIs
- 🗄️ Prisma ORM with Neon serverless database
- 🤖 AI code generation with OpenAI and Claude
- 🐳 Dockerized for easy deployment
- ▲ Vercel deployment ready
- 📦 Data ingestion capabilities

## Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **API Layer**: tRPC
- **Database**: Prisma ORM + Neon (serverless Postgres)
- **AI Providers**: OpenAI, Claude
- **State Management**: TanStack Query
- **Deployment**: Vercel, Docker
- **Serialization**: Superjson

## Getting Started

### Prerequisites

- Node.js 18+
- Docker (optional)
- Vercel CLI (optional)
- OpenAI/Claude API keys
- Neon database connection string

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   ```env
   DATABASE_URL=your_neon_connection_string
   OPENAI_API_KEY=your_openai_key
   CLAUDE_API_KEY=your_claude_key
   ```
4. Run database migrations:
   ```bash
   npx prisma migrate dev
   ```
5. Start development server:
   ```bash
   npm run dev
   ```

### Database Setup

This project uses Prisma ORM with Neon's serverless Postgres. To set up:

1. Create a Neon account and database
2. Get your connection string
3. Add it to your `.env` file
4. Run migrations as shown above

### Deployment

#### Vercel

1. Connect your GitHub repository
2. Add all required environment variables
3. Deploy!

#### Docker

1. Build the image:
   ```bash
   docker build -t ai-code-generator .
   ```
2. Run the container:
   ```bash
   docker run -p 3000:3000 ai-code-generator
   ```
