import type { NextApiRequest, NextApiResponse } from 'next';
import { groq } from 'next-sanity';
import { Experience } from '../../typings';
import { sanityClient } from '../../sanity';

const experience = groq`*[_type=='experience']`;

type Data = {
  experiences: Experience[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const experiences: Experience[] = await sanityClient.fetch(experience);

  res.status(200).json({ experiences });
}
