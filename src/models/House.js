import { Schema, model } from "mongoose";

const HouseSchema = new Schema({
   thumbnail: String,
   describe: String,
   price: Number,
   location: String,
   status: Boolean,
   user: {
      type: Schema.Types.ObjectId,
      ref: 'User'
   }
}, {
   toJSON: {
      virtuais: true
   }
});

HouseSchema.virtual('thumbanail_url').get(function(){
   return `http://localhost:3333/files/${this.thumbnail}`;
})

export default model('House', HouseSchema);
