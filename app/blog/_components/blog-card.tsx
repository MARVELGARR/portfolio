"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowUpRight, Calendar, Clock } from "lucide-react"
import { HashnodePost } from "@/lib/hashnode"

interface BlogCardProps {
    post: HashnodePost
    index: number
}

export function BlogCard({ post, index }: BlogCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group relative h-full"
        >
            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative h-full border border-primary/20 bg-card p-6 flex flex-col justify-between hover:border-primary/50 transition-colors duration-300">
                {/* Technical Corner Markers */}
                <div className="absolute top-0 left-0 w-2 h-2 border-l border-t border-primary/40" />
                <div className="absolute top-0 right-0 w-2 h-2 border-r border-t border-primary/40" />
                <div className="absolute bottom-0 left-0 w-2 h-2 border-l border-b border-primary/40" />
                <div className="absolute bottom-0 right-0 w-2 h-2 border-r border-b border-primary/40" />

                <div className="space-y-4">
                    <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-primary/60">
                        <span className="flex items-center gap-1">
                            <Calendar size={10} />
                            {new Date(post.publishedAt).toLocaleDateString()}
                        </span>
                        <span className="flex items-center gap-1">
                            <Clock size={10} />
                            {post.readTimeInMinutes} MIN_READ
                        </span>
                    </div>

                    <h3 className="text-xl font-bold uppercase tracking-tight line-clamp-2 md:h-14">
                        {post.title}
                    </h3>

                    <p className="text-muted-foreground text-sm font-mono leading-relaxed line-clamp-3">
                        {post.brief}
                    </p>
                </div>

                <div className="mt-6 pt-4 border-t border-primary/10 flex items-center justify-between">
                    <span className="text-xs font-mono text-primary/60 group-hover:text-primary transition-colors">
                        READ_LOG_ENTRY
                    </span>
                    <Link
                        href={`https://hashnode.com/${post.slug}`}
                        target="_blank"
                        className="p-2 bg-primary/5 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    >
                        <ArrowUpRight size={16} />
                    </Link>
                </div>
            </div>
        </motion.div>
    )
}
