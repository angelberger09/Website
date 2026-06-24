import PostReaderClient from "../../notes/post/PostReaderClient";

export const metadata = {
  title: "Blog Post · Soft Strange Studio",
  description: "Compatibility post route for public notes in the Soft Strange Studio website."
};

export default function BlogPostPage() {
  return (
    <PostReaderClient
      backHref="/Website/blog/"
      backLabel="Back to Blog"
      contextLabel="Still Here Notes"
    />
  );
}
