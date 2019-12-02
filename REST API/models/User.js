const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, Number, Boolean, ObjectId } = Schema.Types;

const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        minlength: [4, 'Username must be at least 4 symbols long!'],
        maxlength: [19, 'Username must be less than 18 symbols long!']
    },

    password: {
        type: String,
        require: true,
        minlength: [6, 'Password must be at least 6 symbols long!'],
        maxlength: [19, 'Password must be less than 18 symbols long!']
    },

    cars: [{ type: ObjectId, ref: "Car" }]

});

userSchema.methods = {

    matchPassword: function (password) {
        return bcrypt.compare(password, this.password);
    }

};

userSchema.pre('save', function (next) {
    if (this.isModified('password')) {
        bcrypt.genSalt(saltRounds, (err, salt) => {
            bcrypt.hash(this.password, salt, (err, hash) => {
                if (err) { next(err); return }
                this.password = hash;
                next();
            });
        });
        return;
    }
    next();
});

module.exports = new Model('User', userSchema);