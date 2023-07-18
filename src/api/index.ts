import { renderCdkCard } from '../cards/cdk-card';

export default async (req: any, res: any) => {
  const {
    username,
  } = req.query;
  console.log(username);
  return res.send(
    renderCdkCard({
      username,
    }),
  );
};
