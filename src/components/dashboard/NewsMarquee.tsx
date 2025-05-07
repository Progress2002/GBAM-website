import { cn } from "@/lib/utils";

interface NewsMarqueeProps {
  items: string[];
  className?: string;
}

const NewsMarquee: React.FC<NewsMarqueeProps> = ({ items, className }) => {
  return (
    <div className={cn("overflow-hidden bg-gbam-primary py-3", className)}>
      <div
        className="flex whitespace-nowrap animate-marquee"
        style={{ willChange: "transform" }}>
        {[...items, ...items].map((item, index) => (
          <div key={index} className="mx-8 flex items-center flex-shrink-0">
            <span className="inline-block text-lg font-semibold text-white">
              {item}
            </span>
            <span className="mx-4 text-white/80">•</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsMarquee;
