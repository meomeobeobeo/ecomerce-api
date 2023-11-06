import { Inject, Injectable, Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";
import { StoreModule } from "src/store/store.module";


const valueProvider = {
    name : 'Nguyễn Minh Đức',
    age : 22,
    favorite : "cat"
}

const saveData = ()=>{
    
    return ()=>{
        console.log('meomeo')
    }
}

@Module({
    imports : [StoreModule],
    controllers:[UserController],
    providers : [{
        provide : UserService,
        useClass : UserService
    },
    {
        provide : "valueProvider",
        useValue : valueProvider
    },{
        provide : 'saveDataFunction',
        useFactory: saveData
    }
]
})

export class UserModule {};
