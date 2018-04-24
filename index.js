const async = module.parent.require("async");
const db = module.parent.require("./database");
const ModuleSockets = module.parent.require("./socket.io/modules");

const plugin = {};

plugin.init = (params, callback) => {
    let app = params.router;
    let middleware = params.middleware;
    app.get("/admin/plugins/mff-badge", middleware.admin.buildHeader, renderAdmin);
    app.get("/api/admin/plugins/mff-badge", renderAdmin);
    callback();
};

plugin.addAdminNavigation = (header, callback) => {
    header.plugins.push({
        route: "/plugins/mff-badge",
        name: "Badges de compétences"
    });
    callback(null, header);
};

plugin.addBadgeToUserProfile = (field, callback) => {

    callback(field);
}

plugin.fetchUserList = (users, uid, callback) => {
    
    callback(users, uid);
}

renderAdmin = (req, res, next) => {
    res.render("admin/plugins/mff-badge", {});
};



module.exports = plugin;
