import Header from '@/app/components/Header'
import { Post } from '@/app/utils/Interface';
import { client } from '@/sanity/lib/client';
import { VT323 } from 'next/font/google';
import React from 'react'

const dateFont = VT323({weight: "400", subsets: ["latin"]})

interface Params {
    params: {
      slug: string;
    },
    // searchParams: {
    //   [key: string]: string | string[] | undefined;
    // },
  }

async function getPost(slug:string) {
    const query = `
    *[_type == "post" && slug.current == "${slug}"][0]  {
    title,
    slug,
    publishedAt,
    excerpt,
    _id,
    tags[]-> {
      _id,
      slug,
      name
      }
}`;

const post = await client.fetch(query);
return post;
    
}

const page =  async ({params}: Params) => {
    console.log(params?.slug, 'parrrrr');
    const post: Post = await getPost(params?.slug);
    console.log(params?.slug, 'parrrrr2');
    console.log(post, 'post');
  return (
    <div>
        <Header title={post?.title} />
        <div className='text-center'>
            <span className={`${dateFont?.className} text-purple-500`}>
                {new Date(post?.publishedAt).toDateString()}
            </span>
        </div>
    </div>
  );
};

export default page
