import Link from 'next/link'

export default function BlogContainer(){
    return (
        <div>
            <h1>Blog Container</h1>

            <Link href="/blog/1">Go to Blog 1</Link>
            <br />
            <Link href="/blog/2">Go to Blog 2</Link>
        </div>
    )
}