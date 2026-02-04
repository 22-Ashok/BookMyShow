/*
  Warnings:

  - You are about to drop the column `password` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Event` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'USER', 'ORGANIZER');

-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('MALE', 'FEMALE', 'TRANSGENDER');

-- AlterTable
ALTER TABLE "User" DROP COLUMN "password",
ADD COLUMN     "gender" "Gender",
ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'USER',
ALTER COLUMN "name" DROP NOT NULL,
ALTER COLUMN "name" SET DEFAULT 'Guest';

-- DropTable
DROP TABLE "Event";

-- DropEnum
DROP TYPE "EventType";

-- DropEnum
DROP TYPE "Lang";
