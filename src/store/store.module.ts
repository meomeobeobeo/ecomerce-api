import { Module } from "@nestjs/common";
import { StoreService } from "./store.service";

export interface StoreConfig {
    dirname : string,
    filename : string
}

@Module({
    imports : [],
    controllers : [],
    providers : [StoreService , {
        provide :'STORE_CONFIG',
        useValue : {
            dirname : 'store',
            filename : 'data.json'
        } as StoreConfig
    }],
    exports : [StoreService]

})

export class StoreModule {};
