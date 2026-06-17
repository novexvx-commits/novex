// Vercel Serverless Function entry point
// Re-exports the Express app from the built API server artifact.
// Vercel auto-detects files in the /api directory as serverless functions.
// The Express app handles all routing internally under /api/* paths.
export { default } from '../artifacts/api-server/dist/handler.mjs';
