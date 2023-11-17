import { Injectable } from '@nestjs/common'
import * as moment from 'moment'
import * as nodemailer from 'nodemailer'
@Injectable()
export class HelperService {
    //dateFactor đại diện cho một giá trị dựa trên thời gian, có thể mang tính duy nhất.
    //RandomFactor giới thiệu một phần tử ngẫu nhiên.
    generateId(length: number): string {
        length = Math.max(length, 6)
        let dateFactor = moment().diff(
            moment(new Date(2023, 0, 0, 0, 0, 0, 0)),
            'milliseconds'
        )
        let randomFator = ('000' + Math.round(Math.random() * 1000)).slice(-3)
        return ('000' + dateFactor).slice(-((length || 15) - 3)) + randomFator
    }
    async sendEmail(to : string, subject : string, message:string) {
        // Create a transporter object
        let transporter = nodemailer.createTransport({
          host: "smtp.gmail.com",
          port: 587,
          secure: false,
          auth: {
            user: "meomeoerptest@gmail.com",
            pass: "ayeavbpovkgfuphs",
          },
        });
    
        // Define the email options
        let mailOptions = {
          from: '"Project application ',
          to: to,
          subject: subject,
          html: message,
        };
    
        // Send the email
        let info = await transporter.sendMail(mailOptions);
    
        console.log("Email sent: " + info.response);
      }

    isEmail = (email: string): boolean => {
        return true
    }

    isOnlyText = (text: string): boolean => {
        return true
    }

    isOnlyNumber = (numberAsString: string): boolean => {
        return true
    }

    isNotHaveSpecialCharacter = (value: string): boolean => {
        return true
    }
}
