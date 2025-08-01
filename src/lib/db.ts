import { PrismaClient } from "@/generated/prisma";

const globalPrisma = global as unknown as { prisma: PrismaClient };

const prisma = globalPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalPrisma.prisma = prisma;

export default prisma;
