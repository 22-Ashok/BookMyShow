-- CreateEnum
CREATE TYPE "EventType" AS ENUM ('MOVIE', 'CONCERT', 'PLAY');

-- CreateEnum
CREATE TYPE "Lang" AS ENUM ('ENGLISH', 'HINDI', 'HINGLISH');

-- CreateTable
CREATE TABLE "Event" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "durationMin" INTEGER NOT NULL,
    "eventType" "EventType" NOT NULL,
    "lang" "Lang" NOT NULL,
    "url" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Event_title_eventType_lang_idx" ON "Event"("title", "eventType", "lang");
