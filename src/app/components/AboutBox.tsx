import Image from "next/image";

export default function AboutBox() {
  return (
    <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] md:w-[903px] mt-40 h-auto md:h-[535px] bg-white shadow-lg rounded-lg overflow-hidden z-10">
      <div className="flex flex-col md:flex-row h-full">
        <div className="w-full md:w-1/2 h-64 md:h-full relative">
          <Image
            src="/img2.jpg"
            alt="Ligia Urroz"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="w-full md:w-1/2 p-8 overflow-y-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            About Ligia Urroz
          </h2>
          <p className="text-gray-700 text-sm md:text-base">
            Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar
            elementum tempus hac tellus libero accumsan. Lorem ipsum dolor sit
            amet consectetur adipiscing elit semper dalar elementum tempus hac
            tellus libero accumsan. Lorem ipsum dolor sit amet consectetur
            adipiscing elit semper dalar tempus hac tellus libero
            accumsan.elementum tempus hac tellus libero accumsan.
          </p>
        </div>
      </div>
    </div>
  );
}
