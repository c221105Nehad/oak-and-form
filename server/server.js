import app from './app.js';
import env from './config/env.js';
import connectDB from './config/db.js';

await connectDB();

const server = app.listen(env.port, () => {
  console.log(`Server running in ${env.nodeEnv} mode on port ${env.port}`);
});

process.on('unhandledRejection', (reason) => {
  console.error('Unhandled rejection:', reason);
  server.close(() => process.exit(1));
});