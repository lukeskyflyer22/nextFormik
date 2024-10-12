import Link from 'next/link';

export default function Blog({params}: {params: {blogId: string}}) {
    return (
        <div>
            <h1>Blog {params.blogId}</h1>
            <Link href={'/blog'} >Go back to Blog Container</Link>
        </div>
    )
}