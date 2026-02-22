import { HelmetCanvas } from "./components/helmet-canvas";

export default function Home() {
  return (
    <div className="flex min-h-screen py-20 flex-col gap-20 items-center font-sans bg-black">
      <section className="flex flex-col gap-10 py-16 px-6 md:px-10 ">
        <h1 className="font-bold text-4xl">Open AI News Grid</h1>
        <div className="w-fit min-w-100 h-40 border border-white/20 rounded-md p-6 flex flex-col  text-left gap-4">
          <p>All you need to make this work:</p>
          <ul className="list-disc list-inside">
            <li>sticky</li>
            <li>self-start</li>
            <li>top</li>
          </ul>{" "}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 w-full h-full gap-20 lg:gap-4">
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
        <div className="w-fit min-w-100 h-fit border border-white/20 rounded-md p-6 flex flex-col text-left gap-8">
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
    </div>
  );
}
