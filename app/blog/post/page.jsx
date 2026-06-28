import PostReaderClient from "../../notes/post/PostReaderClient";

export const metadata = {
  title: "Blog Post · Soft Strange Studio",
  description: "Compatibility post route for public notes in the Soft Strange Studio website."
};

export default function BlogPostPage() {
  return (
    <>
      <main className="site-shell page-layout notes-blog-post-path-page" aria-label="Blog post compatibility path">
        <section className="notes-blog-post-bridge" aria-labelledby="blog-post-bridge-title">
          <div className="notes-blog-post-bridge__copy">
            <p className="eyebrow">Older post path</p>
            <h1 id="blog-post-bridge-title">Blog post, same reader.</h1>
            <p>
              This older Blog post doorway keeps public links clear before handing the note to the same calm reader sheet below.
            </p>
          </div>
          <div className="notes-blog-post-bridge__thread" aria-label="Blog post handoff path">
            <span>old post link</span>
            <span>public note</span>
            <span>reader sheet</span>
          </div>
          <div className="notes-blog-post-bridge__receipt" aria-hidden="true">
            <span>kept route</span>
            <strong>Blog → reader</strong>
            <small>same writing shelf</small>
          </div>
        </section>
      </main>
      <PostReaderClient
        backHref="/Website/blog/"
        backLabel="Back to Blog path"
        contextLabel="Blog path reader"
      />
    </>
  );
}
