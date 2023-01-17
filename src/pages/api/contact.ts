import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {}

const buildMailBody = (name: string, email: string, message: string) => `
<!doctype html>
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
      </head>
<body>
  <b>${name}(${email})</b><p>${message}</p>
</body>
</html>
`;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const mailtrapUrl = process.env.MAILTRAP_URL
  const token = process.env.MAILTRAP_TOKEN;
  const mailtrapFrom = process.env.MAILTRAP_FROM
  const mailTo = process.env.MAIL_TO;
  const { name, email, message } = req.body;

  const mailTrapMessage = {
    subject: 'Contato Portfolio',
    html: buildMailBody(name, email, message),
    from: {
      email: mailtrapFrom,
      name: 'Contato Portfolio',
    },
    to: [
      { email: mailTo }
    ]
  };

  const response = await fetch(`${mailtrapUrl}/send`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(mailTrapMessage)
  });

  if (!response.ok) 
  {
    const error = await response.json()
    res.status(400).json({})
    console.error(error)
    return;
  }

  res.status(200).json({})
}
