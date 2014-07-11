
if (typeof Meteor.config.nodetimeApiKey !== "undefined" && Meteor.config.nodetimeApiKey !== '') {
    Nodetime = Npm.require('nodetime').profile({
        accountKey: Meteor.config.nodetimeApiKey,
        appName: 'Nodetime'
    });

    console.log('Nodetime loaded', Meteor.config.nodetimeApiKey, (process.env.MRT_ENV ? process.env.MRT_ENV : 'No environment'));
}
