
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type OutstandingProductDocument = HydratedDocument<OutstandingProduct>

@Schema({
    timestamps : true
})
export class OutstandingProduct {
    @Prop()
    product_item_id : string
   
    // @Prop()
    // category_name : string

}

export const OutstandingProductSchema = SchemaFactory.createForClass(OutstandingProduct)