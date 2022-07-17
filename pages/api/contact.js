import AWS from "aws-sdk";
import secrets from "../../secrets";

const ses = new AWS.SES({
    accessKeyId: secrets.AWS_KEY,
    secretAccessKey: secrets.AWS_SECRET,
    region: "eu-central-1",
});

export default function formularHandler(req, res) {
    console.log("contact formular data", req.body);

    const { firstname, lastname, email, message } = req.body;

    const joaquimEmail = "neuspiano@gmail.com";

    ses.sendEmail({
        Source: "joaquimfont.com <neuspiano@gmail.com>",
        Destination: {
            ToAddresses: [joaquimEmail],
        },
        Message: {
            Body: {
                Text: {
                    Data: `Name: ${firstname} ${lastname}
                    Email: ${email}
                    Message: ${message}`,
                },
            },
            Subject: {
                Data: `New Message: ${firstname} ${lastname}`,
            },
        },
    })
        .promise()
        .then(() => {
            console.log("it worked!");
            res.json({ sucess: true });
        })
        .catch((err) => console.log(err));
}
