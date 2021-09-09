import mongoose from 'mongoose';

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
})

const User = mongoose.model('User', UserSchema);

async function register (name, email, password) {
	const user = new User({
		name,
		email,
        password,
	});

	return await user.save();
}

async function readOne(id) {
    return await User.findOne({_id: id});
}

async function readAll() {
    return await User.find();
}

async function updateOne(name, email, password) {
    return await User.deleteOne({_id: id});
}

async function deleteOne(id) {
    return await User.deleteOne({_id: id});
}

async function login ({ name, password }) {
	const user = await User.findOne({ name });
	if (!user) throw new Error("user_not_found");

	// const isPasswordCorrect = await bcrypt.compare(password.toString() + process.env.PEPPER, user.password);
	// if (!isPasswordCorrect) throw new Error("password_incorrect");

	return { userId: user._id, name: user.name };
}

export default {
	register, readOne, readAll, updateOne, deleteOne, login
};