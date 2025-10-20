import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight, Search, X } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState<typeof blogPosts[0] | null>(null);
  
  const blogPosts = [
    {
      title: "Top 10 SEO Trends in 2025",
      excerpt: "Stay ahead of the competition with these essential SEO strategies for the new year. Learn about AI-powered search, voice optimization, and more.",
      category: "SEO",
      date: "January 15, 2025",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop",
    },
    {
      title: "How to Run Profitable Google Ads Campaigns",
      excerpt: "Master the art of PPC advertising with our comprehensive guide to creating high-converting Google Ads campaigns that maximize ROI.",
      category: "PPC",
      date: "January 12, 2025",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&auto=format&fit=crop",
    },
    {
      title: "Social Media Hacks for Small Businesses",
      excerpt: "Discover proven strategies to grow your social media presence without breaking the bank. Perfect for startups and small business owners.",
      category: "Social Media",
      date: "January 10, 2025",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&auto=format&fit=crop",
    },
    {
      title: "Website Design Best Practices for 2025",
      excerpt: "Create stunning, user-friendly websites that convert. Learn about the latest design trends, UX principles, and mobile optimization techniques.",
      category: "Web Design",
      date: "January 8, 2025",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&auto=format&fit=crop",
    },
    {
      title: "Content Marketing Strategy That Works",
      excerpt: "Build a content marketing strategy that drives traffic, engages audiences, and generates leads. Includes templates and actionable tips.",
      category: "Content Marketing",
      date: "January 5, 2025",
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop",
    },
    {
      title: "Local SEO: Complete Guide for 2025",
      excerpt: "Dominate local search results with our step-by-step guide to local SEO. Perfect for businesses targeting specific geographic areas.",
      category: "SEO",
      date: "January 3, 2025",
      readTime: "11 min read",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&auto=format&fit=crop",
    },
  ];

  const categories = ["All", "SEO", "PPC", "Social Media", "Web Design", "Content Marketing"];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-poppins">Digital Marketing Blog</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Expert insights, tips, and strategies to help your business grow online
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-12 pr-4 py-3 rounded-full border border-border focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                className={category === "All" ? "btn-gradient" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="border-0 shadow-lg card-hover overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
                <CardContent className="p-6">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-3">
                    {post.category}
                  </span>
                  <h3 className="text-xl font-bold mb-3 font-poppins line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-2" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <Clock size={16} className="mr-2" />
                      {post.readTime}
                    </div>
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full group"
                    onClick={() => setSelectedPost(post)}
                  >
                    Read More
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <Button size="lg" className="btn-gradient">
              Load More Articles
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4 font-poppins">Subscribe to Our Newsletter</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Get the latest digital marketing tips, trends, and insights delivered to your inbox every week.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button size="lg" className="btn-gradient whitespace-nowrap">
                Subscribe Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 section-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-poppins">
            Need Professional Help?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let our experts handle your digital marketing while you focus on running your business.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8">
              Get Free Consultation
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </section>

      {/* Blog Post Dialog */}
      <Dialog open={!!selectedPost} onOpenChange={() => setSelectedPost(null)}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          {selectedPost && (
            <>
              <DialogHeader>
                <DialogTitle className="text-3xl font-bold font-poppins pr-8">
                  {selectedPost.title}
                </DialogTitle>
              </DialogHeader>
              <div className="space-y-6">
                <img
                  src={selectedPost.image}
                  alt={selectedPost.title}
                  className="w-full h-64 object-cover rounded-lg"
                />
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full">
                    {selectedPost.category}
                  </span>
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-2" />
                    {selectedPost.date}
                  </div>
                  <div className="flex items-center">
                    <Clock size={16} className="mr-2" />
                    {selectedPost.readTime}
                  </div>
                </div>
                <div className="prose prose-lg max-w-none">
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {selectedPost.excerpt}
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    This is where the full blog post content would appear. In a complete implementation, 
                    you would have the full article content stored in your data structure and rendered here. 
                    You can include headings, paragraphs, images, code blocks, and other rich content to 
                    provide value to your readers.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    For now, this serves as a placeholder to demonstrate the expandable blog post functionality. 
                    Each blog post can have its own unique content, formatting, and media to engage your audience 
                    and establish your authority in digital marketing.
                  </p>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Blog;
