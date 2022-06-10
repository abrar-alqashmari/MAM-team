var bcryptjs = require("bcryptjs");
var jwt = require("jsonwebtoken");

var authService = {
  signUser: function (user) {
    const token = jwt.sign({
      id: user.id,
      username: user.username,
      email: user.email,
    },
    'Dmd&yyc%v=R`juP12' , {
        expiresIn: '10h'
    }) 
    return token
  },

  verifyToken: (token)=>{
      try{
        const decodedData = jwt.verify(token , 'Dmd&yyc%v=R`juP12')
        return decodedData?.id ? decodedData : false
      } catch (e){
        return false
      }
  },
  hashPassword: function (plainPassword) {
    var salt = bcryptjs.genSaltSync(10);
    var hashedPassword = bcryptjs.hashSync(plainPassword, salt);
    return hashedPassword;
  },

  comparePasswords: function (plainPassword, hashedPassword) {
    return bcryptjs.compareSync(plainPassword, hashedPassword);
  },
};

module.exports = authService;
