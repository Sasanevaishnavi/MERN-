// const {z} = require("zod");

// const sighupSchema = z.object({
//     username :z
//     .string({required_error:"Name is requried"})
//     .trim()
//     .min(3, {mgs:"Nmae must be atleast  3 char. "})
//     .max(200, {mgs:"Nmae must be atleast  200 char. "}),
//     email :z
//     .string({required_error:"Email is requried"})
//     .trim()
//     .email({message:"Invaild email adress"})
//     .min(3, {mgs:"Email must be atleast  3 char. "})
//     .max(200, {mgs:"Email must be atleast  200 char. "}),
//     phone :z
//     .string({required_error:"Phone is requried"})
//     .trim()
//     .min(10, {mgs:"Phone must be atleast  10 char. "})
//     .max(10, {mgs:"Phone must be atleast  10 char. "}),
//     password :z
//     .string({required_error:" Passwordis requried"})
//     .trim()
//     .min(8, {mgs:"Password must be atleast  8 char. "})
//     .max(200, {mgs:"Password must be atleast  200 char. "}),
  
// })

// module.exports = sighupSchema;

const {z} = require("zod");

const sighupSchema = z.object({
    username :z
    .string({required_error:"Name is required"})
    .trim()
    .min(3, {message:"Name must be at least 3 characters"})
    .max(200, {message:"Name must be at most 200 characters"}),
    
    email :z
    .string({required_error:"Email is required"})
    .trim()
    .email({message:"Invalid email address"})
    .min(3, {message:"Email must be at least 3 characters"})
    .max(200, {message:"Email must be at most 200 characters"}),
    
    phone :z
    .string({required_error:"Phone is required"})
    .trim()
    .min(10, {message:"Phone must be at least 10 characters"})
    .max(20, {message:"Phone must be at most 20 characters"}),
    
    password :z
    .string({required_error:"Password is required"})
    .trim()
    .min(8, {message:"Password must be at least 8 characters"})
    .max(200, {message:"Password must be at most 200 characters"}),
});

module.exports = sighupSchema;
