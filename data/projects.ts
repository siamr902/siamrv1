import { StaticImageData } from "next/image";
import crunchLogo from "../images/crunch-logo.svg";
import visualizerLogo from "../images/algo-logo.png";

interface ProjectProps {
  name: string;
  description: string;
  tech: string[];
  demo: string;
  repository: string;
  projectLogo: StaticImageData | string;
}

export const projects: ProjectProps[] = [
  {
    name: "Crunch Fitness V2",
    description: "Full-stack remodel of the crunch fitness website, inspired by my local gym. Features include user authentication using next-auth, a monthly membership payments system using stripe, a hosted postgres database on Railway to store users' workouts, and more. Prisma was used as the ideal ORM to facilitate operations and queries on the database, as well as integrate with Next-Auth. Currently, authenticated users have the ability to create, update, and delete workouts. Future additions may be to include a nutrition tracker or a system where users can track their stats (such as height, weight, bf%, etc.).",
    tech: [
      "typescript",
      "nextjs",
      "next-auth",
      "tailwindcss",
      "prisma",
      "postgres",
      "railway",
      "stripe",
    ],
    demo: "https://crunch-tracker.vercel.app/",
    repository: "https://github.com/siamr902/crunch-tracker",
    projectLogo: crunchLogo
  },
  {
    name: "Visualizer Collection",
    description:
      "A mini-collection of animated algorithms to help visualize programming concepts like backtracking, recursive dynamic programming, queues, and more. The primary intention of this project was to practice adapting certain pieces of logic into their respective code variants. Examples include a sudoku backtracking visualization with solving functionality, a visualization of Leetcode's Minimum Path Sum, a visualization of the classic N-Queens problem, etc. I may consider adding more projects to the collection in the future, but for now I find them to be somewhat repetitive: figuring out how to animate the first algorithm made the others less fulfilling. Nonetheless, designing the UI was enjoyable, and the project strengthened my understanding of Typescript.",
    tech: ["typescript", "nextjs", "tailwindcss"],
    demo: "https://visualizer-collection.vercel.app/",
    repository: "https://github.com/siamr902/algorithms-app",
    projectLogo: visualizerLogo
  },
  {
    name: "SRBLOGS",
    description:
      "Articles are mainly geared towards programming and computer science, but I also sprinkle in other topics that interest me and perhaps visitors as well. Due to the relatively broad scope in content — or for lack of a better name — I ensured to title the domain appropriately.",
    tech: ["nextjs", "mdx", "tailwindcss", "typescript", "framer-motion"],
    demo: "https://srblog.vercel.app/",
    repository: "https://github.com/siamr902/srblogs",
    projectLogo: "SRBLOGS"
  },
];
