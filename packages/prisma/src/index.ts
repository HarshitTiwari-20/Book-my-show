//import { prisma } from '@repo/db/client';
//import { client } from '@repo/db';
import { PrismaClient } from "@prisma/client";

export const client = new PrismaClient();
