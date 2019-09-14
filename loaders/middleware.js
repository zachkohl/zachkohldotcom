function checkSession(req, res, next) {
    if (req.session.user){ //Does the session exist? Recall that the express-session is using its own id system in the background to hook into a specific user profile. 
      res.locals.layout = "editor";
      next(); //https://stackoverflow.com/questions/10695629/what-is-the-parameter-next-used-for-in-express Basically next is a special object in express that passes control to the next MATCHING route
    } else {
      //send them to sign in or register, but incude parameters: https://stackoverflow.com/questions/19035373/how-do-i-redirect-in-expressjs-while-passing-some-context
      let email = req.query.email;
      let firstName = req.query.firstName;
      let lastName = req.query.lastName;
      let target = req.path;
  
      //clean the data
      email = encodeURIComponent(email);
      firstName = encodeURIComponent(firstName);
      lastname = encodeURIComponent(lastName);
  
      //prep the send string. We don't want to send excess parameters if we don't need to. 
      string = "/login?target="+target;
      if(email !="undefined"){
        string = string +"&email="+email+"&firstName="+firstName+"&lastName="+lastName
      }
      //pass along
      res.redirect(string);
  
    };
}//end check Session

    module.exports.checkSession = checkSession;