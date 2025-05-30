import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col">
      <section className="px-6 lg:px-24 py-12 max-w-screen-xl mx-auto">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          <div className="text-center lg:text-left space-y-6">
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
              Get Your Own Interview <br />
              with AI-powered
            </h1>
            <Link
              href="/"
              className="inline-block px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
            >
              Get Started
            </Link>
          </div>

          <div className="flex justify-center">
            <Image
              src="/demo.png"
              alt="App Image"
              width={600}
              height={600}
              className="mx-auto"
            />
          </div>
        </div>
      </section>

      <section className="my-20 px-6 lg:px-24 py-12 max-w-screen-xl mx-auto">
        <h2 className="text-center text-5xl font-extrabold leading-tight mb-16">
          Three Core Features
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <Image
            src="/coreft1.png"
            alt="features1"
            width={400}
            height={400}
            className="mx-auto"
          />
          <div className="text-center lg:text-left leading-tight">
            <h3 className="text-3xl font-bold">1. Generate Your Own Interview with AI</h3>
            <p className="hidden md:block text-2xl font-normal mt-3">
              Generate interviews dynamically based on your selected themes using AI.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="text-center lg:text-left leading-tight order-2 lg:order-1">
            <h3 className="text-3xl font-bold">2. Realtime Conversation</h3>
            <p className="hidden md:block text-2xl font-normal mt-3">
              Powered by advanced AI, every response comes instantly—just like in a real interview.
            </p>
          </div>

          <Image
            src="/coreft2.png"
            alt="features2"
            width={400}
            height={400}
            className="mx-auto order-1 lg:order-2"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <Image
            src="/coreft3.png"
            alt="features3"
            width={400}
            height={400}
            className="mx-auto"
          />
          <div className="text-center lg:text-left leading-tight">
            <h3 className="text-3xl font-bold">3. Keep Track of Your Progress</h3>
            <p className="hidden md:block text-2xl font-normal mt-3">
              Monitor your performance and stay motivated by tracking your improvement.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="my-12 text-5xl font-bold text-center">
          How to Use
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 home-text">
          <div className="space-y-4">
            <div>
              <p className='font-bold text-2xl'>
              Step 1
              </p>
              <p>
                Generate a Interview
              </p>
            </div>
            <Image
              src="/howto1.png"
              alt="Step 1"
              width={400}
              height={400}
              className="mx-auto"
            />
          </div>

          <div className="space-y-4">
            <div>
              <p className='font-bold text-2xl'>
                Step 2
              </p>
              <p>
                Take a Interview
              </p>
            </div>
            <Image
              src="/howto2.png"
              alt="Step 2"
              width={400}
              height={400}
              className="mx-auto"
            />
          </div>

          <div className="space-y-4">
            <div>
              <p className='font-bold text-2xl'>
                Step 3
              </p>
              <p>
                Get a Feedback
              </p>
            </div>
            <Image
              src="/howto3.png"
              alt="Step 3"
              width={400}
              height={400}
              className="mx-auto"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
