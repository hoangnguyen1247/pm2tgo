module.exports = {
    "branches": [
        "master",
        { "name": "develop", "prerelease": true },
        { "name": "release-next", "prerelease": "rc" }
    ],
    "plugins": [
        "@semantic-release/commit-analyzer",
        "@semantic-release/release-notes-generator",
        "@semantic-release/github",
    ]
}
