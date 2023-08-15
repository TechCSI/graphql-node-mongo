import { buildSchema } from "graphql";
const schema = buildSchema(`
    type Product {
        id : ID
        name : String
        description : String
        price : Float
        soldout : Soldout
        discount : Boolean
        coupon : [String]
        inventory : Int
        stores : [Store]
    }
    input ProductInput{
        id : ID
        name : String
        description : String
        price : Float
        soldout : Soldout
        discount : Boolean
        coupon : [String]
        inventory : Int
        stores : [StoreInput]
    }

    enum Soldout {
        SOLDOUT
        ONSALE
    }

    type Store {
        store : String
        location : String
    }
    input  StoreInput {
        store : String
        location : String
    }

    type Query {
        getProduct(id: ID): Product
        getAllProducts : [Product]
    }

    type Mutation {
        createProduct(input: ProductInput) : Product
        updateProduct(input: ProductInput) : Product
        deleteProduct(id : ID!):String
    }



`)
export default schema;