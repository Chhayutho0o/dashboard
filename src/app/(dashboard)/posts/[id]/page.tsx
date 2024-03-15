import { fetchPosts } from "@/actions/posts";
import { notFound } from "next/navigation";

type PostFormProps = {
  params: { id: string };
};

const PostForm = async ({ params }: PostFormProps) => {
  const data = await fetchPosts(params.id);
  return <div>PostForm</div>;
};

export default PostForm;
