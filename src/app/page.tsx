import { lusitana, roboto } from 'src/ui/fonts';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div
        className='h-0 w-0 border-b-[30px] border-l-[20px] border-r-[20px] border-b-black border-l-transparent border-r-transparent'
      >
        <p
          className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}
        >
          <strong className={roboto.className}>Welcome to Acme.</strong> This is the example for the{' '}
          <a href='https://nextjs.org/learn/' className='text-blue-500'>
            Next.js Learn Course
          </a>
          , brought to you by Vercel.
        </p>
      </div>
    </main>
  );
}
