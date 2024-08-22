function home(req,res){
    res.render("admin/user/index",{title:"User Home "} )
}
function create(req, res){
    res.render("admin/user/create",{title:"User", errorMessage:{}})
}
module.exports={home,create}