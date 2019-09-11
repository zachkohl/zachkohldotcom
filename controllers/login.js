function configurations(config, models) {
    var config = config;
    var models = models;
   
}
bcrypt = config.bcrypt;
function targetOBJ(passedEmail,passedFirstname,passedLastname,target) {
    return { email: passedEmail, firstName: passedFirstname, lastName: passedLastname, target: target };
}

function checkTargetOBJ(targetOBJ){
    if(typeof targetOBJ==='undefined'){
        return{ email: '', firstName: '', lastName: '', target: '' }
    }
    
}


async function logOn(username, password, targetOBJ) {
    targetOBJ = checkTargetOBJ(targetOBJ);
    response = {};
    return new Promise(async(resolve,reject)=> {


 

        //Check the if the username exist, if it does, return the hash and userrole. If it does not exist, it should throw an error
        user = await models.login.getuser(username);

        bcrypt.compare(password, user.storedhash, function (bycrptError, bycrptResponse) {

                if (bycrptResponse) {
                    if ((typeof target === "undefined") || (target === null)) {
                        response.attempt = true;
                        response.string = '/';
                        resolve(response);
                    } else {
                        response.attempt = true;
                        response.string = target + "?email=" + targetOBJ.email + "&firstName=" + targetOBJ.firstName + "&lastName=" + targetOBJ.lastName;
                        resolve(response);
                    }
                }
                else{
                    resolve({template:'login',parameters:{ message: 'username, password, or both, failed. Please try again', email: targetOBJ.email, firstName: targetOBJ.firstName, lastName: targetOBJ.lastName, target: targetOBJ.target }});
                }
            
      
        })//end  bcrypt.compare
    }); //close promise
    }//end logOn
    
async function register(username,password,email,targetOBJ){
targetOBJ = checkTargetOBJ(targetOBJ);
   
    return new Promise(async(resolve,reject)=> {
   
    let userrole = "admin" //HARD CODED FOR NOW

    //Need to add data validation


    bcrypt.hash(password, 10, async function (err, hash) { //This code won't fire till the hash variable is ready, this is called a "callback." Now we will only store things in the database once everything is read to go. 
    if (err) {
        console.log(err)
        response = {};
        response.template = 'register';
        response.parameters = { message: 'password failed to hash', email: targetOBJ.email, firstName: targetOBJ.firstName, lastName: targetOBJ.lastName, target: targetOBJ.target };
        resolve(response);
    } else {
        user = await models.login.registeruser(username,email,hash,userrole).then(()=>{
        (user.username===username) ? resolve(logOn(username, password, targetOBJ)) : resolve({template:'login',parameters:{ message: 'username, password, or both, failed. Please try again', email: targetOBJ.email, firstName: targetOBJ.firstName, lastName: targetOBJ.lastName, target: targetOB.target }});
        }).catch(err =>{
            console.log(err);
            resolve({template:'register',parameters:{ message: 'username unavailable', email: targetOBJ.email, firstName: targetOBJ.firstName, lastName: targetOBJ.lastName, target: targetOBJ.target }});
            
    });
}//end else
})//end bcrypt.hash
}); //close promise

}//end function register



    const login = {}
    login.configurations = configurations;
    login.targetOBJ = targetOBJ;
    login.logOn = logOn;
    login.register = register;
    module.exports = login;

