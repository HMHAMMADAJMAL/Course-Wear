import connectDb from "../../middleware/mongoose"
import User from "../../models/User";
const handler = async (req, res) => {
  if (req.method == 'POST') {
    console.log(req.body);
    let user = await User.findOne({ "email": req.body.email })
    if (user) {
      if (req.body.email == user.email && req.body.password == user.pasword) {
        res.status(200).json({ success: "saved ", email: user.email, name: user.name })
      }
      else {
      }
    }
  }
  else {
    res.status(400).json({ error: "This method is not allowed" })
  }
}
export default connectDb(handler);


