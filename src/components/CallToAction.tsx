export default function CallToAction() {
  return (
    <div className="flex flex-col">
      <div className="max-w-full lg:max-w-[313px] mb-8 order-2 lg:order-1">
        <button className="bg-[#FC004E] text-white font-bold font-urbanist py-2 px-8 rounded-lg text-lg rounded-2.5 w-full  shadow-[2px_2px_10px_0px_#00E7F9]">
          GET STARTED
          <svg className="inline-block ml-1 relative bottom-0.5" xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#f5f5f5" viewBox="0 0 256 256"><path d="M184.49,136.49l-80,80a12,12,0,0,1-17-17L159,128,87.51,56.49a12,12,0,1,1,17-17l80,80A12,12,0,0,1,184.49,136.49Z"></path></svg>
        </button>
        <p className="text-sm text-center text-white mt-2">1-minute quiz for personalized Insights</p>
      </div>
      <div className="text-xs text-[#ABABAB] space-y-2 order-1 lg:order-2 text-center lg:text-left">
        <p>By clicking "Get Started", you agree with Terms and Conditions, Privacy Policy, Subscription Terms</p>
        <p className="text-[10px] mb-10">Fametonic 2025 ©All Rights Reserved.</p>
      </div>
    </div>
  );
} 