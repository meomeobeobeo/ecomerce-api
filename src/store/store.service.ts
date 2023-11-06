import { Inject, Injectable } from "@nestjs/common";
import { StoreConfig } from "./store.module";



@Injectable()
export class StoreService {

    constructor(@Inject("STORE_CONFIG") private readonly storeConfig : StoreConfig ){

    }
    saveData(data : any){


        console.log('save data in store service.')
        console.log(this.storeConfig)
        console.log(data)
    }


}