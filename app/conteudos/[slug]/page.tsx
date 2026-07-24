import { notFound } from "next/navigation";
import { ContentDetailView } from "@/components/marketing-os/content-detail-view";
import { posts } from "@/data/posts";
import { getContentBySlug } from "@/lib/marketing-os/selectors";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function ContentDetailPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (!getContentBySlug(slug)) {
    notFound();
  }

  return <ContentDetailView slug={slug} />;
}
