  const validate = (schema) => async(req, res, next) =>{
    try {
        console.log("Validating request body with schema:", req.body);
        const parseBody = await schema.parseAsync(req.body);
        req.body = parseBody;
        next();
    } catch (err) {
        const status = 422;
        const message = "Fill the input properly";
        const extraDetails = err.errors?.[0]?.message || "Validation failed";


        const error ={
            status,
            message,
            extraDetails,
        }
        console.log(error);
        // res.status(400).json({mgs:message});
        next(error)
    }
  };

  module.exports = validate;