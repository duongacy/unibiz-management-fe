import type { NextApiRequest, NextApiResponse } from 'next'
import { BE_SignInPayload, BE_SignInResponse } from './types'

export default async function POST(
  req: NextApiRequest,
  res: NextApiResponse<BE_SignInResponse | null>,
) {
  try {
    if (req.method !== 'POST') {
      res.status(405).json(null)
      return
    }

    const singInPayload: BE_SignInPayload = JSON.parse(
      Object.keys(req.body)?.[0] || '{}',
    )

    if (
      singInPayload.username === 'admin' &&
      singInPayload.password === 'admin'
    ) {
      res.status(200).json({ token: '12345678' })
      return
    }
    res.status(400).json(null)
  } catch (error) {
    res.status(500).json(null)
  }
}
