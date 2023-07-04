exports.createPostValidator = (req, res, next) => {
    //title
    req.check("title", "Write a Title").notEmpty()
    req.check("title", "Title must between 4 - 150 characters").isLength({
        min: 4,
        max: 150
    });
    //body
    req.check("Body", "Write a Body").notEmpty()
    req.check("Body", "Body must between 4 - 2000 characters").isLength({
        min: 4,
        max: 2000
    });

    //chech errors
    const errors = req.validationErrors()
    //If there are errors show them as they appear
    if(errors) {
        const firstError = errors.map((error) => error.msg)[0]
        return res.status(400).json({error: firstError})
    }
    // proceed to next middleware
    next();

}