const redis = require("redis");
const redisClient = redis.createClient(6379,"127.0.0.1");
redisClient.on("error",err => {
	console.log(error);
});


redisClient.set("username","sunyu",redis.print);
redisClient.get("username", (err,val) => {
	if(err){
		console.log(err);
	}
	console.log(val);

	// quit redis
	redisClient.quit();

});

