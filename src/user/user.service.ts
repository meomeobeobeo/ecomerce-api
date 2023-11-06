import { Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { Users } from './user.dto';
import { StoreService } from 'src/store/store.service';

@Injectable()// thông báo đối tượng được inject
export class UserService {

    constructor(private storeService : StoreService){

    }
    createUser(user: Users): any {
      
        let userReal = plainToClass(Users, user, { excludeExtraneousValues: true });
        this.storeService.saveData(userReal)
        
       
        return userReal;
    }
}
