import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const FreeAuditForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    website: "",
    email: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Request Submitted!",
      description: "We'll send your free website audit within 24 hours."
    });

    setFormData({ website: "", email: "" });
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Search className="text-white" size={32} />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-poppins">
            Get Your Free Website Audit
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Discover how your website performs and get actionable insights to improve your online presence
          </p>
          
          <form onSubmit={handleSubmit} className="bg-card p-8 rounded-2xl shadow-lg">
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <Input
                  type="url"
                  placeholder="Your Website URL"
                  value={formData.website}
                  onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                  required
                  className="h-12"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="h-12"
                />
              </div>
            </div>
            <Button type="submit" size="lg" className="btn-gradient w-full md:w-auto px-12">
              Get My Free Audit
            </Button>
          </form>

          <p className="text-sm text-muted-foreground mt-4">
            No credit card required • Results delivered within 24 hours
          </p>
        </div>
      </div>
    </section>
  );
};

export default FreeAuditForm;