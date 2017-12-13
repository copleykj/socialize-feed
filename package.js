/* global Package */
Package.describe({
    name: 'socialize:feed',
    summary: 'A package for impmementing a social network style news feed',
    version: '1.0.0',
});

Package.onUse(function _(api) {
    api.versionsFrom('1.3');

    api.use([
        'check',
        'reywood:publish-composite@1.5.2',
        'socialize:user-blocking@1.0.0',
        'socialize:postable@1.0.0',
    ]);

    api.use('socialize:friendships', { weak: true });

    api.mainModule('server/server.js', 'server');
    api.mainModule('common.js');
});
