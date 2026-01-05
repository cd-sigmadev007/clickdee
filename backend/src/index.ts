// IMPORTANT: Load environment variables FIRST, before any other imports
// that might use environment variables (like emailService)
import dotenv from 'dotenv';
import { resolve } from 'path';

// Load environment variables
// Try to load from backend/.env (when running from project root) or .env (when running from backend dir)
const envPath = resolve(process.cwd(), '.env');
const result = dotenv.config({ path: envPath });

if (result.error && !process.env.SMTP_USER) {
  // Try alternative path (from project root)
  const altPath = resolve(process.cwd(), 'backend', '.env');
  dotenv.config({ path: altPath });
  console.log('🔍 Tried loading .env from:', altPath);
} else {
  console.log('✅ Loaded .env from:', envPath);
}

// Debug: Log environment variables status
console.log('🔍 Environment variables status:');
console.log('   Current working directory:', process.cwd());
console.log('   SMTP_USER:', process.env.SMTP_USER ? `✅ Set (${process.env.SMTP_USER.substring(0, 15)}...)` : '❌ Missing');
console.log('   SMTP_PASS:', process.env.SMTP_PASS ? '✅ Set (hidden)' : '❌ Missing');
console.log('   RECIPIENT_EMAIL:', process.env.RECIPIENT_EMAIL ? `✅ Set (${process.env.RECIPIENT_EMAIL})` : '❌ Missing');

// Now import other modules AFTER environment variables are loaded
import express from 'express';
import cors from 'cors';
import formRoutes from './routes/formRoutes';

const app = express();
const PORT = process.env.PORT || 3001;
const CORS_ORIGIN = process.env.CORS_ORIGIN || 'http://localhost:5173';

// Middleware
app.use(cors({
  origin: CORS_ORIGIN,
  credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
  });
});

// API routes
app.use('/api/forms', formRoutes);

// Error handling middleware
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error('Unhandled error:', err);
  res.status(500).json({
    success: false,
    error: 'Internal server error',
  });
});

// Validate environment variables on startup
const requiredEnvVars = ['RECIPIENT_EMAIL', 'SMTP_USER', 'SMTP_PASS'];
const missingEnvVars = requiredEnvVars.filter(varName => !process.env[varName]);

if (missingEnvVars.length > 0) {
  console.warn('⚠️  Warning: Missing required environment variables:');
  missingEnvVars.forEach(varName => {
    console.warn(`   - ${varName}`);
  });
  console.warn('\n📝 Please create a .env file based on .env.example and configure the required variables.');
  console.warn('   The email service will not work until these are configured.\n');
}

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📧 Email service endpoint: http://localhost:${PORT}/api/forms`);
  console.log(`🔍 Health check: http://localhost:${PORT}/health`);
  
  if (missingEnvVars.length > 0) {
    console.log(`\n⚠️  Email service is not fully configured. Some features may not work.`);
  }
});

