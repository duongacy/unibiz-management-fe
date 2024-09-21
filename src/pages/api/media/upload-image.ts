import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ url: string } | null>,
) {
  try {
    // Only allow POST requests
    if (req.method !== 'POST') {
      res.status(405).json(null)
      return
    }
    // Respond with the post data
    res
      .status(200)
      .json({ url: 'http://google-cloud.com/images-' + new Date().getTime() })
  } catch (error) {
    // Handle any errors
    res.status(500).json(null)
  }
}
