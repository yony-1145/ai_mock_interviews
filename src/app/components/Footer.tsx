'use client'

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
