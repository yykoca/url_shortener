import mongoose from 'mongoose';

const LinkSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    beschreibung: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: true,
    }
})

const Link = mongoose.model('Link', LinkSchema);

async function register (title, beschreibung, url) {
	const link = new Link({
		title,
		beschreibung,
        link: url,
	});

	return await link.save();
}

async function readOne(id) {
    return await Link.findOne({_id: id});
}

async function readAll() {
    return await Link.find();
}

async function updateOne(title, beschreibung, link) {
    return await Link.deleteOne({_id: id});
}

async function deleteOne(id) {
    return await Link.deleteOne({_id: id});
}


export default {
	register, readOne, readAll, updateOne, deleteOne
};