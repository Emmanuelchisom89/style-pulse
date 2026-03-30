// import { PrismaClient } from "@/generated/prisma";

// const globalForPrisma = global as unknown as {
//   prisma: PrismaClient;
// };

// export const prisma = globalForPrisma.prisma || new PrismaClient();

// if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;


// filepath: c:\Users\hp\OneDrive\Desktop\Next Dev\style-pulse\src\lib\prisma.ts
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg"; // Adjust import based on your adapter
import { Pool } from "pg"; // If using PostgreSQL

const globalForPrisma = global as unknown as { prisma: PrismaClient };

// Create a connection pool (adjust for your database)
const connectionString = process.env.DATABASE_URL;
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    adapter, // Add this line
    log: ["query", "error", "warn"],
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export default prisma;