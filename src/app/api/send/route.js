

import { EmailTemplateUser, EmailTemplateAdmin } from '../../../components/email-template/email-template';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend('re_Ftwrwg1D_6BD9sfYze2GcrYGjEbjh7mgn');

export async function POST(request) {
    try {
      const body = await request.json();
      console.log("body", body);
      const { email, firstName, lastName, message, phone, subject } = body;
      const data = await resend.emails.send({
        from: 'Lerkor-Dev <onboarding@resend.dev>',
        to: email,
        subject: "Hello from Resend",
        react: EmailTemplateUser({ firstName }),
      });
      const data2= await resend.emails.send({
        from: 'Lerkor-Dev <onboarding@resend.dev>',
        to: 'lerkor.online@gmail.com',
        subject: `Hello from Resend, have new message from ${ firstName } ${ lastName }`,
        react: EmailTemplateAdmin({ firstName, lastName, email, phone, message }),
      })
      if(data.status === "success" && data2.status === "success") {
        return NextResponse.json({ message: "Email Successfully Sent!" });
      }
      return NextResponse.json(data)
    } catch (error) {
        return NextResponse.json(error)
      }
}