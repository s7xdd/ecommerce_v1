import Image from "next/image";
import Link from "next/link";

const Collection = () => {
  return (
    <section>
      <div className="mx-auto lg:w-9/12 px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <header className="text-center">
          <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
            New Collection
          </h2>

          <p className="mx-auto mt-4 max-w-md text-gray-500">
            For unique and stylish clothing, shoes and accessories
          </p>
        </header>

        <ul className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3">
          <li>
            <Link href={"/category/Men"} className="group relative block">
              <Image
                height={300}
                width={300}
                src="https://images.unsplash.com/photo-1540924782561-3fc182603b86?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90 rounded-md"
              />

              <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                <h3 className="text-xl font-medium text-white">
                  {"Men's Collection"}
                </h3>

                <span className="mt-1.5 inline-block bg-white px-5 py-3 text-xs font-medium uppercase tracking-wide text-black rounded">
                  Shop Now
                </span>
              </div>
            </Link>
          </li>

          <li>
            <Link href={"/category/Kids"} className="group relative block">
              <Image
                height={300}
                width={300}
                src="https://images.unsplash.com/photo-1534880786429-7cb3199b7b0f?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90 rounded-md"
              />

              <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                <h3 className="text-xl font-medium text-white">
                  {"Kids Collection"}
                </h3>

                <span className="mt-1.5 inline-block bg-white px-5 py-3 text-xs font-medium uppercase tracking-wide text-black rounded">
                  Shop Now
                </span>
              </div>
            </Link>
          </li>

          <li className="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
            <Link href={"/category/Women"} className="group relative block">
              <Image
                height={200}
                width={400}
                src="https://images.unsplash.com/photo-1494588024300-e9df7ff98d78?q=80&w=1584&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90 rounded-md"
              />

              <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                <h3 className="text-xl font-medium text-white">
                  {"Women's Collection"}
                </h3>

                <span className="mt-1.5 inline-block bg-white px-5 py-3 text-xs font-medium uppercase tracking-wide text-black rounded">
                  Shop Now
                </span>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Collection;
