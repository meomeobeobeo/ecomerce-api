import { Prisma } from '@prisma/client';
import { Injectable, Req, Res } from '@nestjs/common';
import { CreateTestDto } from './dto/create-test.dto';
import { UpdateTestDto } from './dto/update-test.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { HelperService } from 'src/helper/helper.service';

@Injectable()
export class TestService {
  constructor(
    private prisma: PrismaService,
    private helper: HelperService,
  ) {}

  async getAll(): Promise<any> {
    
    try {
      let data = await this.prisma.test.findMany();
      let test_otp = '123456'
      let title = 'Your verify otp for sign up is:'
      // this.helper.sendEmail('meotrangbeonknd@gmail.com' , 'HELLO THIS IS MAIL FROM MEOECO' , `<h3>${title} : </h3><span>${test_otp}</span>`)

      return {
        statusCode: 200,
        message: "successfull",
        metaData: data
    }
    } catch (error) {
      return {
        statusCode: 500,
        message: error,
        metaData: ''
    }
    }
    

   
  }

  async setCacheData(): Promise<any> {}
  async getCacheData(): Promise<any> {}

  async create(createTestDto: CreateTestDto) {
    let { name } = createTestDto;

    try {
      await this.prisma.test.create({
        data: {
          id: this.helper.generateId(16),
          name: name,
        },
      });
      return {
        statusCode: 200,
        message: 'create test document successfull .',
        metaData: '',
      };
    } catch (error) {
      return {
        statusCode: 500,
        message: error,
        metaData: '',
      };
    }
  }

  findAll() {
    return `This action returns all test`;
  }

  findOne(id: number) {
    return `This action returns a #${id} test`;
  }

  update(id: number, updateTestDto: UpdateTestDto) {
    return `This action updates a #${id} test`;
  }

  remove(id: number) {
    return `This action removes a #${id} test`;
  }
}
