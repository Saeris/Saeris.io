# Project Styleguide

## <a name="contents"></a> Table of Contents:

  - [General Coding Style Resources](#resources)
  - [Aurelia & ES6 Styleguide](#styleguide)
    - [Project Structure](#structure)
    - [Custom Elements](#elements)
    - [View Models](#viewmodel)
    - [Sass Stylesheets](#sass)

> *[Return to Directory](README.md)*

## <a name="resources"></a> General Coding Style Resources

In general, please follow Airbnb's styleguides which can be found here:

[Airbnb JavaScript Styleguide](https://github.com/airbnb/javascript)
[Airbnb CSS / Sass Styleguide](https://github.com/airbnb/css)

Please use Tabs instead of Spaces to indent code. Set your default Tab length to 2 spaces.

> *[Back to Top](#contents)*

## <a name="styleguide"></a> Aurelia & ES6 Styleguide

Please follow these guidelines when contributing to this project. Keep in mind that you are working with a team of developers.
When writing code it's important to follow convention in order to increase readability and make it easier for someone else on
the team to jump in and pick up where you left off.

> *[Back to Top](#contents)*

### <a name="structure"></a> Project Structure

This application is broken down into a modular, component based structure. The most relevant files for any particular component are
grouped together to minimize the need to hunt down related code.

*Files and Folders:*

```
|
|--dist - Webpack Build Directory
|
|--doc - Project documentation
|
|--node_modules - Local cache of project dependencies.
|
|--src
|   |--app - Root directory for all Aurelia related files.
|   |   |
|   |   |--attributes - Location of all Custom Attribute classes (See Aurelia Docs
|   |   |               for more info).
|   |   |
|   |   |--components - Root directory for all Custom Elements (Web Components).
|   |   |          |
|   |   |          |--core - Components that are part of the core site, ie: Header,
|   |   |          |         Footer, etc.
|   |   |          |    
|   |   |          |--containers - Structural components, ie: Results List, Fluid
|   |   |          |               Two-Column, etc.
|   |   |          |
|   |   |          |--resources - Frequently re-used general purpose components, ie:
|   |   |          |              Star Rating, etc.
|   |   |          |
|   |   |          ---<Feature> - Each category of features has it's own folder to
|   |   |                    |    group components related to that feature together.
|   |   |                    |
|   |   |                    |--<Component> - Each component lives in it's own folder
|   |   |                    |                to keep related files neatly organized.
|   |   |                    |
|   |   |                    --- index.js - Each "Feature" has an index file which
|   |   |                                   is used to load all related components as
|   |   |                                   global resources.
|   |   |
|   |   |--converters - Location of all Value Converters (JavaScript Utility Class,
|   |   |               see Aurelia Docs).
|   |   |
|   |   |--models - Location of all Data Models.
|   |   |
|   |   |--routes - Root directory for all Page Routes.
|   |   |      |
|   |   |      |--home - The application base route aka the homepage.
|   |   |      |
|   |   |      ---<Route> - Each route from the base URL has it's own folder, which
|   |   |              |    contains the vode necessary to render that route.
|   |   |              |
|   |   |              ---<Child Route> - Some routes have subroutes (ie: a two-column
|   |   |                                 layout with a subnavigation). Each subroute has
|   |   |                                 it's own folder.
|   |   |
|   |   ---services - Location of all Micro Service models (Typically JavaScript classes
|   |                 that talk to external APIs or messaging between components).
|   |
|   |--img - Location of all static image assets, with subfolders to semantically
|   |        group related images.
|   |
|   |--sass - Root directory of all Sass stylesheets.
|   |    |
|   |    |--util - Location of utility scripts, such as mixins, font-face definitions, etc.
|   |    |    |
|   |    |    |--_reset.scss - A Sass partial used to reset styles across browsers
|   |    |    |                to ensure consistency of rendering.
|   |    |    |
|   |    |    ---fonts - Location of font files.
|   |    |
|   |    |--_variables.scss - A Sass partial that contains a global list of variables
|   |    |                    such as color definitions, standard sizes, etc.
|   |    |
|   |    ---global.scss - Master Sass file used as an index for loading all internal
|   |                     and vendor stylesheets.
|   |
|   |--app.html - The application root, this consists of the header, router view,
|   |             and footer elements.
|   |
|   |--app.js - View model for the application root, router settings are defined here,
|   |           import point for global stylesheets, libraries.
|   |
|   ---main.js - Aurelia configuration file. This is the first script loaded by the page,
|                setting up the application envrionment. Global resources are defined here.
|
|--test - Root Directory for files related to automated unit tests
|   
|--index.html - Application entrypoint
|
|--package.json - Project information, scripts and dependency list for Node
|
|--webpack.config.babel.js - Application bundler settings
|
---yarn.lock - Dependecy relationship definition to ensure consistency across environments
```

> *[Back to Top](#contents)*

### <a name="elements"></a> Custom Elements

By default, each custom element lives in it's own folder and has at minimum three files: the View (.html), the View Model (.js), and the Stylesheet (.scss). Each of those files match the name of their parent folder, which matches the name of the custom element tag (`<my-element></my-element>`).

Always use a wrapper element inside of your `<template></template>` definition, such as `div`, `fieldset`, `section`, etc. That element should either have a `class` or `id` with a name that matches the name of the custom element. The purpose of which is to scope CSS to that element using Sass nesting.

*Example View:*

```html
<template>
  <fieldset class="search-autocomplete">
    <h3>${config.name}<button click.delegate="reset($event)">Reset</button></h3>
    <div class="search-wrapper">
      <input type="search" ref="input" list="results" name="search" placeholder="${config.placeholder}"/>
      <datalist id="results">
        <option repeat.for="result of results" value="${result.name}">
      </datalist>
    </div>
  </fieldset>
</template>
```

> *[Back to Top](#contents)*

### <a name="viewmodel"></a> View Models

Avoid using `<require></require` tags to import assets such as .css files in view templates. Instead use `import './path/to/file.ext'` in the view model. This is the preferred method for including a component's .scss file.

Where possible, avoid using `require()` syntax for importing external resources in the view model. Always try to use the ES6 `import` method. The reason for this is because when Webpack bundles the application it goes through a process called 'Tree Shaking', whereby it checks for dead code and removes it from the application bundle.

`import` Aurelia resources first, followed by application resources such as Services or Models, then individual methods from vendor libraries where possible, with static assets such as .scss files last.

Unless necessary (such as when using the `@children` decorator), always use `@containerless` in view models. This cuts down unescessary markup from building up in the page source, making it easier to debug.

Always use the `@customElement('')` decorator to give your compnent an explicit name.

Always use dash-case for compnent names. Use semantic naming for your components, group similar components with a prefix, and use as concise a name as possible.

Name your view model class using CamelCase and match the component name. Do not use the `MyElementCustomElement` naming convention as suggested by Aurelia in the documentation, this decreases readability and is uncescessary when using the `@customElement('')` decorator.

Define `@bindable` properties first, including default values, then define class properties.

Define lifecycle methods first, such as `constructor() {}` and `attached() {}`, then define your methods.

Always use ES6 syntax for consistency. Use arrow functions `() => {}` for anonymous callback functions, `Async/Await` for asynchronous code, etc. Please refer to the RESOURCES guide for reading material regarding ES6.

*Example View Model:*

```javascript
import {bindable, customElement, inject} from 'aurelia-framework';
import API from '../../../services/search-api';
import uniqBy from "lodash/unionBy";
import Rx from '@reactivex/rxjs';
import './search-autocomplete.scss';

@customElement('search-autocomplete')
@inject(API)
export class SearchAutocomplete {
  @bindable config = {
    name: 'Search',
    placeholder: 'Search...',
    enpoint: 'products',
    parameter: 'name',
    suggestions: 20
  };

  results = [];

  constructor(api) {
    this.api = api;
  }

  attached() {
    Rx.Observable.fromEvent(this.input, "keyup")
    	.pluck("target")
    	.filter(el => el.matches("input"))
    	.pluck("value")
    	.filter(val => val.length > 2)
    	.debounceTime(250)
    	.distinctUntilChanged()
    	.switchMap(value => {
        let query = {
          limit: this.config.suggestions
        };
        query[this.config.parameter] = value;
        return this.api.queryBuilder(this.config.endpoint, query);
      })
    	.subscribe(results => this.results = uniqBy(results, 'name'));
  }

  reset() {
    $(this.input).val('');
    this.results = [];
  }
}
```

> *[Back to Top](#contents)*

### <a name="sass"></a> Sass Stylesheets

Import or define your Sass variables at the top of the stylesheet. Use concise semantic names for your variables.

Always scope your style definitions under the root `class` or `id` of the wrapper element. Use nesting to match the nesting of HTML elements in the view template, and only use classes to group or differentiate repeated elements. Otherwise use element selectors and nesting to keep your code clean and concise.

Always use Flexbox instead of Floats to structure your components. Flexbox is more responsive and does not require dirty hacks to fix page flow. Please refer to [CSS-Tricls'](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) excellent guide for how to use Flexbox. Use the `flex` shorthand.

Always use `rem`s as your default unit for sizing. Remember that `1rem` == `10px`. The reason for this is because when a user zooms in on or views the page from a mobile device, the markup will be scaled by the base font size for the page. `rem` is based on the vase font size, and so it scales more consistently than other units such as pixels. This is an important factor in keeping the application responsive.

Always group your attribute definitions by type. A rule of thumb for ordering your attributes is Display properties first, followed by structure such as Flex values, then width and height values, text values, and end with box sizing values from the outside in (border, margin, padding in that order). Doing so increases code readability.

Always horizontally align the values of your stylesheet. This increases readability.

Use the `&` reference to apply conditional styles and use pseudo-selectors such as `:hover` or `:first-child`.

Do not use browser prefixes such as `-moz` or `-webkit`. During the build process we use a [PostCSS](http://postcss.org/) plugin called [AutoPrefixer](https://github.com/postcss/autoprefixer) to automatically generate these CSS attributes.

Only use browser specific pseudo-selectors where absolutely necessary. Try to find alternate solutions to enforce consistency of styles.

*Example Stylesheet:*

```scss
$header:                #5A5050;
$text:                  #7c9398;
$textHover:             #3a585f;
$stroke:                #ebedf2;

.filter-search {
  width:                30rem;
  padding:              1.5rem;

  button {
    background:         none;
    border:             none;

    &:focus {
      outline:          none;
    }
  }

  label {
    font-weight:        normal;
    margin:             0;
  }

  h3 {
    display:            flex;
    justify-content:    space-between;
    width:              100%;
    color:              $header;
    font-size:          1.6rem;
    font-weight:        bold;
    border:             none;
    margin-top:         0;
    margin-bottom:      1.5rem;

    button {
      color:            $text;
      line-height:      2rem;
      font-size:        1.4rem;
      font-weight:      normal;

      &:hover {
        color:          $textHover;
      }
    }
  }

  .search-wrapper {
    width:              27rem;
    overflow:           hidden;
    vertical-align:     middle;
    white-space:        nowrap;
    border:             0.1rem solid $stroke;
    border-radius:      0.5rem;

    input[type="search"] {
      width:            27rem;
      height:           3rem;
      color:            $text;
      font-size:        1.5rem;
      background:       none;
      border:           none;
      border-radius:    0.5rem;
      padding-left:     1rem;

      &::-webkit-input-placeholder {
        color:          $text;
      }

      &::-webkit-calendar-picker-indicator {
        display:        none;
      }

      &:focus {
        outline:        none;
      }
    }
  }
}
```

> *[Back to Top](#contents)*
