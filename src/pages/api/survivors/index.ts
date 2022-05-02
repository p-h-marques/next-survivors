import { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '../../../utils/mongodb';

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<boolean> => {
  try {
    if (req.method === 'GET') {
      const client = await clientPromise;
      const database = client.db('survivors');
      const data = await database.collection('survivors').find({}).toArray();

      res.status(200).json(data);
      return true;
    }

    res.status(405).json({ statusCode: 405, message: 'Method now allowed' });
    return false;
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
    return false;
  }
};

export default handler;
