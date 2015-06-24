var r = require('rethinkdb');


r.connect({
        host: '192.168.0.102',
        port: 28015,
        db: 'music'
    },
    function(err, conn) {

			r.table("albums").changes().run(conn,function(err,cursor) {  
    			cursor.each(console.log);
    });

    });


console.log('Press any key to exit');

process.stdin.setRawMode(true);
process.stdin.resume();
process.stdin.on('data', process.exit.bind(process, 0));