
# Chinese Hotpot is now an Amazon Storefront with Blog attached

This project is a storefront built with Vite and React, designed to curate Amazon products to help users experience authentic Chinese cuisine at home. It also includes a blog section where users can read about Chinese culture, restaurants, and personal experiences.

## Features

- Display of featured products with links to Amazon.
- Blog section for sharing posts about Chinese culture and cuisine.
- Dark mode support.
- Responsive design.

## Project Structure

```
.
├── public
│   └── data
│       └── featuredProducts.json
├── src
│   ├── components
│   │   ├── Hero.jsx
│   │   └── ProductCard.jsx
│   ├── pages
│   │   ├── Blog.jsx
│   │   ├── Home.jsx
│   │   └── Post.jsx
│   ├── posts
│   │   ├── 2024-07-15-getting-married-in-china.md
│   │   └── 2024-07-16-another-post.md
│   ├── utils
│   │   └── loadPosts.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── package.json
└── vite.config.js
```

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (version 6 or higher)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/amazon-storefront.git
   cd amazon-storefront
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

### Running the Development Server

To start the development server, run:
```bash
npm run dev
```
The application will be available at `http://localhost:5173`.

### Building for Production

To build the application for production, run:
```bash
npm run build
```
The production-ready files will be in the `dist` directory.

## Configuration

### Vite Configuration

The Vite configuration file (`vite.config.js`) includes polyfills and aliases to ensure compatibility with the browser environment:

```javascript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill';
import { NodeModulesPolyfillPlugin } from '@esbuild-plugins/node-modules-polyfill';

export default defineConfig({
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      buffer: 'buffer',
    },
    extensions: ['.js', '.jsx', '.md'],
  },
  assetsInclude: ['**/*.md'],
  optimizeDeps: {
    esbuildOptions: {
      define: {
        global: 'globalThis',
      },
      plugins: [
        NodeGlobalsPolyfillPlugin({
          buffer: true,
        }),
        NodeModulesPolyfillPlugin(),
      ],
    },
  },
});
```

## Blog Posts

Blog posts are written in Markdown and stored in the `src/posts` directory. Each post should follow the naming convention `YYYY-MM-DD-post-title.md` and include front matter for metadata:

```markdown
---
title: 'My Post Title'
date: '2024-07-16'
---

This is the content of the blog post. You can use **markdown** here.
```

## Future Improvements

- Implement server-side rendering (SSR) for better SEO and faster load times using a framework like Next.js.
- Enhance the product listing with more detailed information and user reviews.
- Add more interactive elements to the blog posts, such as comments and likes.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
