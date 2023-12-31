import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'

export type OrderLineDocument = HydratedDocument<OrderLine>

@Schema({
    timestamps: true,
})
export class OrderLine {
    @Prop()
    id : string
    @Prop()
    cart_id: string
    @Prop()
    product_item_id: string
    @Prop()
    qty: string
    @Prop()
    product_configuration_id_list: Array<string>
}

export const OrderLineSchema = SchemaFactory.createForClass(OrderLine)
