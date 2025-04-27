import Link from "next/link";

interface PostParam {
  id: string;
}

export default function Post(params: PostParam) {
  const { id } = params;
  return (
    <div>
      <h3>Post #{id}</h3>
      <p>Lorem ipsum</p>
      <Link href="/blog">Back to blog</Link>
    </div>
  );
}
