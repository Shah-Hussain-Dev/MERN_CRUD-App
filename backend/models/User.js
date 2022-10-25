import mongoose from "mongoose";
// import autoIncrement from "mongoose-auto-increment"
const UserSchema = new mongoose.Schema({
    name:{type:String, required:true},
    email:{type:String, required:true, unique:true},
    profile:{type:String, required:true},
    profile_photo:{type:String, required:true},
})
// autoIncrement.initialize(mongoose.connection)
// UserSchema.plugin(autoIncrement.plugin,'user')

const UserModel = mongoose.model('user', UserSchema);

export default UserModel