const adminMiddleware = async(req , res , next)=>{
    try {
        
        // res.ststus(200).json({msg:req.user.isAdmin})
        const adminRole = req.user.isAdmin;
        console.log("adminroleis at admin middervere :",adminRole);
        
       if (adminRole) {
            next(); 
        } else {
            console.log("User is not admin at admin middleware");
            return res.status(403).json({ message: "Access denied. User is not Admin" });
        }
       
    } catch (error) {
        next(error)
    }
}
module.exports = adminMiddleware;