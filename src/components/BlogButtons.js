"use client";

import { useRouter } from "next/navigation";

const BlogButtons = ({ item }) => {
  const router = useRouter();

  const handleShare = async (slug) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Check out this blog',
          url: `${window.location.origin}/blog/${slug}`,
        });
      } catch (error) {
        console.error("Error sharing:", error);
      }
    } else {
      alert("Share not supported on this browser.");
    }
  };

  return (
    <div className="w-full flex items-center gap-3 mt-4">
      <button
        onClick={() => handleShare(item?.slug)}
        className="py-2 px-4 border-brand_b_color border rounded text-brand_color"
      >
        Share
      </button>
      <button
        onClick={() => router.push(`/blog/${item?.slug}`)}
        className="bg-brand_colors text-white py-2 px-4 rounded"
      >
        View More
      </button>
    </div>
  );
};

export default BlogButtons;
