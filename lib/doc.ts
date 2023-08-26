"server-only";

import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { cache } from "react";
import { remark } from "remark";
import html, { Root } from "remark-html";
import { DirResult } from "../types/doc.types";
import { Preset, unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import rehypeRewrite from "rehype-rewrite";

const postsDirectory = path.join(process.cwd(), "./docs/");

const cleanFilename = (filename: string) => filename.replace(/\.md$/, "");

export const getDocsStructure = cache(async (dirPath: string) => {
  const result: DirResult = { dirs: {}, files: [] };

  const files = fs.readdirSync(dirPath).sort((a, b) => (a > b ? 1 : -1));

  files.forEach(async (file) => {
    const filePath = path.join(dirPath, file);
    const stats = fs.statSync(filePath);

    if (stats.isDirectory()) {
      if (file !== "images") {
        result.dirs[file] = await getDocsStructure(filePath);
      }
    } else if (stats.isFile()) {
      if (file.includes(".md")) {
        result.files.push({
          title: cleanFilename(file),
          id: cleanFilename(file),
          filename: file,
        });
      }
    }
  });

  return result;
});

const getDocStructureToIds = (
  structure: DirResult,
  paths: {
    id: string;
    title: string;
  }[] = [],
  currentPath?: string
) => {
  const currentPathPrefix = currentPath ? `${currentPath}/` : "";

  structure.files.forEach((f) => {
    paths.push({
      id: `${currentPathPrefix}${f.id}`,
      title: `${currentPathPrefix}${f.title}`,
    });
  });

  if (structure.dirs) {
    Object.entries(structure.dirs).forEach((entry) => {
      if (structure.dirs && entry[1]) {
        getDocStructureToIds(entry[1], paths, `${currentPathPrefix}${entry[0]}`);
      }
    });
  }

  return paths;
  // return paths.map(p => ({
  //   id: p,
  //   title: p
  // }));
};

export async function getMenuStructure() {
  return await getDocsStructure(postsDirectory);

  // // Get file names under /posts
  // const structure = await getDocsStructure(postsDirectory);
  // const structureIDs = getDocStructureToIds(structure);

  // // Sort posts by date
  // return structureIDs.sort((a, b) => {
  //   if (a.id < b.id) {
  //     return 1;
  //   } else {
  //     return -1;
  //   }
  // });
}

export async function getAllPostIds() {
  // const fileNames = fs.readdirSync(postsDirectory);

  const structure = await getDocsStructure(postsDirectory);
  const structureIDs = getDocStructureToIds(structure);

  // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       id: 'ssg-ssr'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'pre-rendering'
  //     }
  //   }
  // ]
  return structureIDs.map((fileName) => {
    return {
      params: {
        id: fileName.id.split("/"),
      },
    };
  });
}

export async function getPostData(id: string[]) {
  const fullPath = path.join(postsDirectory, `${id.join("/")}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // using unified for Markdown to Html
  const result = unified()
    .use(remarkParse as Preset)
    .use(remarkGfm as Preset) // Support GFM (tables, autolinks, tasklists, strikethrough).
    .use(remarkRehype as Preset)
    .use(rehypeRewrite as any, {
      rewrite: (node: any) => {
        if (node.type == "element" && node.tagName == "a") {
          node.properties = { ...node.properties, target: "_blank" };
        }
      },
    })
    .use(rehypeHighlight as Preset) // Enable Highlight.js for code highlight
    .use(rehypeStringify as Preset)
    .processSync(matterResult.content);

  // Combine the data with the id
  return {
    id,
    title: id,
    ...matterResult.data,
    contentHtml: String(result),
  };
}
