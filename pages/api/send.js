// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Mailjet from 'node-mailjet';

const mailjet = Mailjet.connect(process.env.MJ_APIKEY_PUBLIC, process.env.MJ_APIKEY_PRIVATE);

export default async function handler(req, res) {
  try {
    const sendmail = await mailjet.post("send", { version: "v3.1" }).request({
      Messages: [
        {
          From: {
            Email: "joostalarm@hcnobel.nl",
            Name: "Joost Sloopalarm",
          },
          To: [
            {
              Email: "delanoflipse@hotmail.com",
              Name: "Delano",
            },
          ],
          Subject: "Greetings from Mailjet.",
          TextPart: "My first Mailjet email",
          HTMLPart:
            "<h3>Dear passenger 1, welcome to <a href='https://www.mailjet.com/'>Mailjet</a>!</h3><br />May the delivery force be with you!",
          CustomID: "AppGettingStartedTest",
        },
      ],
    });

    res.status(200).json({ log: sendmail.body });
  } catch (error) {
    console.log(error);
    res.status(501).json({ code: error.statusCode });
  }

}
