// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { quizData } from '@/data/quiz';
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).json(quizData);
  }
}
