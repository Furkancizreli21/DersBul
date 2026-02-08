import HowItWorkTabs from "./HowItWorkTabs";

const HowItWork = () => {
  return (
    <div className="bg-gray-50 py-20 px-4 flex flex-col gap-12">
      <div className="flex flex-col items-center gap-6">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">Nasıl Çalışır?</h1>
      </div>
      <HowItWorkTabs />
    </div>
  );
};

export default HowItWork;
