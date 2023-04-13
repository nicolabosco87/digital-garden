import { getAllPostIds, getPostData } from "../../lib/doc";

export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
      paths,
      fallback: false,
    };
  }
  
export async function getStaticProps({ params }) {
  const postData = getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}
  
export default function Doc({ postData }: {
  postData: {
    id: string;
    title: string
    date: string
    contentHtml: string
  }
}) {
  


    return (
      <>
      <div style={{background: "green"}}>
      ID: {postData?.id}
      </div>
    </>
    );
  }