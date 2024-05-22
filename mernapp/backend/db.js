const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://gofood:gofood@cluster0.uqmskqt.mongodb.net/gofoodmern?retryWrites=true&w=majority';

const connectDB = async () => {
    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        const foodItemsCollection = mongoose.connection.db.collection('food_items');
        const foodItems = await foodItemsCollection.find({}).toArray();

        const foodCategoryCollection = mongoose.connection.db.collection('foodCategory');
        const foodCategories = await foodCategoryCollection.find({}).toArray();

        global.food_items = foodItems;
        global.foodCategory = foodCategories;
    } catch (error) {
        console.error('MongoDB connection error:', error.message);
        process.exit(1); // Exit process with failure
    }
};

module.exports = connectDB;




















// const mongoose = require('mongoose');
// const mongoURI='mongodb+srv://gofood:gofood@cluster0.uqmskqt.mongodb.net/gofoodmern?retryWrites=true&w=majority'

// const connectDB = async () => {
//     try {
//         await mongoose.connect(mongoURI, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true
//         });

//         // console.log('MongoDB connected');
//         // const collection = mongoose.connection.db.collection('food_items');
//         // const fdata = await collection.find({}).toArray(async function(err,data){
//         //     const foodCategory = await mongoose.connection.db.collection("foodCategory")
//         //     foodCategory.find({}).toArray(function (err,catData){
//         //         if(err)console.log(err);
//         //         else{
//         //             global.food_items = data;
//         //             global.foodCategory = catData;
//         //         }
//         //     })
//         //     // global.food_items = data;
//         //     // console.log(global.food_items);
//         // })
//         const foodItemsCollection = mongoose.connection.db.collection('food_items');
//         const foodItems = await foodItemsCollection.find({}).toArray();

//         const foodCategoryCollection = mongoose.connection.db.collection('foodCategory');
//         const foodCategories = await foodCategoryCollection.find({}).toArray();

//         global.food_items = foodItems;
//         global.foodCategory = foodCategories;

//         // console.log('Food Items:', global.food_items);
//         // console.log('Food Categories:', global.foodCategory);
        

        
//     } 
//     catch (error) {
//         console.error('MongoDB connection error:', error.message);
//         process.exit(1);
//     }
// };

// module.exports = connectDB;



// const connectDB = async () => {
//      await mongoose.connect(mongoURI,{ useNewUrlParser:true},async(err,result)=>{
//         if(err)console.log("---",err)
//         else{
//             console.log("connected");
//             const fetched_data=await mongoose.connection.db.collection("food_items");
//             fetched_data.find({}).toArray(function(err,data){
//                 if(err)console.log(err);
//                 else{
//                     global.food_items=data;
//                     console.log(global.food_items);
//                 }
//             })
//         }
//     });
// // }
//     // try {
//     //     await mongoose.connect(mongoURI, {
//     //         useNewUrlParser: true,
//     //         useUnifiedTopology: true
//     //     });

//     //     console.log('MongoDB connected');
//     //     const collection = mongoose.connection.db.collection('food_items');
//     //     const data = await collection.find({}).toArray();
//     //     console.log();
//     //     await mongoose.connection.close();
//     // } catch (error) {
//     //     console.error('MongoDB connection error:', error.message);
//     //     process.exit(1);
//     // }
// };

// module.exports=connectDB;