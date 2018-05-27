/* global Package */
Package.describe({
    name: 'socialize:feed',
    summary: 'A package for impmementing a social network style news feed',
    version: '1.0.2',
    git: 'https://github.com/copleykj/socialize-feed.git',
});

Package.onUse(function _(api) {
    api.versionsFrom('1.3');

    api.use([
        'check',
        'reywood:publish-composite@1.6.0',
        'socialize:user-blocking@1.0.1',
        'socialize:postable@1.0.1',
    ]);

    api.use('socialize:friendships@1.0.2', { weak: true });

    api.mainModule('server/server.js', 'server');
    api.mainModule('common/common.js', 'client');
});
