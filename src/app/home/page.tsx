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
            src="/feature1.png"
            alt='features1'
            width={400}
            height={400}
            />
          
          <div className="text-left leading-tight">
            <h3 className="text-2xl font-bold">
              Make Your Own Interview with AI
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
            src="/feature1.png"
            alt='features1'
            width={400}
            height={400}
          />
        </div>

        <div className='flex flex-row justify-between space-x-8 mt-8'>
          <Image
            src="/feature1.png"
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

      <section className='space-x-12'>
        <div>
          <h2 className="text-center text-5xl font-extrabold leading-tight">
            how to use
          </h2>
        </div>

        <div className='flex flex-row justify-between space-x-8 mt-12'>
          <div>
            <Image
            src="/feature1.png"
            alt='features1'
            width={400}
            height={400}
            />
            <p className="text-center text-lg font-normal mt-3">Generate Interview with your Voice Agent</p>
          </div>

          <div>
            <Image
            src="/feature1.png"
            alt='features1'
            width={400}
            height={400}
            />
            <p className="text-center text-lg font-normal mt-3">Get Interviews</p>
          </div>

          <div>
            <Image
            src="/feature1.png"
            alt='features1'
            width={400}
            height={400}
            />
            <p className="text-center text-lg font-normal mt-3">Get Feedback</p>
          </div>

        </div>
      </section>
    </main>
  );
}
