import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import { PrismaClient } from "@prisma/client";

dotenv.config();
dotenv.config({ path: "../.env", override: false });

const prisma = new PrismaClient();

async function main() {
  const passwordHash = await bcrypt.hash("admin12345", 10);

  await prisma.admin.upsert({
    where: {
      email: "admin@example.com"
    },
    update: {},
    create: {
      email: "admin@example.com",
      passwordHash
    }
  });

  await prisma.review.deleteMany();
  await prisma.work.deleteMany();
  await prisma.skill.deleteMany();
  await prisma.skillGroup.deleteMany();

  const frontendGroup = await prisma.skillGroup.create({
    data: {
      title: "Frontend",
      skills: {
        create: [
          { title: "HTML5", percent: 80 },
          { title: "CSS3", percent: 50 },
          { title: "JavaScript", percent: 30 },
          { title: "Vue.js", percent: 20 }
        ]
      }
    }
  });

  await prisma.skillGroup.create({
    data: {
      title: "Workflow",
      skills: {
        create: [
          { title: "Git", percent: 50 },
          { title: "Terminal", percent: 40 },
          { title: "Webpack", percent: 25 }
        ]
      }
    }
  });

  await prisma.work.createMany({
    data: [
      {
        title: "Сайт школы онлайн образования",
        link: "https://example.com/work-1",
        description: "Перенесённый seed-контент для стартового наполнения админки.",
        tags: ["HTML", "SCSS", "JavaScript"]
      },
      {
        title: "Сайт парикмахерской",
        link: "https://example.com/work-2",
        description: "Демо-работа для проверки CRUD и вывода тегов.",
        tags: ["Pug", "PostCSS", "Vue"]
      }
    ]
  });

  await prisma.review.createMany({
    data: [
      {
        name: "Андрей",
        role: "frontend",
        message: "Не следует, однако, забывать о том, что сложившаяся структура организации способствует повышению актуальности."
      },
      {
        name: "Дмитрий",
        role: "frontend",
        message: "Выбранный нами инновационный путь требует от нас системного анализа и аккуратной реализации."
      }
    ]
  });

  console.log(`Seed complete. Frontend group id: ${frontendGroup.id}`);
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
