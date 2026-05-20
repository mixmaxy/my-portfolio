export type ProjectProps = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  technologies: string[];
  projectUrl: string;
};

export const projectsData: ProjectProps[] = [
  {
    id: "repome",
    title: "RepoMe",
    description:
      "A React application connected to the Reqres public API for authentication features (registration and login) and for displaying user lists and details using the REST API.",
    imageUrl:
      "https://plus.unsplash.com/premium_vector-1733931455414-b89a31f15841?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "RepoMe Preview",
    technologies: ["React", "Vite", "Tailwind"],
    projectUrl: "https://min-pro-day28-mario.vercel.app/",
  },
  {
    id: "company-profile",
    title: "Maxify",
    description:
      "A responsive landing page built using Next.js and Tailwind CSS, designed with a focus on loading speed and clean code architecture.",
    imageUrl:
      "https://images.unsplash.com/photo-1481487196290-c152efe083f5?q=80&w=1262&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "Landing-Page Preview",
    technologies: ["Tailwind", "Next.js"],
    projectUrl: "https://maxify-sand.vercel.app/",
  },
  {
    id: "food-vault",
    title: "Food Vault",
    description:
      "A modern web application built with Next.js that helps users classify and manage food items based on their nutritional characteristics.",
    imageUrl:
      "https://images.unsplash.com/photo-1601972602288-3be527b4f18a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "Food Vault Preview",
    technologies: ["Next.js", "TypeScript", "Supabase"],
    projectUrl: "https://food-vault-zeta.vercel.app/",
  },
];
