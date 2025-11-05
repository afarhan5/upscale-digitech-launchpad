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
      title: "Email Marketing Best Practices for 2025",
      excerpt: "Master email marketing with proven strategies to boost open rates, click-throughs, and conversions. Learn automation, personalization, and segmentation techniques.",
      category: "Email Marketing",
      date: "January 18, 2025",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop",
      content: `
        <h2>Introduction</h2>
        <p>Email marketing remains one of the most effective digital marketing channels, with an average ROI of $42 for every $1 spent. In 2025, success requires more than just sending mass emails—it demands strategic planning, personalization, and data-driven optimization.</p>
        
        <h2>1. Build a Quality Email List</h2>
        <p>Your email list is your most valuable asset. Focus on organic growth through:</p>
        <ul>
          <li><strong>Lead magnets:</strong> Offer valuable resources like ebooks, templates, or exclusive content</li>
          <li><strong>Website signup forms:</strong> Place strategic opt-in forms on high-traffic pages</li>
          <li><strong>Social media:</strong> Promote your newsletter across all platforms</li>
          <li><strong>Exit-intent popups:</strong> Capture visitors before they leave your site</li>
        </ul>
        
        <h2>2. Segment Your Audience</h2>
        <p>Generic emails don't work anymore. Segment your list based on:</p>
        <ul>
          <li>Demographics (age, location, industry)</li>
          <li>Behavior (purchase history, website activity)</li>
          <li>Engagement level (active vs. inactive subscribers)</li>
          <li>Customer lifecycle stage (new leads, customers, advocates)</li>
        </ul>
        
        <h2>3. Personalization Beyond First Names</h2>
        <p>Modern personalization goes deeper:</p>
        <ul>
          <li>Dynamic content based on user preferences</li>
          <li>Product recommendations using AI</li>
          <li>Personalized send times for each subscriber</li>
          <li>Behavior-triggered emails (cart abandonment, browse abandonment)</li>
        </ul>
        
        <h2>4. Optimize Subject Lines</h2>
        <p>Your subject line determines if your email gets opened. Best practices:</p>
        <ul>
          <li>Keep it under 50 characters</li>
          <li>Create urgency without being spammy</li>
          <li>Use emojis strategically (test first)</li>
          <li>A/B test different approaches</li>
          <li>Avoid spam trigger words</li>
        </ul>
        
        <h2>5. Mobile-First Design</h2>
        <p>Over 60% of emails are opened on mobile devices. Ensure:</p>
        <ul>
          <li>Responsive design that adapts to all screen sizes</li>
          <li>Large, tappable buttons (at least 44x44 pixels)</li>
          <li>Concise content that's easy to scan</li>
          <li>Fast-loading images</li>
        </ul>
        
        <h2>6. Automation Sequences</h2>
        <p>Set up automated workflows for:</p>
        <ul>
          <li><strong>Welcome series:</strong> Introduce new subscribers to your brand</li>
          <li><strong>Nurture campaigns:</strong> Guide leads through the sales funnel</li>
          <li><strong>Re-engagement:</strong> Win back inactive subscribers</li>
          <li><strong>Post-purchase:</strong> Drive repeat purchases and reviews</li>
        </ul>
        
        <h2>7. Test and Optimize</h2>
        <p>Continuously improve through testing:</p>
        <ul>
          <li>A/B test subject lines, content, and CTAs</li>
          <li>Analyze open rates, click rates, and conversions</li>
          <li>Test send times and frequency</li>
          <li>Monitor deliverability and spam complaints</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>Email marketing in 2025 is about delivering value, building relationships, and respecting your subscribers' time. Focus on quality over quantity, personalization over mass messaging, and always provide an easy opt-out option. By following these best practices, you'll build a loyal subscriber base that drives consistent revenue for your business.</p>
      `
    },
    {
      title: "Top 10 SEO Trends in 2025",
      excerpt: "Stay ahead of the competition with these essential SEO strategies for the new year. Learn about AI-powered search, voice optimization, and more.",
      category: "SEO",
      date: "January 15, 2025",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop",
      content: `
        <h2>Introduction</h2>
        <p>The SEO landscape continues to evolve rapidly. Staying ahead means understanding emerging trends and adapting your strategy accordingly. Here are the top 10 SEO trends shaping 2025.</p>
        
        <h2>1. AI-Powered Search Results</h2>
        <p>AI is transforming how search engines deliver results. Google's Search Generative Experience (SGE) now provides AI-generated summaries at the top of search results. To adapt:</p>
        <ul>
          <li>Create comprehensive, authoritative content</li>
          <li>Focus on answering questions directly</li>
          <li>Use structured data to help AI understand your content</li>
          <li>Build brand authority and trust signals</li>
        </ul>
        
        <h2>2. Voice Search Optimization</h2>
        <p>With 50% of searches now voice-based, optimization strategies must shift:</p>
        <ul>
          <li>Target conversational, long-tail keywords</li>
          <li>Optimize for question-based queries</li>
          <li>Ensure fast page load times</li>
          <li>Claim and optimize your Google Business Profile</li>
        </ul>
        
        <h2>3. Core Web Vitals & Page Experience</h2>
        <p>User experience metrics continue to impact rankings:</p>
        <ul>
          <li><strong>LCP (Largest Contentful Paint):</strong> Under 2.5 seconds</li>
          <li><strong>FID (First Input Delay):</strong> Under 100ms</li>
          <li><strong>CLS (Cumulative Layout Shift):</strong> Under 0.1</li>
          <li>Mobile-friendly design is non-negotiable</li>
        </ul>
        
        <h2>4. E-E-A-T: Experience, Expertise, Authoritativeness, Trustworthiness</h2>
        <p>Google added "Experience" to E-A-T in 2024. Demonstrate it through:</p>
        <ul>
          <li>Author bios highlighting real expertise</li>
          <li>Case studies and real-world examples</li>
          <li>Customer testimonials and reviews</li>
          <li>Third-party mentions and backlinks</li>
        </ul>
        
        <h2>5. Video SEO</h2>
        <p>Video content dominates search results:</p>
        <ul>
          <li>Optimize YouTube videos for search</li>
          <li>Add video transcripts to your website</li>
          <li>Use video schema markup</li>
          <li>Create video thumbnails that attract clicks</li>
        </ul>
        
        <h2>6. Local SEO Domination</h2>
        <p>Local searches drive immediate action:</p>
        <ul>
          <li>Complete and optimize your Google Business Profile</li>
          <li>Collect and respond to reviews</li>
          <li>Create location-specific content</li>
          <li>Build local citations and backlinks</li>
        </ul>
        
        <h2>7. Semantic Search & Topic Clusters</h2>
        <p>Search engines understand context, not just keywords:</p>
        <ul>
          <li>Create comprehensive pillar pages</li>
          <li>Develop cluster content around core topics</li>
          <li>Use internal linking strategically</li>
          <li>Focus on search intent, not just keywords</li>
        </ul>
        
        <h2>8. Zero-Click Searches</h2>
        <p>More searches end without clicking a result:</p>
        <ul>
          <li>Target featured snippets</li>
          <li>Optimize for knowledge panels</li>
          <li>Use structured data markup</li>
          <li>Build brand awareness for direct searches</li>
        </ul>
        
        <h2>9. Privacy-First SEO</h2>
        <p>With cookie deprecation and privacy regulations:</p>
        <ul>
          <li>Focus on first-party data collection</li>
          <li>Build direct relationships with your audience</li>
          <li>Use privacy-compliant analytics tools</li>
          <li>Prioritize email list building</li>
        </ul>
        
        <h2>10. Content Quality Over Quantity</h2>
        <p>Google's helpful content updates prioritize quality:</p>
        <ul>
          <li>Create content for humans, not search engines</li>
          <li>Demonstrate first-hand experience</li>
          <li>Update and improve existing content</li>
          <li>Remove or consolidate thin content</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>SEO in 2025 requires a holistic approach that balances technical optimization, quality content, user experience, and brand building. Focus on creating genuine value for users, and the rankings will follow. Stay adaptable and keep testing new strategies as search engines continue to evolve.</p>
      `
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
    {
      title: "Building Effective Email Funnels",
      excerpt: "Create high-converting email funnels that nurture leads and drive sales. Step-by-step guide with templates and automation strategies.",
      category: "Email Marketing",
      date: "January 1, 2025",
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?w=800&auto=format&fit=crop",
    },
  ];

  const categories = ["All", "SEO", "PPC", "Social Media", "Web Design", "Content Marketing", "Email Marketing"];

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
                <div 
                  className="prose prose-lg max-w-none" 
                  dangerouslySetInnerHTML={{ __html: selectedPost.content || selectedPost.excerpt }}
                />
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
