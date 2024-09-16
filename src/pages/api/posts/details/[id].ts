import type { NextApiRequest, NextApiResponse } from 'next'
import data from '../data.json'
import { BE_Post } from '../types'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<BE_Post | null>,
) {
  try {
    // Only allow GET requests
    if (req.method !== 'GET') {
      res.status(405).json(null)
      return
    }

    // Find the post by id
    const post = data.find((post) => post.id === Number(req.query.id))
    if (post) {
      res.status(200).json(post)
      return
    }

    // If the post wasn't found, return 404
    res.status(404).json(null)
  } catch (error) {
    // Handle any errors
    res.status(500).json(null)
  }
}
