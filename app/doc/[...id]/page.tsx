import { MdContent } from "../../../components/MdContent/MdContent";
import { Title } from "../../../components/Title";
import { getMenuStructure, getPostData } from "../../../lib/doc";
import { DirResult } from "../../../types/doc.types";

export default async function Doc({ params: { id } }: { params: { id: string[] } }) {
  const postData = await getPostData(id);

  return (
    <div className="page__content">
      {/* <Title>{postData.title}</Title> */}
      <MdContent html={postData.contentHtml ?? ""} />
    </div>
  );
}

export async function generateStaticParams() {
  const menuStructure = await getMenuStructure();

  const getPages = (dir: DirResult, path: string = ""): string[] => {
    const subDirs: string[] = [];

    Object.keys(dir.dirs).forEach((key) => {
      getPages(dir.dirs[key], `${path && path.trim() !== "" ? path + "/" : ""}${key}`).forEach((p) => subDirs.push(p));
    });

    return [...subDirs, ...dir.files.map((f) => `${path && path.trim() !== "" ? path + "/" : ""}${f.id}`)];
  };

  const allPages = getPages(menuStructure);

  return allPages.map((item) => ({
    id: item.split("/"),
  }));
}
