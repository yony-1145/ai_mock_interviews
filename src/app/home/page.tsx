import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col">
      <section className="flex flex-col items-center justify-between flex-1 px-6 lg:px-24 py-16">

        <div className="flex-1 mt-12 lg:mt-0 flex justify-center"> 
          <Image
            src="/demo.png"
            alt="App Image"
            width={800}
            height={800}
          />
        </div>

        <div className="flex-1 mt-12 space-y-6 text-center">
          <h1 className="text-5xl font-extrabold leading-tight">
            Get Your Own Interview with AI-powerd
          </h1>
          <Link
            href="/sign-up"
            className="inline-block px-8 py-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
          >
            Get Started
          </Link>
        </div>

      </section>

    </main>
  );
}
