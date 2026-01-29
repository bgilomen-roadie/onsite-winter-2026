# Workshop Setup Guide

Follow these steps to get everything running before the workshop.

## Prerequisites

Make sure you have installed:

- **Ruby** 3.0 or higher
- **Rails** 7.0 or higher
- **PostgreSQL** 14 or higher
- **Node.js** 22.9.0 or higher
- **yarn** 1.22.22
- **Git** (for version control)
- **Code editor** (VS Code, Cursor, etc.)

### Check Your Versions

```bash
ruby --version    # Should be 3.0+
rails --version   # Should be 7.0+
psql --version    # Should be 14+
node --version    # Should be 22.9.0+
yarn --version     # Should be 1.22.22
```

## Step 1: Download the Workshop Materials

If you haven't already, download and extract the workshop files:

```bash
cd ~/Desktop  # or wherever you want the project
# Extract the workshop zip or clone the repo
```

## Step 2: Setup Rails API

### Navigate to Rails Directory

```bash
cd example-code/rails-api
```

### Install Dependencies

```bash
bundle install
```

If you don't have bundler:

```bash
gem install bundler
bundle install
```

### Configure PostgreSQL (if needed)

By default, the app connects to PostgreSQL on localhost with the default user. If you need custom credentials:

```bash
export POSTGRES_USER=your_username
export POSTGRES_PASSWORD=your_password
export POSTGRES_HOST=localhost
```

### Setup Database

```bash
rails db:create
rails db:migrate
rails db:seed
```

### Start the Server

```bash
rails server -p 3001
```

### Verify It's Working

Open your browser to `http://localhost:3001/api/books`

You should see JSON data with books:

```json
[
  {"id":1,"title":"The Pragmatic Programmer","author":"Hunt & Thomas","genre":"Technical","year":1999},
  ...
]
```

**Keep this server running during the workshop!**

## Step 3: Setup React App

### Install Dependencies

In a NEW terminal (keep Rails running):

```bash
cd example-code/react-app
npm install
```

This may take a few minutes.

### Start the Development Server

```bash
npm run dev
```

The app will run on `http://localhost:5173`

### Test the React App

Open your browser to `http://localhost:5173`

You should see the Book Library with a list of books!

**Keep this server running during the workshop!**

## Step 4: Open the Presentation

### Option 1: Direct File Open

```bash
cd presentation
open index.html
```

### Option 2: Simple HTTP Server

If the direct open doesn't work with Reveal.js:

```bash
cd presentation
python3 -m http.server 8000
```

Then open `http://localhost:8000` in your browser.

## Troubleshooting

### Rails API Issues

#### "Could not find gem 'rails'"

```bash
gem install rails
bundle install
```

#### PostgreSQL connection errors

```bash
# Make sure PostgreSQL is running
# macOS (Homebrew):
brew services start postgresql

# Ubuntu/Debian:
sudo systemctl start postgresql

# Check if you can connect:
psql -U postgres -c "SELECT 1"
```

#### Database errors

```bash
# Drop and recreate
rails db:drop db:create db:migrate db:seed
```

#### "Role 'postgres' does not exist"

```bash
# Create the postgres superuser
createuser -s postgres
```

#### Port 3001 already in use

```bash
# Find and kill the process
lsof -ti:3001 | xargs kill -9

# Or use a different port
rails server -p 3002
# Then update vite.config.ts in React app
```

### React App Issues

#### "Cannot find module 'react'"

```bash
rm -rf node_modules package-lock.json
npm install
```

#### API connection errors

1. Verify Rails is running on port 3001
2. Check the Rails console for CORS errors
3. Verify proxy settings in `vite.config.ts`

#### Port 5173 already in use

```bash
# Vite will automatically try the next available port
# Or specify a different port
npm run dev -- --port 5174
```

### Presentation Issues

#### Reveal.js not loading

Use the Python HTTP server method:

```bash
python3 -m http.server 8000
```

## Workshop Ready Checklist

Before starting the workshop, verify:

- [ ] Rails API running on port 3001
- [ ] React app running on port 5173
- [ ] Can see books in the React app
- [ ] Presentation opens correctly
- [ ] Code editor ready (VS Code, Cursor, etc.)

## During the Workshop

You'll have three things running:

1. **Rails API** - `http://localhost:3001` (terminal 1)
2. **React App** - `http://localhost:5173` (terminal 2)
3. **Presentation** - Open in browser

Keep terminals visible so you can see logs and errors!

## Next Steps

Once setup is complete:

1. Open the presentation in your browser
2. Follow along with the slides
3. Explore the demo steps in `/demo-steps`
4. Experiment with the code!

## Getting Help

If you run into issues:

1. Check the Rails/React logs in the terminals
2. Review the README files in each directory
3. Ask your workshop facilitator
4. Check the troubleshooting section above

Happy learning!
