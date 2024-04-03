export default {
    disableAppHeaderButton: false,
    disablePullRequestIssueButton: false,
    disableRepoHeaderButton: false,

    linkFormats: [
        ["<group> Pull Request / Issue","{number}"],
        "{org}/{repo}#{number}",
        "#{number}",
        "",
        "<comment> Additional pull/issue links in a new group",
        ["<group>","{number}"],
        ["{title}","{number}"],
        ["{title} (#{number})","{org}{repo}"],
        "<default> {title} ({org}/{repo}#{number})",
        "",
        ["<group> Tree / Blob Links","{codepath}"],
        "{repo}/{codebranch}/{codepath}",
        "{repo}/{codepath} ({codebranch})",
        "{repo}/{codepath}",
        "{codepath} ({codebranch})",
        "<default> {codepath}",
        "{codefile}",
        "{codefile} ({org}/{repo})",
        "",
        ["<group> Commit Links","{commit_long}"],
        "{commit_long}",
        "<default> {commit_short}",
        "",
        ["<group> Project Links","{project_name}"],
        "<default> {project_name}",
        "{project_name} - {project_view_name}",
        "{project_name} ({org})",
        "{project_name} - {project_view_name} ({org})",
        "",
        "<group> Org / Repo (targeting current page)",
        "{origin}/{org}/{repo}",
        "{hostname}/{org}/{repo}",
        "{org}/{repo}",
        "{repo}",
        "{org}",
        "@{org}",
        "",
        "<comment> The raw URL (including the hash)",
        "<group>URL",
        "{url}",
        "{hostname}/{pathname}{hash}",
        "{hostname}/{pathname}",
        "",
        "<comment> The URL without the hash (but only when there was a hash)",
        ["{origin}/{pathname}","{hash}"],
        "",
        "<comment> The URL path without the scheme or the origin or hash (but only when it's not a pull or issue)",
        ["{pathname}",null,"{number}"],
        "",
        ["<group> Link to Repository","{repo}","[pullorissue]"],
        ["{origin}/{org}/{repo}",null,"[pullorissue]","https://github.com/{org}/{repo}"],
        ["{hostname}/{org}/{repo}",null,"[pullorissue]","https://github.com/{org}/{repo}"],
        ["{org}/{repo}",null,"[pullorissue]","https://github.com/{org}/{repo}"],
        ["{repo}",null,"[pullorissue]","https://github.com/{org}/{repo}"],
        "",
        ["<group> Link to Organization / User","{org}","[pullorissue]"],
        ["{org}",null,"[pullorissue]","https://github.com/{org}"],
        ["@{org}",null,"[pullorissue]","https://github.com/{org}"]
    ]
};
