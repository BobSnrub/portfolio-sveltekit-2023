import nodemailer, { type Transporter } from 'nodemailer';
import type { Actions } from './$types';
import { SMTP_USER, SMTP_PASS, SMTP_SERVER, SMTP_RECIPIENT } from '$env/static/private';
// import { error } from '@sveltejs/kit';

const smtpServer = SMTP_SERVER;
const smtpUser = SMTP_USER;
const smtpPass = SMTP_PASS;
const smtpRecipient = SMTP_RECIPIENT;

export const actions = {
    default: async ({ request }) => {
        const messageData: any = await request.formData();

        const emailContent = messageData.get('message').replace(/\n/g, '<br>'); // preserving the new lines in messages

        const transporter: Transporter = nodemailer.createTransport({
            host: smtpServer,
            port: 587,
            secure: false, //need to secure?
            auth: {
                user: smtpUser,
                pass: smtpPass
            }
        });

        const options: nodemailer.SendMailOptions = {
            from: {
                name: messageData.get('name'),
                address: messageData.get('email')
            },
            to: smtpRecipient,
            subject: `Portfolio Message from ${messageData.get('name')}`,
            // html: `${messageData.get('message')} \n\n ${messageData.get('name')} phone: ${messageData.get('phone')}`
            html: 
            `<!DOCTYPE html>
            <html>
            <head>
              <meta charset="UTF-8">
              <title>Email Template</title>
            </head>
            <body>
                <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
                    <h1 style="text-align: center;">Message from ${messageData.get('name')}</h1>
                    <hr style="margin-bottom: 20px;">
                    
                    <p>${emailContent}</p>
                    
                    <hr style="margin-top: 20px;">
                    
                    <div style="text-align: center;">
                        <p>Name: ${messageData.get('name')}</p>
                        <p>Phone: ${messageData.get('phone') ? messageData.get('phone') : 'None Provided'}</p>
                    </div>
                </div>
            </body>
            </html>`
        };

        try {
            const info = await transporter.sendMail(options);
            console.log('(server) Email sent:', info.response);
        } catch (error) {
            console.error('(server) Error sending email:', error);
            throw error;
        }

        return {
            success: true
        }


    }
} satisfies Actions;