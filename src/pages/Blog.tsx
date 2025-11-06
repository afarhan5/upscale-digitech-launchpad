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
  const [selectedCategory, setSelectedCategory] = useState("All");
  
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
      content: `
        <h2>Introduction</h2>
        <p>Google Ads remains one of the most powerful advertising platforms, offering immediate visibility and measurable results. However, without proper strategy and optimization, campaigns can quickly drain budgets without delivering returns. This guide covers everything you need to run profitable Google Ads campaigns.</p>
        
        <h2>1. Campaign Structure Foundation</h2>
        <p>Proper campaign structure is crucial for success:</p>
        <ul>
          <li><strong>Campaign level:</strong> Set budgets, locations, and bidding strategies</li>
          <li><strong>Ad group level:</strong> Group related keywords (10-20 keywords max per ad group)</li>
          <li><strong>Ad level:</strong> Create multiple ad variations for testing</li>
          <li><strong>Single theme per ad group:</strong> Keep keywords tightly related</li>
        </ul>
        
        <h2>2. Keyword Research & Match Types</h2>
        <p>Choose the right keywords and match types:</p>
        <ul>
          <li><strong>Broad match modifier:</strong> Balance reach and relevance</li>
          <li><strong>Phrase match:</strong> Capture intent-based searches</li>
          <li><strong>Exact match:</strong> Target high-intent keywords</li>
          <li><strong>Negative keywords:</strong> Exclude irrelevant searches (critical for profitability)</li>
          <li>Start with phrase and exact match for better control</li>
        </ul>
        
        <h2>3. Writing High-Converting Ad Copy</h2>
        <p>Create compelling ads that drive clicks and conversions:</p>
        <ul>
          <li>Include keywords in headlines for relevance</li>
          <li>Highlight unique selling propositions (USPs)</li>
          <li>Use numbers and statistics when possible</li>
          <li>Add strong calls-to-action (Get Started, Shop Now, Learn More)</li>
          <li>Leverage ad extensions (sitelinks, callouts, structured snippets)</li>
          <li>Test multiple ad variations continuously</li>
        </ul>
        
        <h2>4. Landing Page Optimization</h2>
        <p>Your landing page can make or break campaign profitability:</p>
        <ul>
          <li>Match ad messaging to landing page content</li>
          <li>Fast loading speed (under 3 seconds)</li>
          <li>Clear, prominent call-to-action</li>
          <li>Mobile-responsive design</li>
          <li>Remove navigation distractions</li>
          <li>Build trust with testimonials and guarantees</li>
        </ul>
        
        <h2>5. Bidding Strategies</h2>
        <p>Choose the right bidding strategy for your goals:</p>
        <ul>
          <li><strong>Manual CPC:</strong> Full control over bids (best when starting)</li>
          <li><strong>Target CPA:</strong> Optimize for conversions at specific cost</li>
          <li><strong>Target ROAS:</strong> Focus on return on ad spend</li>
          <li><strong>Maximize conversions:</strong> Get the most conversions within budget</li>
          <li>Start with manual bidding, transition to automated after collecting data</li>
        </ul>
        
        <h2>6. Conversion Tracking Setup</h2>
        <p>Track what matters for profitability:</p>
        <ul>
          <li>Install Google Ads conversion tracking pixel</li>
          <li>Track multiple conversion actions (purchases, leads, calls)</li>
          <li>Assign conversion values to calculate ROI</li>
          <li>Link Google Analytics for deeper insights</li>
          <li>Set up phone call tracking</li>
        </ul>
        
        <h2>7. Ongoing Optimization</h2>
        <p>Continuous improvement is key to profitability:</p>
        <ul>
          <li>Review search terms report weekly</li>
          <li>Add negative keywords regularly</li>
          <li>Pause underperforming keywords</li>
          <li>Increase bids on high-performing keywords</li>
          <li>Test new ad copy monthly</li>
          <li>Optimize bids by device, location, and time</li>
          <li>Improve Quality Score to reduce costs</li>
        </ul>
        
        <h2>8. Quality Score Optimization</h2>
        <p>Higher Quality Score = lower costs and better ad positions:</p>
        <ul>
          <li>Improve ad relevance to keywords</li>
          <li>Increase landing page experience</li>
          <li>Boost expected click-through rate (CTR)</li>
          <li>Use ad extensions comprehensively</li>
          <li>Maintain tight keyword-ad-landing page alignment</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>Running profitable Google Ads campaigns requires strategic planning, continuous testing, and data-driven optimization. Start with a solid foundation, track everything, and iterate based on performance data. Focus on Quality Score, conversion optimization, and negative keywords to maximize profitability. Remember: it's not about spending more—it's about spending smarter.</p>
      `
    },
    {
      title: "Social Media Hacks for Small Businesses",
      excerpt: "Discover proven strategies to grow your social media presence without breaking the bank. Perfect for startups and small business owners.",
      category: "Social Media",
      date: "January 10, 2025",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&auto=format&fit=crop",
      content: `
        <h2>Introduction</h2>
        <p>Small businesses often face the challenge of building a social media presence with limited budgets and resources. The good news? You don't need huge budgets to succeed on social media. These proven hacks will help you grow your audience, increase engagement, and drive real business results without breaking the bank.</p>
        
        <h2>1. Leverage User-Generated Content</h2>
        <p>Your customers create content for you—use it:</p>
        <ul>
          <li>Encourage customers to tag your business in posts</li>
          <li>Create a branded hashtag for your business</li>
          <li>Run contests asking for photo submissions</li>
          <li>Share customer testimonials and reviews</li>
          <li>Always ask permission before reposting</li>
        </ul>
        
        <h2>2. Post at Optimal Times</h2>
        <p>Timing matters more than frequency:</p>
        <ul>
          <li>Check platform analytics for when your audience is online</li>
          <li>Generally best times: weekday mornings (7-9 AM) and evenings (5-7 PM)</li>
          <li>Test different posting times and track engagement</li>
          <li>Use scheduling tools to maintain consistency</li>
        </ul>
        
        <h2>3. Create Content Batches</h2>
        <p>Save time and maintain consistency:</p>
        <ul>
          <li>Dedicate one day per week to creating content</li>
          <li>Create 2-3 weeks of content in one session</li>
          <li>Use scheduling tools like Buffer, Hootsuite, or Later</li>
          <li>Leave room for real-time, spontaneous posts</li>
        </ul>
        
        <h2>4. Use Free Design Tools</h2>
        <p>Professional-looking content without designer costs:</p>
        <ul>
          <li><strong>Canva:</strong> Templates for every social platform</li>
          <li><strong>Unsplash/Pexels:</strong> Free high-quality stock photos</li>
          <li><strong>Remove.bg:</strong> Free background removal</li>
          <li><strong>Lumen5:</strong> Turn blog posts into videos</li>
        </ul>
        
        <h2>5. Engage Authentically</h2>
        <p>Build real relationships, not just followers:</p>
        <ul>
          <li>Respond to every comment within 24 hours</li>
          <li>Ask questions to encourage engagement</li>
          <li>Join relevant conversations in your niche</li>
          <li>Comment on complementary businesses' posts</li>
          <li>Use polls and interactive features</li>
        </ul>
        
        <h2>6. Repurpose Content Across Platforms</h2>
        <p>One piece of content, multiple formats:</p>
        <ul>
          <li>Turn blog posts into carousel posts</li>
          <li>Convert testimonials into quote graphics</li>
          <li>Break videos into short clips for Stories</li>
          <li>Transform data into infographics</li>
          <li>Adapt successful posts for different platforms</li>
        </ul>
        
        <h2>7. Collaborate with Micro-Influencers</h2>
        <p>Affordable partnerships with engaged audiences:</p>
        <ul>
          <li>Target influencers with 1,000-10,000 followers</li>
          <li>Offer product exchanges instead of cash payments</li>
          <li>Look for authentic engagement, not just follower count</li>
          <li>Partner with local influencers in your area</li>
        </ul>
        
        <h2>8. Utilize Stories and Reels</h2>
        <p>Take advantage of platform features:</p>
        <ul>
          <li>Stories get prime real estate at the top of feeds</li>
          <li>Reels/TikToks receive preferential algorithm treatment</li>
          <li>Behind-the-scenes content performs well</li>
          <li>Use stickers, polls, and questions for engagement</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>Growing your small business on social media doesn't require a massive budget—it requires consistency, creativity, and genuine engagement. Focus on building relationships, creating valuable content, and leveraging free tools. Start with one or two platforms, master them, then expand. Remember: authenticity beats production value every time.</p>
      `
    },
    {
      title: "Website Design Best Practices for 2025",
      excerpt: "Create stunning, user-friendly websites that convert. Learn about the latest design trends, UX principles, and mobile optimization techniques.",
      category: "Web Design",
      date: "January 8, 2025",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&auto=format&fit=crop",
      content: `
        <h2>Introduction</h2>
        <p>Your website is often the first impression potential customers have of your business. In 2025, successful web design balances aesthetics with functionality, prioritizing user experience while incorporating the latest trends and technologies. Here's how to create a website that looks great and drives results.</p>
        
        <h2>1. Mobile-First Design</h2>
        <p>Over 60% of web traffic comes from mobile devices:</p>
        <ul>
          <li>Design for mobile screens first, then scale up</li>
          <li>Use responsive design frameworks</li>
          <li>Ensure touch targets are at least 44x44 pixels</li>
          <li>Test on multiple devices and screen sizes</li>
          <li>Optimize images and assets for mobile loading</li>
        </ul>
        
        <h2>2. Speed Optimization</h2>
        <p>Site speed directly impacts conversions and SEO:</p>
        <ul>
          <li>Target load time under 3 seconds</li>
          <li>Compress and optimize all images</li>
          <li>Minimize HTTP requests</li>
          <li>Enable browser caching</li>
          <li>Use a Content Delivery Network (CDN)</li>
          <li>Lazy load images and videos</li>
        </ul>
        
        <h2>3. Clear Visual Hierarchy</h2>
        <p>Guide visitors through your content naturally:</p>
        <ul>
          <li>Use size, color, and contrast to establish importance</li>
          <li>Follow the F-pattern or Z-pattern layout</li>
          <li>Group related information together</li>
          <li>Use white space generously</li>
          <li>Make headlines scannable</li>
        </ul>
        
        <h2>4. Intuitive Navigation</h2>
        <p>Users should find what they need in 3 clicks or less:</p>
        <ul>
          <li>Keep main navigation to 5-7 items maximum</li>
          <li>Use descriptive, action-oriented labels</li>
          <li>Include a search function for content-heavy sites</li>
          <li>Maintain consistency across all pages</li>
          <li>Add breadcrumbs for deeper page levels</li>
        </ul>
        
        <h2>5. Strong Call-to-Actions (CTAs)</h2>
        <p>Guide visitors toward conversion:</p>
        <ul>
          <li>Use contrasting colors for CTA buttons</li>
          <li>Place primary CTA above the fold</li>
          <li>Use action-oriented text (Get Started, Try Free, Shop Now)</li>
          <li>Create urgency with time-sensitive offers</li>
          <li>Ensure CTAs are thumb-friendly on mobile</li>
        </ul>
        
        <h2>6. Accessibility Standards</h2>
        <p>Design for all users, including those with disabilities:</p>
        <ul>
          <li>Maintain 4.5:1 color contrast ratio for text</li>
          <li>Add alt text to all images</li>
          <li>Ensure keyboard navigation works</li>
          <li>Use semantic HTML elements</li>
          <li>Include ARIA labels where needed</li>
          <li>Provide transcripts for audio/video content</li>
        </ul>
        
        <h2>7. Trust Signals</h2>
        <p>Build credibility and reduce friction:</p>
        <ul>
          <li>Display security badges and SSL certificates</li>
          <li>Showcase customer testimonials prominently</li>
          <li>Include trust logos (awards, certifications, partnerships)</li>
          <li>Show real photos of your team</li>
          <li>Display contact information clearly</li>
          <li>Add social proof (reviews, case studies, client logos)</li>
        </ul>
        
        <h2>8. Modern Design Trends for 2025</h2>
        <p>Stay current without sacrificing usability:</p>
        <ul>
          <li><strong>Minimalism:</strong> Clean, uncluttered designs</li>
          <li><strong>Bold typography:</strong> Large, impactful headlines</li>
          <li><strong>Dark mode options:</strong> Reduce eye strain</li>
          <li><strong>Micro-interactions:</strong> Subtle animations for engagement</li>
          <li><strong>Personalization:</strong> Dynamic content based on user behavior</li>
          <li><strong>Sustainable design:</strong> Eco-friendly, optimized code</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>Great web design in 2025 isn't about following every trend—it's about creating a seamless, accessible, and conversion-focused experience for your users. Prioritize speed, mobile optimization, and clear user paths. Test continuously, gather user feedback, and iterate. Your website should work as hard as you do to grow your business.</p>
      `
    },
    {
      title: "Content Marketing Strategy That Works",
      excerpt: "Build a content marketing strategy that drives traffic, engages audiences, and generates leads. Includes templates and actionable tips.",
      category: "Content Marketing",
      date: "January 5, 2025",
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop",
      content: `
        <h2>Introduction</h2>
        <p>Content marketing generates 3x more leads than traditional marketing while costing 62% less. However, creating content without strategy is like driving without a map—you'll burn resources without reaching your destination. This guide will help you build a content marketing strategy that delivers measurable results.</p>
        
        <h2>1. Define Clear Goals</h2>
        <p>Start with specific, measurable objectives:</p>
        <ul>
          <li><strong>Brand awareness:</strong> Increase website traffic by 50%</li>
          <li><strong>Lead generation:</strong> Generate 100 qualified leads per month</li>
          <li><strong>Customer retention:</strong> Reduce churn by 20%</li>
          <li><strong>Thought leadership:</strong> Publish 12 industry insights pieces</li>
          <li>Align content goals with business objectives</li>
        </ul>
        
        <h2>2. Understand Your Audience</h2>
        <p>Create detailed buyer personas:</p>
        <ul>
          <li><strong>Demographics:</strong> Age, location, job title, income</li>
          <li><strong>Pain points:</strong> What problems do they face?</li>
          <li><strong>Goals:</strong> What are they trying to achieve?</li>
          <li><strong>Content preferences:</strong> How do they consume information?</li>
          <li><strong>Buying journey:</strong> What stage are they in?</li>
        </ul>
        
        <h2>3. Conduct Content Audit</h2>
        <p>Assess your existing content:</p>
        <ul>
          <li>Inventory all current content assets</li>
          <li>Identify top-performing content</li>
          <li>Find content gaps and opportunities</li>
          <li>Update or remove outdated content</li>
          <li>Analyze competitor content strategies</li>
        </ul>
        
        <h2>4. Choose Your Content Types</h2>
        <p>Diversify your content mix:</p>
        <ul>
          <li><strong>Blog posts:</strong> Educational articles, how-to guides</li>
          <li><strong>Videos:</strong> Tutorials, product demos, testimonials</li>
          <li><strong>Infographics:</strong> Visual data and processes</li>
          <li><strong>Case studies:</strong> Client success stories</li>
          <li><strong>Ebooks/Whitepapers:</strong> In-depth resources</li>
          <li><strong>Podcasts:</strong> Industry interviews and discussions</li>
          <li><strong>Social media:</strong> Short-form, engaging content</li>
        </ul>
        
        <h2>5. Develop Content Pillars</h2>
        <p>Organize content around core themes:</p>
        <ul>
          <li>Identify 3-5 main topics relevant to your audience</li>
          <li>Create pillar pages for comprehensive coverage</li>
          <li>Build cluster content that links to pillars</li>
          <li>Establish topical authority in your niche</li>
          <li>Ensure consistency across all content</li>
        </ul>
        
        <h2>6. Create an Editorial Calendar</h2>
        <p>Plan and schedule content production:</p>
        <ul>
          <li>Map content to buyer journey stages</li>
          <li>Schedule content around key dates and events</li>
          <li>Balance different content types</li>
          <li>Assign responsibilities and deadlines</li>
          <li>Include promotion and distribution plans</li>
          <li>Build in flexibility for timely topics</li>
        </ul>
        
        <h2>7. Optimize for Search and Users</h2>
        <p>Make content discoverable and valuable:</p>
        <ul>
          <li>Conduct keyword research for each piece</li>
          <li>Write compelling headlines and meta descriptions</li>
          <li>Use header tags (H1, H2, H3) properly</li>
          <li>Include internal and external links</li>
          <li>Add relevant images with alt text</li>
          <li>Ensure content is scannable and readable</li>
        </ul>
        
        <h2>8. Distribution and Promotion</h2>
        <p>Create content, but also ensure it reaches your audience:</p>
        <ul>
          <li><strong>Owned channels:</strong> Website, email list, social media</li>
          <li><strong>Earned channels:</strong> PR, backlinks, shares</li>
          <li><strong>Paid channels:</strong> Social ads, sponsored content</li>
          <li>Repurpose content across multiple channels</li>
          <li>Engage with communities and forums</li>
          <li>Leverage employee advocacy</li>
        </ul>
        
        <h2>9. Measure and Analyze</h2>
        <p>Track performance against your goals:</p>
        <ul>
          <li><strong>Traffic metrics:</strong> Sessions, page views, time on page</li>
          <li><strong>Engagement:</strong> Comments, shares, bounce rate</li>
          <li><strong>Conversions:</strong> Leads, sign-ups, sales</li>
          <li><strong>SEO:</strong> Rankings, organic traffic, backlinks</li>
          <li>Use Google Analytics, Search Console, and content platforms</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>A successful content marketing strategy requires planning, consistency, and continuous optimization. Focus on creating genuinely valuable content for your audience, distribute it effectively, and measure results to improve over time. Remember: quality beats quantity every time. Start small, learn what resonates with your audience, and scale what works.</p>
      `
    },
    {
      title: "Local SEO: Complete Guide for 2025",
      excerpt: "Dominate local search results with our step-by-step guide to local SEO. Perfect for businesses targeting specific geographic areas.",
      category: "SEO",
      date: "January 3, 2025",
      readTime: "11 min read",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&auto=format&fit=crop",
      content: `
        <h2>Introduction</h2>
        <p>46% of all Google searches have local intent, and 76% of people who search for something nearby visit a business within 24 hours. If you run a local business, local SEO is not optional—it's essential. This comprehensive guide will show you how to dominate local search results and attract more customers.</p>
        
        <h2>1. Google Business Profile Optimization</h2>
        <p>Your Google Business Profile is the foundation of local SEO:</p>
        <ul>
          <li>Claim and verify your business listing</li>
          <li>Complete every section of your profile</li>
          <li>Choose the most specific business categories</li>
          <li>Add high-quality photos (interior, exterior, products, team)</li>
          <li>Write a compelling business description with keywords</li>
          <li>Keep hours updated, especially for holidays</li>
          <li>Add attributes (wheelchair accessible, free Wi-Fi, etc.)</li>
          <li>Create posts regularly (offers, events, updates)</li>
        </ul>
        
        <h2>2. Reviews Management</h2>
        <p>Reviews heavily influence local rankings and conversions:</p>
        <ul>
          <li>Ask satisfied customers for reviews</li>
          <li>Respond to all reviews within 24 hours</li>
          <li>Address negative reviews professionally</li>
          <li>Include keywords naturally in responses</li>
          <li>Make review requests part of your process</li>
          <li>Encourage reviews across multiple platforms</li>
          <li>Never buy fake reviews (Google will penalize you)</li>
        </ul>
        
        <h2>3. Local Keyword Research</h2>
        <p>Target keywords with local intent:</p>
        <ul>
          <li>"[service] near me"</li>
          <li>"[service] in [city]"</li>
          <li>"best [service] [city]"</li>
          <li>"[service] [neighborhood]"</li>
          <li>Use Google Keyword Planner and local search data</li>
          <li>Include neighborhood and landmark terms</li>
        </ul>
        
        <h2>4. On-Page Local SEO</h2>
        <p>Optimize your website for local searches:</p>
        <ul>
          <li><strong>NAP consistency:</strong> Name, Address, Phone identical everywhere</li>
          <li><strong>Title tags:</strong> Include location + primary keyword</li>
          <li><strong>Meta descriptions:</strong> Mention location and services</li>
          <li><strong>H1 tags:</strong> Include geo-targeted keywords</li>
          <li><strong>Content:</strong> Create location-specific pages</li>
          <li><strong>Schema markup:</strong> Add LocalBusiness structured data</li>
          <li><strong>Embed Google Map:</strong> Add map to contact page</li>
        </ul>
        
        <h2>5. Local Citations</h2>
        <p>Build consistent business listings across the web:</p>
        <ul>
          <li><strong>Major directories:</strong> Yelp, Yellow Pages, Bing Places</li>
          <li><strong>Industry directories:</strong> Relevant to your business type</li>
          <li><strong>Local directories:</strong> Chamber of Commerce, local blogs</li>
          <li>Ensure NAP consistency across all citations</li>
          <li>Remove duplicate listings</li>
          <li>Update outdated information</li>
        </ul>
        
        <h2>6. Local Link Building</h2>
        <p>Earn quality backlinks from local sources:</p>
        <ul>
          <li>Sponsor local events or charities</li>
          <li>Join local business associations</li>
          <li>Get featured in local news and blogs</li>
          <li>Create shareable local content (guides, resources)</li>
          <li>Partner with complementary local businesses</li>
          <li>Participate in community events</li>
        </ul>
        
        <h2>7. Location Pages</h2>
        <p>Create dedicated pages for each location:</p>
        <ul>
          <li>Unique content for each location (no duplicates)</li>
          <li>Include location-specific keywords</li>
          <li>Add local testimonials and case studies</li>
          <li>Embed location-specific Google Map</li>
          <li>List location-specific services or products</li>
          <li>Include local team members</li>
          <li>Add location-specific contact forms</li>
        </ul>
        
        <h2>8. Mobile Optimization</h2>
        <p>Most local searches happen on mobile:</p>
        <ul>
          <li>Ensure responsive design</li>
          <li>Make phone numbers click-to-call</li>
          <li>Speed up mobile load times</li>
          <li>Create easy-to-use mobile navigation</li>
          <li>Add driving directions functionality</li>
        </ul>
        
        <h2>9. Content Marketing for Local</h2>
        <p>Create content that resonates locally:</p>
        <ul>
          <li>Write about local events and news</li>
          <li>Create area guides and resources</li>
          <li>Feature local customer stories</li>
          <li>Answer local-specific questions</li>
          <li>Share local industry insights</li>
        </ul>
        
        <h2>10. Track and Measure</h2>
        <p>Monitor your local SEO performance:</p>
        <ul>
          <li>Google Business Profile insights</li>
          <li>Local ranking tracking tools</li>
          <li>Google Analytics (location data)</li>
          <li>Call tracking for phone inquiries</li>
          <li>Review growth and ratings</li>
          <li>Website traffic from local searches</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>Local SEO is a powerful way to attract customers actively searching for your services in your area. Focus on Google Business Profile optimization, gathering reviews, maintaining NAP consistency, and creating location-specific content. Local SEO takes time, but the results—high-intent customers finding you at the exact moment they need your services—make it worth the investment.</p>
      `
    },
    {
      title: "Building Effective Email Funnels",
      excerpt: "Create high-converting email funnels that nurture leads and drive sales. Step-by-step guide with templates and automation strategies.",
      category: "Email Marketing",
      date: "January 1, 2025",
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?w=800&auto=format&fit=crop",
      content: `
        <h2>Introduction</h2>
        <p>Email funnels are automated sequences that guide subscribers from initial interest to becoming customers—and beyond. A well-designed email funnel can generate consistent revenue on autopilot. This guide will show you how to build high-converting email funnels for any business.</p>
        
        <h2>1. Understanding the Email Funnel Structure</h2>
        <p>Most effective funnels follow this framework:</p>
        <ul>
          <li><strong>Awareness:</strong> Welcome and introduction emails</li>
          <li><strong>Interest:</strong> Educational content and value-building</li>
          <li><strong>Consideration:</strong> Product/service presentations</li>
          <li><strong>Conversion:</strong> Offers and calls-to-action</li>
          <li><strong>Retention:</strong> Post-purchase engagement</li>
          <li><strong>Advocacy:</strong> Referral and review requests</li>
        </ul>
        
        <h2>2. Welcome Email Sequence</h2>
        <p>First impressions matter—set the tone:</p>
        <ul>
          <li><strong>Email 1 (Immediate):</strong> Welcome + deliver promised lead magnet</li>
          <li><strong>Email 2 (Day 1):</strong> Share your story, build connection</li>
          <li><strong>Email 3 (Day 3):</strong> Provide quick win or valuable tip</li>
          <li><strong>Email 4 (Day 5):</strong> Address common pain points</li>
          <li><strong>Email 5 (Day 7):</strong> Soft sell or next steps</li>
        </ul>
        
        <h2>3. Lead Nurture Funnel</h2>
        <p>Build trust and demonstrate value:</p>
        <ul>
          <li>Share educational content (how-to guides, tips)</li>
          <li>Provide case studies and success stories</li>
          <li>Address objections and FAQs</li>
          <li>Showcase social proof</li>
          <li>Gradually introduce your solution</li>
          <li>Segment based on engagement</li>
        </ul>
        
        <h2>4. Sales Funnel</h2>
        <p>Convert interested prospects into customers:</p>
        <ul>
          <li><strong>Email 1:</strong> Problem identification and agitation</li>
          <li><strong>Email 2:</strong> Introduce your solution</li>
          <li><strong>Email 3:</strong> Features and benefits breakdown</li>
          <li><strong>Email 4:</strong> Social proof and testimonials</li>
          <li><strong>Email 5:</strong> Handle objections</li>
          <li><strong>Email 6:</strong> Limited-time offer or incentive</li>
          <li><strong>Email 7:</strong> Final call to action with urgency</li>
        </ul>
        
        <h2>5. Cart Abandonment Funnel</h2>
        <p>Recover lost sales automatically:</p>
        <ul>
          <li><strong>Email 1 (1 hour):</strong> Friendly reminder about cart items</li>
          <li><strong>Email 2 (24 hours):</strong> Address potential concerns, add testimonials</li>
          <li><strong>Email 3 (48 hours):</strong> Create urgency (limited stock, expiring discount)</li>
          <li>Include product images and direct cart link</li>
          <li>Offer assistance via live chat or phone</li>
        </ul>
        
        <h2>6. Post-Purchase Funnel</h2>
        <p>Delight customers and encourage repeat business:</p>
        <ul>
          <li><strong>Email 1 (Immediate):</strong> Order confirmation and thank you</li>
          <li><strong>Email 2 (1 day):</strong> Shipping notification and tracking</li>
          <li><strong>Email 3 (Delivery + 3 days):</strong> Usage tips and best practices</li>
          <li><strong>Email 4 (2 weeks):</strong> Request review or feedback</li>
          <li><strong>Email 5 (30 days):</strong> Related product recommendations</li>
          <li><strong>Email 6 (60 days):</strong> Replenishment or upgrade offer</li>
        </ul>
        
        <h2>7. Re-engagement Funnel</h2>
        <p>Win back inactive subscribers:</p>
        <ul>
          <li><strong>Email 1:</strong> "We miss you" message with value</li>
          <li><strong>Email 2:</strong> Exclusive offer or resource</li>
          <li><strong>Email 3:</strong> Ask for feedback on preferences</li>
          <li><strong>Email 4:</strong> Last chance before unsubscribe</li>
          <li>Clean your list of non-responsive subscribers</li>
        </ul>
        
        <h2>8. Segmentation Strategies</h2>
        <p>Personalize funnels based on subscriber data:</p>
        <ul>
          <li><strong>Behavior:</strong> Purchase history, email engagement, website activity</li>
          <li><strong>Demographics:</strong> Location, industry, company size</li>
          <li><strong>Psychographics:</strong> Interests, pain points, goals</li>
          <li><strong>Customer journey:</strong> New lead, prospect, customer, advocate</li>
          <li>Create unique funnel paths for each segment</li>
        </ul>
        
        <h2>9. Optimization Techniques</h2>
        <p>Continuously improve funnel performance:</p>
        <ul>
          <li>A/B test subject lines, content, and CTAs</li>
          <li>Analyze open rates, click rates, and conversions</li>
          <li>Test email timing and frequency</li>
          <li>Monitor unsubscribe rates by sequence</li>
          <li>Use heatmaps to see where people click</li>
          <li>Track revenue per email and per funnel</li>
        </ul>
        
        <h2>10. Email Funnel Best Practices</h2>
        <p>Keys to funnel success:</p>
        <ul>
          <li>Start with clear goals and metrics</li>
          <li>Map out the complete customer journey</li>
          <li>Write conversationally, not formally</li>
          <li>Focus on benefits, not features</li>
          <li>Include clear, single call-to-action</li>
          <li>Optimize for mobile devices</li>
          <li>Use automation platforms (Mailchimp, ConvertKit, ActiveCampaign)</li>
          <li>Monitor and optimize regularly</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>Email funnels automate your relationship-building and sales processes, working 24/7 to nurture leads and generate revenue. Start with a simple welcome sequence, then expand into more sophisticated funnels as you learn what resonates with your audience. The key is to provide value at every stage, segment your audience for relevance, and continuously test and optimize. Done right, email funnels become your most profitable marketing asset.</p>
      `
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-poppins">Blogs</h1>
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
                variant={selectedCategory === category ? "default" : "outline"}
                className={selectedCategory === category ? "btn-gradient" : ""}
                onClick={() => setSelectedCategory(category)}
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
            {blogPosts
              .filter(post => selectedCategory === "All" || post.category === selectedCategory)
              .map((post, index) => (
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
