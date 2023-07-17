import { NextResponse } from "next/server";
import mail from "@sendgrid/mail";
type ResponseData = {
  status?: string;
  message?: string;
};
mail.setApiKey(process.env.SENDGRID_API_KEY || "");
export async function POST(req: Request) {
  let response: ResponseData = {};
  const body = await req.json();
  console.log(body);
  const msg = `Name: ${body.name}\r\n Email: ${body.email}\r\n Message: ${body.message}`;
  console.log(msg);
  const data = {
    to: "sreeragkjnivas4324602@gmail.com",
    from: "sreeragkjnivas4324602@gmail.com",
    subject: `${body.name.toUpperCase()} sent you a message from Contact Form`,
    text: `Email => ${body.email}`,
    html: msg.replace(/\r\n/g, "<br>"),
  };
  console.log(data);

  // Send the data and create a response object. I'm using status and message to display a success or fail notification in the UI
  await mail
    .send(data)
    .then(() => {
      response = {
        status: "success",
        message: "Your message was sent. I'll be in contact shortly.",
      };
    })
    .catch((error) => {
      response = {
        status: "error",
        message: `Message failed to send with error, ${error}`,
      };
    });

  return NextResponse.json(response);
}
