import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'

export type CartItemsSchema = HydratedDocument<CartItems>

@Schema({
    timestamps: true,
})
export class CartItems {
    @Prop()
    id: string
    @Prop()
    cart_id: string
    @Prop()
    product_item_id: string

    @Prop()
    qty: string

    @Prop()
    product_configuration_id_list: Array<string>
}

export const CartItemsSchema = SchemaFactory.createForClass(CartItems)
