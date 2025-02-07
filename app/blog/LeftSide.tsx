"use client";
import { sanityFetch } from "@/sanity/lib/fetch";
import { fourposts } from "@/sanity/lib/queries";

import { useState, useEffect } from "react";
import Image from "next/image";

// Define types for post body content
interface PostBodyBlock {
  _type: string;
  children?: { text: string }[];
  asset?: { url: string };
}

// Define the Post type
interface Post {
  _id: string;
  title: string;
  slug: string;
  publishedAt: string;
  image?: {
    asset: {
      url: string;
    };
    alt?: string;
  };
  body: PostBodyBlock[];
}

export default function Leftside() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data: Post[] = await sanityFetch({ query: fourposts });
        setPosts(data);
      } catch (err) {
        setError("Failed to load posts. Please try again later.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="w-full flex justify-center items-center py-10">
        <p className="text-white">Loading posts...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full flex justify-center items-center py-10">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="mx-auto md:ml-10 my-16 px-4 sm:px-8 lg:px-16">
      {posts.map((post) => {
        // Create a preview text with truncation
        const bodyPreview = post.body && Array.isArray(post.body)
          ? post.body
              .map((block: PostBodyBlock) => {
                if (block._type === "block" && block.children) {
                  return block.children.map((child) => child.text).join(" ");
                }
                return "";
              })
              .join(" ")
              .slice(0, 200) // Truncate preview to 200 characters
          : "";

        return (
          <div key={post._id}>
            {/* Show Post Image */}
            {post.image?.asset?.url && (
              <div className="w-full h-[300px] sm:h-[400px] lg:h-[520px] relative">
                <Image
                  src={post.image.asset.url}
                  alt={post.image.alt || "Post Image"}
                  width={800}
                  height={500}
                  objectFit="cover"
                  className="rounded-lg w-[800px] h-[500px]"
                />
                <button className="absolute top-4 left-4 w-[60px] h-[60px] bg-[#FF9F0D] text-white rounded-[6px]">
                  {new Date(post.publishedAt).toLocaleDateString()}
                </button>
              </div>
            )}

            <p className="flex gap-2 my-6 text-sm sm:text-base">
              <span>{new Date(post.publishedAt).toLocaleDateString()} /</span>
              <span>3 /</span>
              <span>Admin</span>
            </p>

            <h2 className="font-bold text-xl sm:text-2xl lg:text-3xl mb-6">{post.title}</h2>

            {/* Show truncated body text */}
            <div className="text-sm sm:text-base text-justify">
              {bodyPreview}...
            </div>

            {/* Read More Button */}

              <button className="w-[172px] h-[52px] text-[#FF9F0D] border-[#FF9F0D] border-[2px] rounded-sm my-8 px-8"> */}
                Read More
              </button>
        
          </div>
        );
      })}
    </div>
  );
}
