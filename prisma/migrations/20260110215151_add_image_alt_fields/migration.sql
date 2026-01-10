-- AlterTable
ALTER TABLE "BlogPost" ADD COLUMN     "coverImageAlt" TEXT;

-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "afterImageAlt" TEXT,
ADD COLUMN     "beforeImageAlt" TEXT,
ADD COLUMN     "heroImageAlt" TEXT;

-- AlterTable
ALTER TABLE "Service" ADD COLUMN     "heroImageAlt" TEXT,
ADD COLUMN     "imageAlt" TEXT;
