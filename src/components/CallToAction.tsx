interface CallToActionProps {
  isMobile?: boolean;
}

export default function CallToAction({ isMobile = false }: CallToActionProps) {
  return (
    <div>
      <button className={`gradient-bg glow-effect text-white font-bold py-4 px-8 rounded-lg text-lg hover:scale-105 transition-transform ${isMobile ? 'w-full' : ''}`}>
        GET STARTED &gt;
      </button>
      <p className="text-sm text-gray-400 mt-2">1-minute quiz for personalized Insights</p>
    </div>
  );
} 