// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { allPostsQuery } from '@/utils/queries'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if(req.method === 'GET') {
    const query = allPostsQuery();

    
  }
}
