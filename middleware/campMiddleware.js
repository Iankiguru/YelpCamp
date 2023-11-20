const { campgroundSchema, reviewSchema } = require('../schemas/campSchema');
const ExpressError = require('../utils/ExpressError');
const Campground = require('../models/campModel');



module.exports.validateCampground = (req, res, next) => {
    const { error } = campgroundSchema.validate(req.body);
    console.log(req.body);
    if (error) {
        const msg = error.details.map(el => el.message).join(',')
        throw new ExpressError(msg, 400)
    } else {
        next();
    }
}

