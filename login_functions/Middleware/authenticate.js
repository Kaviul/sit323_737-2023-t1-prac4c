const jwt = require("jsonwebtoken");
const { token } = require("morgan");
const passport = require('passport')
const localStrategy = require('passport-local').Strategy;

//Passport
// passport.use (
//     new localStartegy(async (username, password, done) => {
//         return done(null, {username: "bob", id: "123"});
//     })
// )

// passport.use(
//     "login",
//     new localStrategy(async (username, password, done) => {
//         console.log("Working");
//         let myErr = new Error('Error occured');

//         return done(
//             null,
//             {username: "bob", id: '123'},
//             {message: "congrats! u r logged in"}
//         );
//     })
// )

// passport.use(
//     "signup",
//     new localStrategy(
//         {emailField: 'email', passwordField: 'password'},
//         async (email, password, done) => {
//             try{
//                 if(password.length <= 8 || !email) {
//                     done(null, false, {
//                         message: "Your credentials do not match our criteria"
//                     } 
                       
//                     )}
//                  else{
//                     const hashsedPass = await bcrypt.hash(password, 10);
//                     let newUser = {email, password: hashsedPass, id: uuid()};
//                     UserSignUpRoute.push(newUser);
//                     await fs.writeFile("users.json", JSON.stringify(users), (err) => {
//                         if (err) return done(err);
//                         console.log("database updated");
//                     })
//                     return done(null, newUser, {message: "Signed Up successfully"});
                
//                     }
//                 } catch(err) {
//                     return done(err);
//                 }
//             }

//     )
// )

passport.use(
    new localStartegy(async (username, password, done) => {
                return done(null, {username: email, password: token});
             })

)

passport.use(
        "login",
        new localStrategy(async (username, password, done) => {
            console.log("Working");
            let myErr = new Error('Error occured');
    
            return done(
                null,
                {username: email, password: token},
                {message: "congrats! u r logged in"}
            );
        })
    )

// const authenticate = (req, res, next) => {
//     try{
//         const token = req.headers.authorization.split(' ')[1]
//         const decode = jwt.verify(token, 'verySecretValue')

//         req.user = decode
//         next()
//     }
//     catch(error) {
//         res.json({
//             message: "Authentication Failed!"
//         })
//     }
// }

module.exports = authenticate

