-- CreateTable
CREATE TABLE "repertori" (
    "id" SERIAL NOT NULL,
    "genre" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "composer" TEXT NOT NULL,
    "place_year" TEXT NOT NULL,

    CONSTRAINT "repertori_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "agenda" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "start" DATE NOT NULL,
    "end" DATE NOT NULL,
    "time" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "agenda_pkey" PRIMARY KEY ("id")
);
