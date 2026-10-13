import { PrismaClient } from '@prisma/client';

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

/**
 * Creates or retrieves the singleton PrismaClient instance.
 *
 * Ensures:
 * 1. DATABASE_URL is read purely from process.env with no hardcoded fallback.
 * 2. Graceful fallback (try/catch): returns null if DATABASE_URL is unset or initialization fails,
 *    so production builds or serverless runs without a live DB connection do not crash.
 * 3. Singleton pattern across HMR in development to prevent connection exhaustion.
 */
function getPrismaClient(): PrismaClient | null {
  const dbUrl = process.env.DATABASE_URL?.trim();

  if (!dbUrl) {
    if (process.env.NODE_ENV === 'development') {
      console.warn(
        '⚠️ DATABASE_URL not set in process.env. Prisma is running in graceful fallback mode.'
      );
    }
    return null;
  }

  if (globalForPrisma.prisma) {
    return globalForPrisma.prisma;
  }

  try {
    const client = new PrismaClient({
      log:
        process.env.NODE_ENV === 'development'
          ? ['error', 'warn']
          : ['error'],
    });

    if (process.env.NODE_ENV !== 'production') {
      globalForPrisma.prisma = client;
    }

    return client;
  } catch (error) {
    console.error('⚠️ Failed to initialize PrismaClient instance:', error);
    return null;
  }
}

export const prisma = getPrismaClient();

export default prisma;
