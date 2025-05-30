import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col space-y-24">
      <section className="px-6 lg:px-24 py-4">
        <div className="mt-12 lg:mt-0 flex justify-center"> 
          <Image
            src="/demo.png"
            alt="App Image"
            width={800}
            height={800}
          />
        </div>

        <div className="mt-12 space-y-6 text-center">
          <h1 className="text-5xl font-extrabold leading-tight">
            Get Your Own Interview <br/>
            with AI-powerd
          </h1>
          <Link
            href="/"
            className="inline-block px-8 py-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
          >
            Get Started
          </Link>
        </div>
      </section>

      <section className="space-y-12 px-6 lg:px-24 py-4">
        <div>
          <h2 className="text-center text-5xl font-extrabold leading-tight">
            Core Features
          </h2>
        </div>

        <div className='flex flex-row justify-between space-x-8 mt-12'>
          <Image
            src="/coreft1.png"
            alt='features1'
            width={400}
            height={400}
            />
          
          <div className="text-left leading-tight">
            <h3 className="text-2xl font-bold">
              Generate Your Own Interview with AI
            </h3>
            <p className="text-lg font-normal mt-3">
              Generate interviews dynamically based on your selected themes using AI.
            </p>
          </div>
        </div>

        <div className='flex flex-row justify-between space-x-8 mt-8'>
          <div className="text-left leading-tight">
            <h3 className="text-2xl font-bold">
              Realtime Conversation <br />By Your AI Agent
            </h3>
            <p className="text-lg font-normal mt-3">
              Powered by advanced AI, every response comes instantly—just like in a real interview.
            </p>
          </div>

          <Image
            src="/coreft2.png"
            alt='features1'
            width={400}
            height={400}
          />
        </div>

        <div className='flex flex-row justify-between space-x-8 mt-8'>
          <Image
            src="/coreft3.png"
            alt='features1'
            width={400}
            height={400}
          />

          <div className="text-left leading-tight">
            <h3 className="text-2xl font-bold">
              Keep Track of Your Progress
            </h3>
            <p className="text-lg font-normal mt-3">
              Monitor your performance and stay motivated by tracking your improvement.
            </p>
          </div>
        </div>

      </section>        

      <section>
        <h2 className="text-4xl font-bold text-center mb-12">
          How to Use
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 home-text">
          <div className="space-y-4">
            <div>
              <p className='font-bold text-2xl'>
              Step 1
              </p>
              <p>
                Generate Interview
              </p>
            </div>
            <Image
              src="/HowtoSec1.png"
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
                Get Interview
              </p>
            </div>
            <Image
              src="/HowtoSec2.png"
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
                Get Feedback
              </p>
            </div>
            <Image
              src="/HowtoSec3.png"
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
