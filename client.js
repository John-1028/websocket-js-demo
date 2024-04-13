var ws = require("ws");

const arguments = process.argv.slice(2);
if (arguments.length <= 0) {
	const filename = process.argv[1].substring(process.argv[1].lastIndexOf('\\')+1);
	console.log(`Usage: node ${filename} serverUrl`);
	return;
}

// url ws://127.0.0.1:6080
// 创建了一个客户端的socket,然后让这个客户端去连接服务器的socket
var sock = new ws(arguments[0]);
sock.on("open", function () {
    console.log("connect success !!!!");
    sock.send("HelloWorld");
});
 
sock.on("error", function(err) {
    console.log("error: ", err);
});
 
sock.on("close", function() {
    console.log("close");
});
 
sock.on("message", function(data) {
	var buf = Buffer.from(data);

    console.log("message: ", buf.toString());
});