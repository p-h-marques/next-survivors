import { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '../../../utils/mongodb';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const client = await clientPromise;
    const database = client.db('survivors');
    const data = await database.collection('survivors').find({}).toArray();

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default handler;
