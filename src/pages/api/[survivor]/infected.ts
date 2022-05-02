import { ObjectId } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '../../../utils/mongodb';

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<boolean> => {
  console.log(req.query);

  try {
    if (req.method === 'PUT') {
      const client = await clientPromise;
      const database = client.db('survivors');

      await database.collection('survivors').update(
        {
          _id: new ObjectId(req.query.survivor as string),
        },
        {
          $set: {
            isInfected: req.query.value === 'true',
          },
        },
        {
          multi: false,
        },
      );

      const data = await database
        .collection('survivors')
        .find({ _id: new ObjectId(req.query.survivor as string) })
        .toArray();

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
