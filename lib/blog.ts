import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "app/blog/posts");

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  author?: string;
  content: string;
  frontmatter: Record<string, unknown>;
}

export function getPostSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames
    .filter((name) => name.endsWith(".mdx") || name.endsWith(".md"))
    .map((name) => name.replace(/\.(mdx|md)$/, ""));
}

export function getPostBySlug(slug: string): BlogPost | null {
  const fullPathMDX = path.join(postsDirectory, `${slug}.mdx`);
  const fullPathMD = path.join(postsDirectory, `${slug}.md`);

  let fileContents: string;

  if (fs.existsSync(fullPathMDX)) {
    fileContents = fs.readFileSync(fullPathMDX, "utf8");
  } else if (fs.existsSync(fullPathMD)) {
    fileContents = fs.readFileSync(fullPathMD, "utf8");
  } else {
    return null;
  }

  const { data, content } = matter(fileContents);

  return {
    slug,
    title: (data.title as string) || "Untitled",
    description: (data.description as string) || "",
    date: (data.date as string) || "",
    author: (data.author as string) || undefined,
    content,
    frontmatter: data,
  };
}

export function getAllPosts(): BlogPost[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .filter((post): post is BlogPost => post !== null)
    .sort((a, b) => {
      if (a.date < b.date) {
        return 1;
      }
      if (a.date > b.date) {
        return -1;
      }
      return 0;
    });
  return posts;
}
