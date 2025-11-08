import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card } from "@/components/ui/card";
import { getAllPosts } from "@/lib/blog";
import { calculate } from "@iamtraction/read-time";

export const metadata = {
  title: "Blog | Wazoo Web Design Studio",
  description:
    "Insights, updates, and thoughts from Wazoo Web Design Studio on web design, development, and creative digital experiences.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="min-h-screen">
      <Header />
      <section className="pt-24 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-normal mb-4">
              Blog
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Insights, updates, and thoughts on web design, development, and
              creative digital experiences.
            </p>
          </div>

          {posts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-muted-foreground">No blog posts yet.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {posts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`}>
                  <Card className="h-full overflow-hidden border-border hover:border-foreground/20 transition-all duration-300 cursor-pointer">
                    <div className="p-6 sm:p-8">
                      <div className="text-sm text-muted-foreground mb-2 flex items-center gap-2 flex-wrap">
                        <time dateTime={post.date}>
                          {new Date(post.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </time>
                        <span>•</span>
                        <span>
                          {calculate(post.content, { wpm: 200 })} read
                        </span>
                      </div>
                      <h2 className="text-xl sm:text-2xl font-display font-normal mb-3">
                        {post.title}
                      </h2>
                      {post.description && (
                        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed line-clamp-3">
                          {post.description}
                        </p>
                      )}
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
      <Footer />
    </main>
  );
}
