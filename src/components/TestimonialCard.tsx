import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  company: string;
  text: string;
  rating: number;
}

const TestimonialCard = ({ name, company, text, rating }: TestimonialCardProps) => {
  return (
    <Card className="border-0 shadow-lg">
      <CardContent className="p-6">
        <div className="flex mb-3">
          {Array.from({ length: rating }).map((_, i) => (
            <Star key={i} size={18} className="text-yellow-400 fill-yellow-400" />
          ))}
        </div>
        <p className="text-muted-foreground mb-4 italic">{text}</p>
        <div>
          <p className="font-semibold font-poppins">{name}</p>
          <p className="text-sm text-muted-foreground">{company}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
