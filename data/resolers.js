
import { reject } from 'lodash';
import { Widgets } from './dbConnectors';
const resolvers = {
    getProduct: ({ id }) => {
        return new Promise((resolve) => {
            Widgets.findById({ _id: id })
                .then((product) => {
                    resolve(product)
                })
                .catch((err) => {
                    reject(err)
                })
        })
    },
    getAllProducts : ()=>{
        return new Promise((resolve) => {
            Widgets.find({})
                .then((product) => {
                    resolve(product)
                })
                .catch((err) => {
                    reject(err)
                })
        })
    },
    createProduct: ({ input }) => {
        const newWidget = new Widgets({
            name: input.name,
            description: input.description,
            price: input.price,
            soldout: input.soldout,
            coupon: input.coupon,
            discount: input.discount,
            inventory: input.inventory,
            stores: input.stores,
        });

        newWidget.id = newWidget._id;
        return new Promise((resolve) => {
            newWidget.save()
            .then((newWidget) => {
                resolve(newWidget)
            }).catch((err) => {
                reject(err)
            })
        });
    },
    updateProduct: ({ input }) => {
        return new Promise((resolve) => {
            Widgets.findOneAndUpdate({ _id: input.id }, input, { new: true })
                .then((widget) => {
                    resolve(widget)
                })
                .catch((err) => {
                    reject(err)
                })
        })
        // return new Promise((resolve) => {
        //     Widgets.findOneAndUpdate({ _id: input.id }, input, { new: true })((err, widget) => {
        //         if (err) reject(err)
        //         else resolve(widget)
        //     });
        // });
    },
    deleteProduct : ({id})=>{
        return new Promise((resolve)=>{
            Widgets.findOneAndRemove({_id:id})
            .then(()=>{
                resolve("Successfully item deleted")
            })
            .catch((err)=>{
                reject(err)
            })
        })
    },
};
export default resolvers