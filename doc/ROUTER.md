# Router documentation

The purpose of this document is to provide an outline for how navigation through the application works. Provided is description of how URL's are structured and a site map describing the current set of routes as well as descriptions of the various dashboard widgets, and Aurelia implementation documentation.

## <a name="contents"></a> Table of Contents:

  - [URL Structure](#url)
  - [Site map](#routes)
  - [Aurelia Router Configuration](#implementation)

> *[Return to Directory](README.md)*

##<a name="url"></a> URL Structure

Aurelia is a single-page application framework, meaning that when a user navigates throughout the application, they are never actually navigating away from the original entry point. In order to emulate traditional site navigation, Aurelia's router automatically rewrites the current URL to reflect where the user is within the application. Because the URL represents where a user is within the application, it is important to remember that a user can still use the URL to navigate similar to a traditional website.

Application routes are organized into two categories, public and private, to easily distinguish between routes that require authetication and those that do not. Unauthenticated users by default are redirected to a `login` route, and all invalid URL's are redirected to the `error` route.

All routes branch off of the base URL, hereby refered to as `root`.

Example of a basic route:

`root/home`

This will navigate to the `home` route, which is a view that contains all of the markup and components needed to render that view. The view model for `home` contains all the configuration data, models and services necessary to render that route and all of it's subroutes.

Example of route parameters:

`root/posts/:id`

`:id` is a route parameter that is used by the parent route's view model to load specific information from an API. In this case, `:id` represents a post id which is used by the `posts` route view model to the content of a specific post.

> *[Back to Top](#contents)*

##<a name="routes"></a> Site map

**Public Routes:**
  - `home`: The default landing page. Unlike other routes, `home` is represented by the base URL, aka `root`.
  - `error`: Redirect route for errors and invalid URL's. Display error status information.
  - `test`: A special development-only route used as a sandbox to test new functionality.

> *[Back to Top](#contents)*

##<a name="implementation"></a> Aurelia Router Configuration

*Coming soon...*

> *[Back to Top](#contents)*
