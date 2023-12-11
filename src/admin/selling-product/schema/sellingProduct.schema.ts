
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type SellingProductDocument = HydratedDocument<SellingProduct>

@Schema({
    timestamps : true
})
export class SellingProduct {
    @Prop()
    product_item_id : string
    // @Prop()
    // category_name : string

}

export const SellingProductSchema = SchemaFactory.createForClass(SellingProduct)