import SMTP_CONFIG from '../config/smtp'
import nodemailer from 'nodemailer'

const transport = nodemailer.createTransport({
    host: SMTP_CONFIG.host,
    port: SMTP_CONFIG.port,
    secure: false,
    auth: {
        user: SMTP_CONFIG.user,
        pass: SMTP_CONFIG.pass
    },
    tls:{
        rejectUnauthorized: false
    }
})

const sendEmail = async (req: any,res: any) => {
    const mailSend = await transport.sendMail({
        text: 'Primeiro teste de envio de mail utilizando nodeJS, nodemail, Typescript',
        subject:'Email teste',
        from: 'anthonydantas152.0@gmail.com',
        to: ['anthonydantas152.0@gmail.com']
    }).then(info => {
        return res.json(info)
    }).catch(error => {
        return res.json(error)
    })
}
export const EmailController = {
    sendEmail
}