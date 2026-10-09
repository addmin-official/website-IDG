// lib/prisma.ts
// Singleton instance of Prisma Client to prevent multiple instances in development

let prismaClient: any = null;

export async function getPrisma() {
  if (prismaClient) return prismaClient;

  try {
    const { PrismaClient } = await import('@prisma/client');
    const globalForPrisma = globalThis as unknown as {
      prisma: any | undefined;
    };

    prismaClient =
      globalForPrisma.prisma ??
      new PrismaClient({
        log: process.env.NODE_ENV === 'development' ? ['error', 'warn'] : ['error'],
      });

    if (process.env.NODE_ENV !== 'production') {
      globalForPrisma.prisma = prismaClient;
    }

    return prismaClient;
  } catch (error) {
    console.warn('[Prisma] Client not yet generated or DB not available:', error);
    return null;
  }
}
