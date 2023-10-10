import mongoose from 'mongoose';

const UserInfo = new mongoose.Schema({
    Username: {
        type: String,
        required: true
    },
    Password: {
        type: String,
        required: true

    }
})

export default mongoose.model('userData', UserInfo);