// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next";

// export default function handler(req: any, res: any) { //vale la pena muchas veces en la vida real, pero hayq  evitarlo si se puede
// export default function handler(req: NextApiRequest, res: NextApiResponse<string>) {

type Data = {
  name: string;
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  res.status(200).json({ name: 'Gian C' })
}
