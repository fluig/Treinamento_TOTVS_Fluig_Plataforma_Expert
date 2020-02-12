
TLib.prototype=new Object();
/**
 * WCM Library
 */
var WCMAPI = new TLib();

/**
 * Changes a browser cookie value
 */
TLib.prototype.setCookie = function(cookieName, value, expireTimeInDays) {
};

/**
 * @returns a browser cookien by its name
 */
TLib.prototype.getCookie = function(cookieName) {
	return "";
};

/**
 * @returns the default domain url
 */
TLib.prototype.getDefaultDomainURL = function() {
	return "";
};

/**
 * Parse an error in order to make it human readable
 */
TLib.prototype.failHandler = function(args) {
};

/**
 * Create a text modal
 */
TLib.prototype.createTextModal = function(text) {
};

/**
 * Removes the text modal
 */
TLib.prototype.removeTextModal = function() {
};

/**
 * Verify is a object is an array
 */
TLib.prototype.isArray = function(obj) {
	return true;
};

/**
 * Identify the browser and inserts its name and version into the message body
 */
TLib.prototype.identifyBrowser = function() {
};

/**
 * Verify if there are errors in the response.
 */
TLib.prototype.returnOk = function(response) {
	return true;
};

/**
 * Sends (GET) messages to the server. errorCallback is optional
 */
TLib.prototype.callCommand = function(command, data, oObj, callback,
		errorCallback, dataType) {
};

/**
 * Checks if the version has expired and schedules to show the session
 * expiration alert to about one hour.
 */
TLib.prototype.extendSession = function() {
};

/**
 * Shows a session expired message
 */
TLib.prototype.expireSession = function(tLibSelf) {
};

/**
 * Check if the user is logged, or not
 */
TLib.prototype.getUserIsLogged = function() {
	return true;
};

/**
 * @returns space alias character
 */
TLib.prototype.getSpaceAlias = function() {
	return "";
};

/**
 * @returns the server url
 */
TLib.prototype.getServerURL = function() {
};

/**
 * @returns the context path
 */
TLib.prototype.getContextPath = function() {
	return "";
};

/**
 * @returns the server context URL
 */
TLib.prototype.getServerContextURL = function() {
	return "";
};

/**
 * @returns the Page Code (used for url)
 */
TLib.prototype.getPageCode = function() {
	return "";
};

/**
 * @returns the type of the page
 */
TLib.prototype.getPageType = function() {
	return "";
};

/**
 * @returns the page layout
 */
TLib.prototype.getPageLayout = function() {
	return "";
};

/**
 * @returns the parent page code of the current page
 */
TLib.prototype.getParentPageCode = function() {
	return "";
};

/**
 * @returns the frienldy (tiny) URL
 */
TLib.prototype.getFriendlyURL = function() {
	return "";
};

/**
 * @returns the theme ID
 */
TLib.prototype.getThemeId = function() {
	return "";
};

/**
 * @returns the menu color
 */
TLib.prototype.getColorMenu = function() {
	return "";
};

/**
 * @returns the background color
 */
TLib.prototype.getColorBackground = function() {
	return "";
};

/**
 * @returns the image background, when it exists. Otherwise returns null
 */
TLib.prototype.getImageBackground = function() {
	return "";
};

/**
 * @returns the image logo, when it exists. Otherwise returns null
 */
TLib.prototype.getImageLogo = function() {
	return "";
};

/**
 * @returns the space ID
 */
TLib.prototype.getSpaceId = function() {
	return "";
};

/**
 * @returns the locale. Default value is pt_BR
 */
TLib.prototype.getLocale = function() {
	return "";
};

/**
 * @returns the locale display name. Default is português (Brasil)
 */
TLib.prototype.getLocaleDisplayName = function() {
	return "";
};

/**
 * Changes the session locale
 */
TLib.prototype.changeLocale = function(locale) {
};

/**
 * Check if the current user has administration role
 */
TLib.prototype.isAdmin = function() {
	return "";
};

/**
 * @returns user name.
 */
TLib.prototype.getUser = function() {
	return "";
};

/**
 * @returns user login
 */
TLib.prototype.getUserLogin = function() {
	return "";
};

/**
 * @returns current user ID
 */
TLib.prototype.getUserId = function() {
	return "";
};

/**
 * @returns organization ID
 */
TLib.prototype.getOrganizationId = function() {
	return "";
};

/**
 * @returns current tenant ID
 */
TLib.prototype.getTenantId = function() {
	return "";
};

/**
 * @returns current Tenant Code
 */
TLib.prototype.getTenantCode = function() {
	return "";
};

/**
 * @returns current user code
 */
TLib.prototype.getUserCode = function() {
	return "";
};

/**
 * @returns current user e-mail
 */
