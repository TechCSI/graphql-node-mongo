import mongoose from "mongoose";
import { Sequelize, DataType, DataTypes } from "sequelize";
import _ from 'lodash';
import casual from "casual";


// Mongo Connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://0.0.0.0:27017/widgets', {
    useNewUrlParser: true
}).then(()=>{
    console.log("Connect Success : ")
    const db = mongoose.connection.db;
    // const collection = db.collection('widgets');
    // collection.insertOne({
    //     name :"Macbook",
    //     soldout :"SOLDOUT",
    //     description :"16 inch Macbook",
    //     price :4999.99,
    //     coupon :["Sale 50", "New30"],
    //     discount :false,
    //     inventory :Math.floor(Math.random()*20),
    //     stores :[
    //       {
    //         store :"XGen",
    //         location :"Patna"
    //       }
    //     ]
    // })
}).catch((err)=>{
    console.log("Error : ", err)
})
const widgetSchema = new mongoose.Schema({
    name: {
        type: String
    },
    description: {
        type: String
    },
    price: {
        type: Number
    },
    soldout: {
        type: String
    },
    inventory: {
        type: String
    },
    coupon: {
        type: Array
    },
    discount: {
        type: Boolean
    },
    stores: {
        type: Array
    }
});

const Widgets = mongoose.model('widgets', widgetSchema)

// For Sequels
const sequelize = new Sequelize('sqlite::memory:')
const Categories = sequelize.define('categories', {
    category : DataTypes.STRING,
    description : DataTypes.STRING,
});
Categories.sync({force: true}).then(()=>{
    _.times(5, (i)=>{
        Categories.create({
            category : casual.word,
            description : casual.sentence,
        })
    })
});
export { Widgets, Categories };


