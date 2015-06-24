var r = require('rethinkdb');

// r.connect({
//         host: '192.168.0.102',
//         port: 28015
//     },
//     function(err, conn) {
// 		r.dbCreate('music').run(conn, function(err, res) {
// 			console.log(res);
// 		});
//     });



// console.time('dbSave');
// r.connect({
//         host: '192.168.0.102',
//         port: 28015,
//         db: 'music'
//     },
//     function(err, conn) {
// 		var albums = require('./albums');

// 		var counter = 0;
// 		albums.forEach(function(album) {
// 			r.table('albums').insert(album).run(conn, {noreply: true, durability: 'hard'}, function(err, res) {
// 				counter++;
// 				console.log(counter);

// 				if(counter === 347) {
// 					console.timeEnd('dbSave');
// 				}
// 			});
// 		});
//     });


console.time('dbSave');
r.connect({
        host: '192.168.0.102',
        port: 28015,
        db: 'music'
    },
    function(err, conn) {
		var albums = require('./albums');

		var counter = 0;
		// albums.forEach(function(album) {
			r.table('albums').insert(albums).run(conn, {noreply: true, durability: 'soft'}, function(err, res) {
				counter++;
				console.log(counter);

				if(counter === 1) {
					console.timeEnd('dbSave');
				}
			});
		// });
    });






// r.connect({
//         host: '192.168.0.102',
//         port: 28015,
//         db: 'music'
//     },
//     function(err, conn) {

// 			r.table("albums").changes().run(conn,function(err,cursor) {  
//     			cursor.each(console.log);
//     });

//     });


// console.log('Press any key to exit');

// process.stdin.setRawMode(true);
// process.stdin.resume();
// process.stdin.on('data', process.exit.bind(process, 0));