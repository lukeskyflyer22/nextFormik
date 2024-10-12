import Link from 'next/link'

export default function Home (){
  return (
    <div className='flex flex-col items-center'>
      <h1>Home</h1>
      <p>This is the home page</p>
      <div className='bg-emerald-300 rounded-lg text-center space-x-5 p-5'>
        <Link href="/form" className='hover:underline'> Go to form</Link>
        <Link href="/editingform" className='hover:underline'> Edit your info</Link>
      </div>
    </div>
  )
}