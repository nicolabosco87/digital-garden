import { MdContent } from "../../../components/MdContent/MdContent";
import { Title } from "../../../components/Title";
import { getPostData } from "../../../lib/doc";

export default async function Doc({ params: { id } }: { params: { id: string[] } }) {
  const postData = await getPostData(id);

  return (
    <div className="page__content">
      {/* <Title>{postData.title}</Title> */}
      <MdContent html={postData.contentHtml ?? ""} />
    </div>
  );
}
