function configurations(config) {
    var config = config;
}

//setup database variables
query = config.query;

async function getuser(username) {
    try {
        let promise = new Promise(async (resolve, reject) => {


            let text = 'SELECT * FROM users WHERE username = $1'; // everything after RETURNING are the columns that you want in what gets returned, use a * for everything. 
            let values = [username];
            let response = await query(text, values);
            if (!response.rows[0]) throw 'username not in database';

            //build the user object;
            user = {
                id: response.rows[0].id,
                username: response.rows[0].username,
                email: response.rows[0].email,
                emailvalidated: response.rows[0].emailvalidated,
                storedhash: response.rows[0].storedhash,
                userrole: response.rows[0].userrole
            }


            resolve(user);
        })//end new promise
        return promise;
    }
    catch (err) {
        console.log(err)
        return false;
    }


}//end getuser

async function registeruser(username, email, hash, userrole) {
    return new Promise(async (resolve, reject) => {

        text = 'INSERT INTO users(username, email,storedHash,userrole) VALUES($1, $2, $3,$4) RETURNING *' // everything after RETURNING are the columns that you want in what gets returned, use a * for everything. 
        values = [username, email, hash, userrole]
        await query(text, values).then(response => {
            //build the user object;
            user = {
                id: response.rows[0].id,
                username: response.rows[0].username,
                email: response.rows[0].email,
                emailvalidated: response.rows[0].emailvalidated,
                storedhash: response.rows[0].storedhash,
                userrole: response.rows[0].userrole
            }
            resolve(user);
        }).catch(err => reject(err));
    })//end new Promise
    }//end registeruser





    module.exports.configurations = configurations;
    module.exports.getuser = getuser;
    module.exports.registeruser = registeruser;
