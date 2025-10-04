import { Button } from "@/components/ui/button";
import { ShoppingCart, BookOpen, Video, FileText, Star, Check } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

const Shop = () => {
  const { toast } = useToast();

  const products = [
    {
      id: 1,
      icon: BookOpen,
      title: "Complete SEO Mastery Course",
      description: "Learn professional SEO strategies from beginner to advanced. Master keyword research, technical SEO, link building, and content optimization.",
      price: "₹4,999",
      originalPrice: "₹9,999",
      rating: 4.9,
      reviews: 127,
      features: [
        "15+ hours of video content",
        "Practical exercises & templates",
        "Certificate of completion",
        "Lifetime access",
        "Private community access"
      ]
    },
    {
      id: 2,
      icon: Video,
      title: "PPC Advertising Masterclass",
      description: "Master Google Ads, Facebook Ads, and advanced PPC strategies. Learn to create high-ROI campaigns that convert.",
      price: "₹3,999",
      originalPrice: "₹7,999",
      rating: 4.8,
      reviews: 89,
      features: [
        "12+ hours of training",
        "Real campaign examples",
        "ROI calculator tools",
        "Monthly live Q&A sessions",
        "Campaign templates included"
      ]
    },
    {
      id: 3,
      icon: FileText,
      title: "Social Media Growth Blueprint",
      description: "Complete guide to growing your brand on Instagram, Facebook, LinkedIn, and TikTok. Content strategies that work.",
      price: "₹2,999",
      originalPrice: "₹5,999",
      rating: 5.0,
      reviews: 156,
      features: [
        "10+ hours of content",
        "Content calendar templates",
        "Hashtag research guide",
        "Engagement strategies",
        "Analytics tracking sheets"
      ]
    },
    {
      id: 4,
      icon: BookOpen,
      title: "Digital Marketing Bundle (All 3 Courses)",
      description: "Get all three courses at a massive discount! Complete digital marketing education from SEO to PPC to Social Media.",
      price: "₹9,999",
      originalPrice: "₹23,997",
      rating: 5.0,
      reviews: 43,
      features: [
        "Access to all 3 courses",
        "40+ hours of content",
        "All templates & tools",
        "Priority support",
        "Exclusive bonus materials",
        "Save 58%!"
      ]
    }
  ];

  const handleAddToCart = (productTitle: string) => {
    toast({
      title: "Added to Cart!",
      description: `${productTitle} has been added to your cart.`
    });
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-poppins">Digital Marketing Courses</h1>
            <p className="text-xl text-muted-foreground">
              Master digital marketing with our expert-led online courses. Learn at your own pace and transform your career.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {products.map((product) => (
              <div key={product.id} className="bg-card border rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-gradient-to-br from-primary to-accent p-8 text-white">
                  <product.icon size={48} className="mb-4" />
                  <h3 className="text-2xl font-bold mb-2 font-poppins">{product.title}</h3>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} fill={i < Math.floor(product.rating) ? "currentColor" : "none"} />
                      ))}
                    </div>
                    <span className="text-sm">({product.reviews} reviews)</span>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-muted-foreground mb-6">{product.description}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">What's Included:</h4>
                    <ul className="space-y-2">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-start text-sm">
                          <Check className="text-primary mr-2 mt-0.5 flex-shrink-0" size={16} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-3xl font-bold text-primary">{product.price}</span>
                      <span className="text-muted-foreground line-through ml-2">{product.originalPrice}</span>
                    </div>
                  </div>

                  <Button 
                    className="btn-gradient w-full"
                    size="lg"
                    onClick={() => handleAddToCart(product.title)}
                  >
                    <ShoppingCart className="mr-2" size={20} />
                    Add to Cart
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4 font-poppins">Need Custom Training for Your Team?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            We offer customized training programs for businesses. Contact us for corporate packages.
          </p>
          <Button size="lg" className="btn-gradient">
            Contact Us for Corporate Training
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Shop;