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
          Subject: "Waarschuwing: Het Joost sloopalarm is geluid!",
          TextPart: "Waarde Ridders, het joost sloopalarm is zojuist geluid. Dit betekend dat escalatie gaande is. Bijzijn is meemaken, het is slopen of gesloopt worden.",
          HTMLPart:
            "<h3>Waarde Ridders,</h3><br />Het joost sloopalarm is zojuist geluid. Dit betekend dat escalatie gaande is. Bijzijn is meemaken, het is slopen of gesloopt worden.",
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
