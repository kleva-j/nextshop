import Image from 'next/image';

export default function ProductListsCategoriesGrid() {
  return (
    <>
      {/* Product List Section: Categories Grid */}
      <div className="bg-white dark:bg-gray-900 dark:text-gray-100">
        <div className="container mx-auto px-4 py-16 lg:px-8 lg:py-32 xl:max-w-7xl">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            <a
              href="#"
              className="group relative block overflow-hidden transition ease-out active:opacity-75 sm:col-span-2 md:col-span-1"
            >
              <Image
                src="https://cdn.tailkit.com/media/placeholders/photo-PDX_a_82obo-700x700.jpg"
                alt="Product Image"
                width={700}
                height={700}
                className="transform transition ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-25 transition ease-out group-hover:bg-opacity-0" />
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <div className="rounded-3xl bg-white bg-opacity-95 px-4 py-3 text-sm font-semibold uppercase tracking-wide transition ease-out group-hover:bg-pink-600 group-hover:text-white dark:border-gray-800 dark:bg-gray-900/90">
                  Electronics
                </div>
              </div>
            </a>
            <a
              href="#"
              className="group relative block overflow-hidden transition ease-out active:opacity-75"
            >
              <Image
                src="https://cdn.tailkit.com/media/placeholders/photo-1SAnrIxw5OY-700x700.jpg"
                alt="Product Image"
                width={700}
                height={700}
                className="transform transition ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-25 transition ease-out group-hover:bg-opacity-0" />
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <div className="rounded-3xl bg-white bg-opacity-95 px-4 py-3 text-sm font-semibold uppercase tracking-wide transition ease-out group-hover:bg-pink-600 group-hover:text-white dark:border-gray-800 dark:bg-gray-900/90">
                  Computers
                </div>
              </div>
            </a>
            <a
              href="#"
              className="group relative block overflow-hidden transition ease-out active:opacity-75"
            >
              <Image
                src="https://cdn.tailkit.com/media/placeholders/photo-gUPiTDBdRe4-700x700.jpg"
                alt="Product Image"
                width={700}
                height={700}
                className="transform transition ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-25 transition ease-out group-hover:bg-opacity-0" />
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <div className="rounded-3xl bg-white bg-opacity-95 px-4 py-3 text-sm font-semibold uppercase tracking-wide transition ease-out group-hover:bg-pink-600 group-hover:text-white dark:border-gray-800 dark:bg-gray-900/90">
                  Clothes
                </div>
              </div>
            </a>
            <a
              href="#"
              className="group relative block overflow-hidden transition ease-out active:opacity-75 sm:col-span-2 md:col-span-1"
            >
              <Image
                src="https://cdn.tailkit.com/media/placeholders/photo-ALpEkP29Eys-700x700.jpg"
                alt="Product Image"
                width={700}
                height={700}
                className="transform transition ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-25 transition ease-out group-hover:bg-opacity-0" />
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <div className="rounded-3xl bg-white bg-opacity-95 px-4 py-3 text-sm font-semibold uppercase tracking-wide transition ease-out group-hover:bg-pink-600 group-hover:text-white dark:border-gray-800 dark:bg-gray-900/90">
                  Smart Home
                </div>
              </div>
            </a>
            <a
              href="#"
              className="group relative block overflow-hidden transition ease-out active:opacity-75"
            >
              <Image
                src="https://cdn.tailkit.com/media/placeholders/photo-164_6wVEHfI-700x700.jpg"
                alt="Product Image"
                width={700}
                height={700}
                className="transform transition ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-25 transition ease-out group-hover:bg-opacity-0" />
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <div className="rounded-3xl bg-white bg-opacity-95 px-4 py-3 text-sm font-semibold uppercase tracking-wide transition ease-out group-hover:bg-pink-600 group-hover:text-white dark:border-gray-800 dark:bg-gray-900/90">
                  Shoes
                </div>
              </div>
            </a>
            <a
              href="#"
              className="group relative block overflow-hidden transition ease-out active:opacity-75"
            >
              <Image
                src="https://cdn.tailkit.com/media/placeholders/photo-wW7XbWYoqK8-700x700.jpg"
                alt="Product Image"
                width={700}
                height={700}
                className="transform transition ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-25 transition ease-out group-hover:bg-opacity-0" />
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <div className="rounded-3xl bg-white bg-opacity-95 px-4 py-3 text-sm font-semibold uppercase tracking-wide transition ease-out group-hover:bg-pink-600 group-hover:text-white dark:border-gray-800 dark:bg-gray-900/90">
                  Wearables
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      {/* END Product List Section: Categories Grid */}
    </>
  );
}
