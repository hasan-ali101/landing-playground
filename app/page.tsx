import Image from "next/image";
import { HelmetCanvas } from "./components/helmet-canvas";

export default function Home() {
  return (
    <div className="flex py-40 flex-col gap-20 items-center font-sans bg-[#131209] text-white">
      <section className="w-full flex justify-center min-h-screen">
        <div className="border-l border-dashed /border-gray-300/60 h-130 -mt-10 -mr-10 animate-intro opacity-0" />
        <div className="flex w-10/12 flex-col text-center items-center">
          <div className="border-t border-dashed /border-gray-300/60 w-full animate-intro opacity-0" />

          <h1 className="font-bold col-start-2 text-5xl md:text-6xl py-6 col-span-3 px-6">
            The React Framework for the Web
          </h1>

          <div className="border-t border-dashed /border-gray-300/60 w-full animate-intro opacity-0" />

          <div className="py-6 flex w-full justify-center px-6">
            <p className="text-zinc-400 max-w-5xl text-lg lg:text-2xl">
              Used by some of the world's largest companies, Next.js enables you
              to create high-quality web applications with the power of React
              components.
            </p>
          </div>

          <div className="border-t border-dashed /border-gray-300/60 w-full animate-intro opacity-0" />

          <div className="flex">
            <div className="border-l border-dashed /border-gray-300/60 h-full  animate-intro opacity-0" />

            <div className="flex flex-col gap-4 justify-center  p-6">
              <div className="font-medium flex gap-4">
                <button className="border h-fit px-3 md:px-6 py-3 w-fit rounded-md bg-white text-black">
                  Get Started
                </button>
                <button className="border h-fit border-zinc-200/30 px-3 md:px-6 py-3 w-fit rounded-md">
                  Learn More
                </button>
              </div>
              <p className="text-zinc-400 text-sm">
                npx create-next-app@latest
              </p>
            </div>
            <div className="border-l border-dashed /border-gray-300/60 h-full animate-intro opacity-0" />
          </div>

          <div className="border-t border-dashed /border-gray-300/60 w-full animate-intro opacity-0" />
        </div>

        <div className="border-l border-dashed /border-gray-300/60 h-130 -mt-10 -ml-10 animate-intro  opacity-0" />
      </section>

      <section className="flex flex-col gap-10 py-16 px-6 md:px-10 ">
        <h1 className="font-bold text-4xl">Open AI News Grid</h1>
        <div className="grid grid-cols-1 lg:grid-cols-4 w-full h-full gap-y-20 lg:gap-4">
          <div className="col-span-1 lg:col-span-3  lg:sticky lg:top-10 self-start font-medium flex flex-col gap-4">
            <div className="md:aspect-video rounded-lg aspect-4/5 bg-white"></div>
            <p className="text-4xl">News Item 0</p>
            <div className="flex gap-4 text-sm">
              <p>Category</p>
              <p className="text-neutral-400 font-normal">5 min read</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-3 font-medium grid-cols-1 w-full lg:col-span-1 lg:gap-12 lg:grid-cols-1 gap-20 sm:gap-4">
            <div className="col-span-1 flex flex-col gap-2">
              <div className="bg-indigo-300 rounded-lg  aspect-square w-full"></div>
              <p className="text-lg">News Item 1</p>
              <div className="flex gap-4 text-sm">
                <p>Category</p>
                <p className="text-neutral-400 font-normal">5 min read</p>
              </div>
            </div>
            <div className="col-span-1 flex flex-col gap-2">
              <div className="bg-blue-300 rounded-lg aspect-square w-full"></div>
              <p className="text-lg">News Item 2</p>
              <div className="flex gap-4 text-sm">
                <p>Category</p>
                <p className="text-neutral-400 font-normal">3 min read</p>
              </div>
            </div>
            <div className="col-span-1 flex flex-col gap-2">
              <div className="bg-amber-100 rounded-lg aspect-square w-full"></div>
              <p className="text-lg">News Item 3</p>
              <div className="flex gap-4 text-sm">
                <p>Category</p>
                <p className="text-neutral-400 font-normal">8 min read</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-fit md:w-1/2 h-fit border border-white/20 rounded-md p-6 flex flex-col text-left gap-8">
          <p>
            The element has position sticky which means that it anchors itself
            to the viewport at a fixed offset (i.e. top-10) while its container
            continues to move.
          </p>
          <p>
            A sticky element is structurally bound to its parent, and the
            container's total height is dictated by the tallest column. Once the
            bottom of the right-hand column reaches the bottom of the stuck
            left-hand item, the container 'grabs' the stuck item and pulls it
            away.
          </p>
          <p>
            Self start (align-self: flex-start) prevents the sticky item from
            stretching to the height of the tallest column.
          </p>
        </div>
      </section>

      <section className="w-full flex flex-col gap-10 pt-16 border border-white/10">
        <h1 className="font-bold text-4xl text-center -mb-20 lg:mb-0">
          Github Floating 3d Head
        </h1>
        <HelmetCanvas />
      </section>

      <section className="w-full flex flex-col gap-10 lg:items-center px-10 overflow-clip">
        <h1 className="font-bold text-4xl -mb-20 lg:mb-0">
          Cursor app preview
        </h1>
        <div className="w-full max-w-250 flex justify-center items-center rounded-md p-10 relative min-w-200 aspect-video bg-orange-100">
          <Image
            src="/background.jpg"
            alt="bg"
            fill={true}
            className="rounded-lg border opacity-70 object-cover"
          />
          <div className="w-11/12 overflow-auto h-11/12 bg-zinc-800 absolute rounded-md">
            <section className="flex flex-col gap-10 py-16 px-6 md:px-10 ">
              <div className="grid grid-cols-1 lg:grid-cols-4 w-full h-full gap-y-20 lg:gap-4">
                <div className="col-span-1 lg:col-span-3  lg:sticky lg:top-10 self-start font-medium flex flex-col gap-4">
                  <div className="md:aspect-video rounded-lg aspect-4/5 bg-white"></div>
                  <p className="text-4xl">News Item 0</p>
                  <div className="flex gap-4 text-sm">
                    <p>Category</p>
                    <p className="text-neutral-400 font-normal">5 min read</p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-3 font-medium grid-cols-1 w-full lg:col-span-1 lg:gap-12 lg:grid-cols-1 gap-20 sm:gap-4">
                  <div className="col-span-1 flex flex-col gap-2">
                    <div className="bg-indigo-300 rounded-lg  aspect-square w-full"></div>
                    <p className="text-lg">News Item 1</p>
                    <div className="flex gap-4 text-sm">
                      <p>Category</p>
                      <p className="text-neutral-400 font-normal">5 min read</p>
                    </div>
                  </div>
                  <div className="col-span-1 flex flex-col gap-2">
                    <div className="bg-blue-300 rounded-lg aspect-square w-full"></div>
                    <p className="text-lg">News Item 2</p>
                    <div className="flex gap-4 text-sm">
                      <p>Category</p>
                      <p className="text-neutral-400 font-normal">3 min read</p>
                    </div>
                  </div>
                  <div className="col-span-1 flex flex-col gap-2">
                    <div className="bg-amber-100 rounded-lg aspect-square w-full"></div>
                    <p className="text-lg">News Item 3</p>
                    <div className="flex gap-4 text-sm">
                      <p>Category</p>
                      <p className="text-neutral-400 font-normal">8 min read</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
