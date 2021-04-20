import { NextApiRequest, NextApiResponse } from "next";

import { services } from "../../helpers/data";

export default (res: NextApiResponse, req: NextApiRequest) => {
  res.status(200).json({ services });
};
