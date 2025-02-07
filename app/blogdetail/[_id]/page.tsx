import Common from "@/components/HeroSection/Common";
import { sanityFetch } from "@/sanity/lib/fetch";
import { singlePostQuery } from "@/sanity/lib/queries";
import Image from "next/image";
import CommentsSection from "@/components/CommentSection";

// Define the structure of the post and its body elements based on Sanity schema
interface PostBodyBlock {
  _type: string;
  children?: { text: string }[];
  asset?: { url: string };
}

interface Post {
  title: string;
  imageUrl?: string;
  publishedAt: string;
  body: PostBodyBlock[];
}

interface BlogDetailProps {
  params: { _id: string }; // ✅ Fixed params (removed Promise)
}

export default async function BlogDetail({ params }: BlogDetailProps) {
  // Ensure params are awaited before using
  const { _id } = params;

  // Fetch the post
  const post: Post | null = await sanityFetch({
    query: singlePostQuery,
    params: { _id },
  });

  console.log("Fetched Post Data:", post); // ✅ Debugging

  // Handle post not found
  if (!post) {
    return (
      <div className="flex justify-center items-center min-h-screen text-center bg-white">
        <div className="bg-red-100 text-red-600 px-6 py-4 rounded-md shadow-md">
          <p className="text-xl font-semibold">⚠️ Post Not Found</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-white">
      <Common title="Blog Detail" subtitle="Blog" />
      <div className="max-w-4xl mx-auto my-16 px-4 sm:px-8 lg:px-16 py-10">
        {/* ✅ Blog Header Image */}
        {post.imageUrl && (
          <div className="relative w-full h-[400px] overflow-hidden rounded-lg shadow-lg">
            <Image
              src={post.imageUrl}
              alt={post.title}
              width={800}
              height={400}
              className="rounded-lg object-cover"
            />
          </div>
        )}

        {/* ✅ Blog Title & Date */}
        <h2 className="font-bold text-4xl text-gray-900 mt-8">{post.title}</h2>
        <p className="text-gray-500 text-sm mt-2">
          Published on {new Date(post.publishedAt).toLocaleDateString()}
        </p>

        {/* ✅ Blog Content */}
        <div className="text-lg text-gray-800 leading-relaxed mt-6">
          {post.body && Array.isArray(post.body)
            ? post.body.map((block: PostBodyBlock, index: number) =>
                block._type === "block" && block.children ? (
                  block.children.map((child, childIndex) => (
                    <p key={`${index}-${childIndex}`} className="mb-4">
                      {child.text}
                    </p>
                  ))
                ) : block._type === "image" && block.asset ? (
                  <div key={index} className="my-6 w-full h-[300px] relative">
                    <Image
                      src={block.asset.url}
                      alt={post.title}
                      width={800}
                      height={400}
                      className="rounded-lg object-cover"
                    />
                  </div>
                ) : null
              )
            : "No content available"}
        </div>
        <CommentsSection/>
      </div>
    </div>
  );
}
