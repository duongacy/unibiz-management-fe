import type { NextApiRequest, NextApiResponse } from 'next'
import data from './data.json'
import { BE_Post } from './types'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<BE_Post[] | null>,
) {
  try {
    // Only allow GET requests
    if (req.method !== 'GET') {
      res.status(405).json(null)
      return
    }
    // Respond with the post data
    res.status(200).json(data)
  } catch (error) {
    // Handle any errors
    res.status(500).json(null)
  }
}
