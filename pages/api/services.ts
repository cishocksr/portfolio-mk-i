import { NextApiRequest, NextApiResponse } from 'next';

import { services } from '../../data/data';

export default (res: NextApiResponse, req: NextApiRequest) => {
  res.status(200).json({ services });
};
