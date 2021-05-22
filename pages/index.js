import Head from 'next/head'
import Link from 'next/link';
import { format, parseISO, add } from 'date-fns';
import { blogPosts } from '../data'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="space-y-4">
        {blogPosts.map((post) => (
          <BlogListItem key={post.slug} {...post} />
        ))}
      </div>

    </div>
  )
}

function BlogListItem({slug,title,date,content}) {
  return (
    <div className="border border-gray-100 shadow hover:shadow-md hover:border-gray-200 rounded-md p-4 transition duration-200 ease-in">
      <div>
        <Link href={`/blog/${slug}`}>
          <a className="font-bold">{title}</a>
        </Link>
      </div>
      <div className="text-gray-600 text-xs">{format(parseISO(date), 'MMM do, uuu')}</div>
      <div>{content}</div>
    </div>
  )
}