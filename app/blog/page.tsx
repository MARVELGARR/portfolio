import { getHashnodePosts } from "@/lib/hashnode"
import { BlogCard } from "./_components/blog-card"

export const metadata = {
    title: "Dev_Logs // Blog",
    description: "Technical logs and procedural updates from the system core.",
}

export default async function BlogPage() {
    const posts = await getHashnodePosts()

    return (
        <div className="min-h-screen pt-24 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
            <div className="space-y-2 mb-16">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/5 border border-primary/20 text-[10px] font-mono text-primary uppercase tracking-[0.3em] mb-4">
                    Blogs
                </div>
                <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter">
                    Developer_Chronicles
                </h1>
                <p className="text-muted-foreground font-mono max-w-2xl text-lg">
                    {`// Insights, tutorials, and technical documentations extracted from active development cycles.`}
                </p>
            </div>

            {posts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {posts.map((post, index) => (
                        <BlogCard key={post.slug} post={post} index={index} />
                    ))}
                </div>
            ) : (
                <div className="h-64 flex flex-col items-center justify-center border border-dashed border-primary/30 bg-card/50">
                    <span className="text-4xl font-mono text-primary/20 mb-4">NO_DATA</span>
                    <p className="text-muted-foreground font-mono text-sm uppercase tracking-widest">
                        Log_Empty // No posts retrieved
                    </p>
                </div>
            )}
        </div>
    )
}
