/**
 * development accountkey by default
 */
var accountKey = "bd10b785c143c25cf73f2a0418a24b0c249bf716";

if(process.env.MRT_ENV == 'production') {
    accountKey = "678073940e947d06009698cc26073f7b40385167";
}

Nodetime = Npm.require('nodetime').profile({
    accountKey: accountKey,
    appName: 'Arriva Intranet'
});

console.log('Nodetime loaded', accountKey, (process.env.MRT_ENV ? process.env.MRT_ENV : 'No environment'));
