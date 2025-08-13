const features = [
  "Start growing your influence right away—no waiting required!",
  "Create viral TikToks and Reels step by step with easy-to-follow lessons",
  "Use a Personal AI Worker to boost your content",
  "Learn from expert-led courses designed for aspiring influencers"
];

export default function Features() {
  return (
    <div className="space-y-3 mb-7">
      {features.map((feature, index) => (
        <div key={index} className="flex items-start gap-3 text-left lg:text-left">
          <span className="text-yellow-400 text-lg">✨</span>
          <p className={`text-base ${index === 0 ? 'font-figtree' : ''}`}>{feature}</p>
        </div>
      ))}
    </div>
  )
} 