TLib.prototype.getUserEmail = function() {
	return "";
};

/**
 * Register a new listener in the listeners buffer
 */
TLib.prototype.addListener = function(oObj, eventName, callback, listenerName) {
	return true;
};

/**
 * Remove a listener from the listener buffer
 */
TLib.prototype.removeListener = function(eventName, listenerName) {
};

/**
 * Fire an event listener
 */
TLib.prototype.fireEvent = function(eventName, data) {
};

/**
 * Verify if an listener is already registered.
 */
TLib.prototype.containsListener = function(eventName, listener, varIdx) {
	return true;
};

/**
 * Executes Login
 */
TLib.prototype.login = function(user, password) {
	return "";
};

/**
 * Executes Logoff
 */
TLib.prototype.logoff = function() {
};

/**
 * Generic load CSS.
 */
TLib.prototype.loadCSS = function(path) {
};

/**
 * Generic load java script.
 */
TLib.prototype.loadJS = function(path) {
};

/**
 * @returns the javascript base path
 */
TLib.prototype.jsBasePath = function() {
	return '';
};

/**
 * Checks and do authentication in OAuth
 */
TLib.prototype.validateAndAuthenticateOAuth = function(consumerKey) {
	return true;
};

/**
 * Check OAuth
 */
TLib.prototype.validateOAuth = function(consumerKey) {
	return true;
};

/**
 * Checks if the current environment is mobile (Android or iOS only)
 */
TLib.prototype._isMobile = function() {
	return true;
};

/**
 * Checks if the browser is Internet Explorer
 */
TLib.prototype.isIe = function() {
	return "";
};

/**
 * Checks if the browser is Internet Explorer 9
 */
TLib.prototype.isIe9 = function() {
	return "";
};

/**
 * @returns the greater z-index used on the page
 */
TLib.prototype.getZIndex = function() {
	return 1;
};

/**
 * @returns an auto-incremental wcmid
 */
TLib.prototype.generateId = function() {
	return "";
};

/**
 * Updates an widget preferences and reopen it with edit mode on
 * 
 * @param instanceId
 *            Widget Instance ID.
 * @param prefs
 *            Object with the properties to be saved.
 * @returns <b>true</b> if the operation was successfull or false otherwise.
 */
TLib.prototype.updateWidgetPreferences = function(instanceId, prefs) {
	return true;
};

/**
 * Updates an widget preferences according to the logged user and reopen it with
 * edit mode on
 * 
 * @param instanceId
 *            Widget Instance ID.
 * @param prefs
 *            Object with the properties to be saved.
 * @param targetID
 *            Area ID <i>(Usually a "div")</i> where the content will be
 *            renderized in case of success
 * @returns <b>true</b> if the operation was successfull or false otherwise.
 */
TLib.prototype.updateUserWidgetPreferences = function(instanceId, prefs) {
	return true;
};

/**
 * @returns the value of a certain URL parameter name
 */
function getURLParameter(name) {
	return "";
};

/**
 * @returns value of a certain session attribute
 */
TLib.prototype.getSessionAttribute = function(name) {
};

/** 
 * @returns value of a certain URL parameter
 */
TLib.prototype._get = function(name) {
	return null;
};

/**
 * @returns value of a certain URL parameter based on its name and URL too
 */
TLib.prototype._getParam = function(url, name) {
	return null;
};

/**
 *  Alias for "String.replaceAll()"
 */
TLib.prototype.replaceAll = function(str, de, para) {
	return "";
};

/** 
 * Checks if the object is a JSON
 */
TLib.prototype.isJSON = function(object) {
	return true;
};

/**
 * @returns <b>true</b> if object is undefined or <b>false</b> otherwise
 */
TLib.prototype.isUndefined = function(object) {
	return true;
};

/**
 * @returns <b>true</b> if object is null or <b>false</b> otherwise
 */
TLib.prototype.isNull = function(object) {
	return true;
};

/**
 * @returns <b>true</b> if object is a String or <b>false</b> otherwise
 */
TLib.prototype.isString = function(object) {
	return true;
};

/**
 * @returns <b>true</b> if object is a Number or <b>false</b> otherwise
 */
TLib.prototype.isNumber = function(object) {
	return true;
};

/** similar to the YAHOO.lang.isObject */
TLib.prototype.isObject = function(object) {
	return true;
};

/**
 * @returns clone of a certain object
 */
TLib.prototype.cloneObject = function(source) {
	return null;
};

/**
 @returns <b>true</b> if object is empty or <b>false</b> otherwise
 */
TLib.prototype.isEmpty = function(object) {
	return true;
};

// TODO: existia no wcm-core.js.
WCM = {};
WCM.contextUrl = WCMAPI.getContextPath() + "/wcm";
WCM.restUrl = "/wcm/api/rest/wcm/";
