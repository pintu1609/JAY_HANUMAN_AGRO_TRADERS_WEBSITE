import { sendEmail } from "@/utls";
import { google } from "googleapis";
import { NextResponse } from "next/server";

type ContactUs = {
   name: string,
  company: string,
  email: string,
  phone: number,
  message: string,
}
export  async function POST(
    
    req:Request,
) {
  
    const body: ContactUs = await req.json();
    // const productCategoryString = body['product-category'].join(', ');

    const data = [[
        body.name,
        body.company,
        body.email,
        body.phone,
        body.message,
    ]]

    try {
        const auth = new google.auth.GoogleAuth({
            credentials: {
              client_email: process.env.GOOGLE_CLIENT_EMAIL,
              private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/gm, "\n"),
            },
            scopes: ['https://www.googleapis.com/auth/spreadsheets'],
          });
          const googleSheetClient = google.sheets({ version: "v4", auth });
            const response = await googleSheetClient.spreadsheets.values.append({
            spreadsheetId: process.env.GOOGLE_SHEET_ID,
            range: 'Sheet1!A1',
            valueInputOption: 'USER_ENTERED',
            insertDataOption: 'INSERT_ROWS',
            requestBody: {
              values: data,
            },
          });

         const subject = 'New Contact Form Submission';
        const desc = `Hi Admin,\n\nYou have a new contact form submission with the following details:\n\n` +
            `Name: ${body.name}\n` +
            `Company: ${body.company}\n` +
            `Email: ${body.email}\n` +
            `Mobile Phone: ${body.phone}\n` +
            `Message: ${body.message}\n` +
            `Best regards,\n Jay Hanuman Aagao Traders`;
          // send email to client

          await sendEmail({subject, desc});

          return NextResponse.json({ data:response?.config?.data,
            message: 'Contact Details added successfully' }, { status: 200 });


    } catch (error) {
      return NextResponse.json({ message: 'Something went wrong' }, { status: 500 });
    }
        
}