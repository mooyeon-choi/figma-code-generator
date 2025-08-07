const imgImage = "http://localhost:3845/assets/f4778c894624cf4c2c4fa8cad37eaf1ac9efdc95.png";

export default function EmptyLandingSection() {
  return (
    <div className="bg-white flex flex-col gap-6 items-center justify-start px-0 py-24 min-h-screen">
      <div className="flex flex-col gap-16 items-start justify-center max-w-[1280px] px-6 py-0 w-full">
        <div className="flex flex-col gap-12 items-center justify-start w-full">
          <div className="flex flex-col gap-5 items-center justify-start max-w-[576px] w-full">
            <div className="font-medium text-sm text-neutral-500">
              Empty section
            </div>
            <h1 className="font-bold text-4xl text-center text-neutral-950 leading-10">
              Empty landing page section
            </h1>
            <p className="font-normal text-base text-center text-neutral-500 leading-6">
              Feel free to utilize this section as a foundational starting point, where you can add your content below.
            </p>
          </div>
          <div 
            className="aspect-[240/135] bg-center bg-cover bg-no-repeat rounded-xl w-full"
            style={{ backgroundImage: `url('${imgImage}')` }}
          />
        </div>
      </div>
    </div>
  );
}