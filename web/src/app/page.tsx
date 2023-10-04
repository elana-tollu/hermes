import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="mb-64 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
        <Link
          href="/exercise"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        ><h2 className={`mb-3 text-2xl font-semibold`}>
            Hermes{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Practice language exercises.
          </p>
        </Link>
        
      </div>
  )
}
