'use strict';

var schemata = require("bolt-internal-schemata");
var mongoose = require('mongoose');

var appModel = mongoose.model('App', schemata.app);
var appRoleAssocModel = mongoose.model('AppRoleAssoc', schemata.appRoleAssoc);
var appUserAssocModel = mongoose.model('AppUserAssoc', schemata.appUserAssoc);
var boltSecretModel = mongoose.model('BoltSecret', schemata.boltSecret);
var collectionModel = mongoose.model('Collection', schemata.collection);
var extensionModel = mongoose.model('Extension', schemata.extension);
var hookModel = mongoose.model('Hook', schemata.hook);
var permissionModel = mongoose.model('Permission', schemata.permission);
var roleModel = mongoose.model('Role', schemata.role);
var routerModel = mongoose.model('Router', schemata.router);
var userModel = mongoose.model('User', schemata.user);
var userRoleAssocModel = mongoose.model('UserRoleAssoc', schemata.userRoleAssoc);

module.exports = {
	app : appModel,
	appRoleAssoc : appRoleAssocModel,
	appUserAssoc : appUserAssocModel,
	boltSecret : boltSecretModel,
	collection: collectionModel,
	extension: extensionModel,
	hook: hookModel,
	permission : permissionModel,
	role : roleModel,
	router: routerModel,
	user : userModel,
	userRoleAssoc : userRoleAssocModel
};