import Image from "next/image";

export default function AboutBox() {
  return (
    <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] md:w-[903px] mt-40 h-auto md:h-[535px] bg-white shadow-lg rounded-lg overflow-hidden z-10">
      <div className="flex flex-col md:flex-row h-full">
        <div className="w-full md:w-1/2 h-64 md:h-full relative">
          <Image
            src="/women_with_guitar.png"
            alt="Ligia Urroz"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="w-full md:w-1/2 p-8 overflow-y-auto gap-y-3 mt-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-black">
            Acerca de
          </h2>
          <p className="text-gray-700 text-sm md:text-base">
            Autora y promotora de la lectura. Guitarrista en una banda de rock.
          </p>

          <h2 className="text-[#A1A1A1] text-sm md:text-base mt-6">
            NÚMERO DE PUBLICACIONES
          </h2>
          <p className="text-black text-sm md:text-base">11+</p>

          <h2 className="text-[#A1A1A1] text-sm md:text-base mt-6">
            PROYECTOS
          </h2>
          <p className="text-black text-sm md:text-base">50+</p>

          <h2 className="text-[#A1A1A1] text-sm md:text-base mt-6">CONTACTO</h2>
          <p className="text-black text-sm md:text-base">
            ligia@ligiaurroz.com
          </p>
        </div>
      </div>
    </div>
  );
}
