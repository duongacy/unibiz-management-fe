import type { NextApiRequest, NextApiResponse } from 'next'
import data from '../data.json'
import { BE_Post } from '../types'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<BE_Post | null>,
) {
  try {
    if (req.method !== 'GET') {
      res.status(405).json(null)
      return
    }

    const post = data.find((post) => post.id === Number(req.query.id))
    if (!post) {
      res.status(404).json(null)
      return
    }

    res.status(200).json(post)
  } catch (error) {
    res.status(500).json(null)
  }
}
