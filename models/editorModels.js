function configurations(config) {
    var config = config;
}


async function update(slug, content) {
    return new Promise(async (resolve, reject) => {
        text = 'UPDATE pages SET content= $1 WHERE slug=$2' // everything after RETURNING are the columns that you want in what gets returned, use a * for everything. 
        values = [content, slug]
        await query(text, values)
//Now update the redis instance:
config.redisClient.hmset(["pages",slug,JSON.stringify(content)]);



        resolve('complete');
    });
}

const {promisify} = require('util');
const getAsync = promisify(config.redisClient.hget).bind(config.redisClient);


async function queryPage(slug){

let message = await getAsync('pages', slug);
return JSON.parse(message);
}






module.exports.configurations = configurations;
module.exports.update = update;
module.exports.queryPage = queryPage;
module.exports.getAsync = getAsync;
