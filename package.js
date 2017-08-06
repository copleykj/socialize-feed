/* global Package */
Package.describe({
    name: 'socialize:feed',
    summary: 'A package for impmementing a social network style news feed',
    version: '0.2.3',
});

Package.onUse(function _(api) {
    api.versionsFrom('1.3');

    api.use([
        'socialize:user-model@1.0.0', 'socialize:postable@1.0.0',
    ]);

    api.mainModule('common.js');
});
