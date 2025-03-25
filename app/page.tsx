import { allPosts } from "@/.contentlayer/generated";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto max-w-3xl py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Latest Posts</h1>
      <div className="grid gap-6">
        {allPosts.map((post) => (
          <Link key={post._id} href={post.slug} className="block transition-transform hover:scale-[1.02]">
            <Card className="p-6 border border-muted/50 hover:border-primary">
              <CardHeader className="p-0">
                <CardTitle className="text-xl font-semibold">{post.title}</CardTitle>
                {post.description && (
                  <CardDescription className="mt-2 text-muted-foreground">
                    {post.description}
                  </CardDescription>
                )}
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
