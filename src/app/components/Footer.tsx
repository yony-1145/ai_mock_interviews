'use client'

import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t mt-24 py-6 text-center text-sm text-gray-500">
      <p>
        © 2025{' '}
        <a
          href="https://github.com/yony-1145/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-indigo-600"
        >
          yony-1145
        </a>
        . All rights reserved.
        <Link href={"https://github.com/yony-1145"}>
          <Image src={"/githubig.png"} alt="Logo" width={40} height={40} className="inline-block ml-2 bg-white" />
        </Link>
        <Link href={"https://www.facebook.com/profile.php?id=100086359932833"}>
          <Image src={"/facebook.png"} alt="Logo" width={15} height={15} className="inline-block ml-2 bg-white" />
        </Link>
      </p>
      <p>
        Based on a tutorial by{' '}
        <a
          href="https://github.com/adrianhajdin/ai_mock_interviews"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-indigo-600"
        >
          JavaScript Mastery
        </a>
        .
      </p>
      <p>
        Source:&nbsp;
        <a
          href="https://github.com/adrianhajdin/project-ai-saas"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-indigo-600"
        >
          github.com/adrianhajdin/project-ai-saas
        </a>
      </p>
    </footer>
  )
}
