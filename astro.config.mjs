// // @ts-check
// import { defineConfig } from 'astro/config';

// // https://astro.build/config
// export default defineConfig({});

// astro.config.mjs
import { defineConfig } from 'astro/config';

export default defineConfig({
    // --- DEPLOYMENT TARGET ---
    // "static" = pure HTML/CSS/JS output (no server needed, works on any host).
    // This is what makes the build portable — drop the /dist folder anywhere.
    output: 'static',

    // --- BASE PATH ---
    // Leave as '/' for root hosting (Netlify, Vercel, GitHub Pages with custom domain).
    // Change to '/your-subfolder/' if hosting in a sub-directory
    //   e.g. base: '/dazzle-world/'  →  https://example.com/dazzle-world/
    // The Layout.astro reads import.meta.env.BASE_URL automatically, so all
    // asset paths and internal links update with a single change here.
    //base: '/',
    //base: '/dazzle/',

    site: 'https://irshad-infobahn.github.io',
    base: '/dazzle-world/',

    // --- BUILD OUTPUT ---
    // All built files go into /dist — copy this folder to any web server.
    build: {
        outDir: './dist',
        // Keep asset file names predictable (no content-hash suffix).
        // Remove the line below if you want cache-busting hashes on your assets.
        assets: 'assets',
    },

    // --- TRAILING SLASH ---
    // 'ignore'  → /about  and  /about/  both work (most forgiving for shared hosting)
    // 'always'  → redirect /about  → /about/
    // 'never'   → redirect /about/ → /about
    trailingSlash: 'ignore',
});
