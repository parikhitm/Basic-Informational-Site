# Basic Informational Site

A simple Node.js website demonstrating basic routing and file serving capabilities. The project includes a homepage, about page, contact form, and custom 404 error handling.

## Features

- Static page serving
- Basic routing
- Custom 404 error page
- Responsive design
- Contact form interface
- Navigation menu on all pages

## Prerequisites

- Node.js (Latest LTS version recommended)

## Installation

1. Clone the repository:
```bash
git clone [your-repository-url]
```

2. Navigate to the project directory:
```bash
cd basic-informational-site
```

3. Install dependencies:
```bash
npm install
```

## Usage

1. Start the server:
```bash
node index.js
```

2. Open your browser and visit:
```
http://localhost:8080
```

The server will be running on port 8080 by default.

## Project Structure

```
basic-informational-site/
├── index.js          # Main server file
├── package.json      # Project configuration
├── index.html        # Homepage
├── about.html        # About page
├── contact-me.html   # Contact form page
└── 404.html          # Error page
```

## Routes

- `/` - Homepage
- `/about` - About page
- `/contact-me` - Contact form
- Any other route will serve the 404 error page

## Acknowledgments

- Built with Node.js
- Uses native http module for server implementation
- Simple and lightweight design