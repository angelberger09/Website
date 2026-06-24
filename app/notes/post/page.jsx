import PostReaderClient from "./PostReaderClient";

export const metadata = {
  title: "Note · Soft Strange Studio",
  description: "A public note rendered inside the Soft Strange Studio website."
};

export default function NotesPostPage() {
  return <PostReaderClient />;
}
