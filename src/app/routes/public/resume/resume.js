import moment from 'moment'
import './resume.scss'

export class Resume {
  resume = {
  	name: `Drake Costa`,

  	headline: `Front-End JavaScript Engineer`,

  	contact: {
  		email: `drake@saeris.io`,
  		phone: `(925) 548-2801`,
  		links: [
  			{ title: `Portfolio`, icon: `code`, url: `http://www.saeris.io` },
  			{ title: `GitHub`, icon: `github`, url: `http://www.github.com/Saeris` },
  			{ title: `LinkedIn`, icon: `linkedin`, url: `http://www.linkedin.com/in/saeris` }
  		]
  	},

  	skills: [
  		{ name: `HTML`, rating: 5, level: `Master`, years: 17 },
  		{ name: `CSS`, rating: 5, level: `Master`, years: 17 },
  		{ name: `JavaScript`, rating: 4, level: `Expert`, years: 5 },

  		{ name: `Aurelia`, rating: 4, level: `Expert`, years: 1 },
      { name: `React`, rating: 1, level: `Beginner`, years: 1 },
  		{ name: `Redux`, rating: 2, level: `Intermediate`, years: 1 },

  		{ name: `GraphQL`, rating: 3, level: `Advanced`, years: 1 },
  		{ name: `Apollo`, rating: 2, level: `Intermediate`, years: 1 },
  		{ name: `Sass`, rating: 3, level: `Advanced`, years: 2 },

  		{ name: `Node.js`, rating: 2, level: `Intermediate`, years: 3 },
  		{ name: `Hapi.js`, rating: 3, level: `Advanced`, years: 1 },
  		{ name: `Express.js`, rating: 3, level: `Advanced`, years: 1 },

  		{ name: `Snap.svg`, rating: 2, level: `Intermediate`, years: 1 },
  		{ name: `Bookshelf.js`, rating: 3, level: `Advanced`, years: 2 },
  		{ name: `Passport.js`, rating: 1, level: `Beginner`, years: 1 },

  		{ name: `jQuery`, rating: 3, level: `Advanced`, years: 5 },
  		{ name: `PHP`, rating: 3, level: `Advanced`, years: 3 },
  		{ name: `MySQL`, rating: 4, level: `Expert`, years: 5 },

      { name: `Webpack`, rating: 4, level: `Expert`, years: 1 },
  		{ name: `Gulp`, rating: 2, level: `Intermediate`, years: 1 },
  		{ name: `Grunt`, rating: 2, level: `Intermediate`, years: 1 },

  		{ name: `Photoshop`, rating: 5, level: `Master`, years: 15 },
  		{ name: `Illustrator`, rating: 5, level: `Master`, years: 8 },
      { name: `3DS Max`, rating: 3, level: `Advanced`, years: 4 },

      { name: `Git`, rating: 3, level: `Advanced`, years: 2 },
      { name: `JIRA`, rating: 1, level: `Beginner`, years: 1 },
  		{ name: `Ubuntu`, rating: 2, level: `Intermediate`, years: 5 }
  	],

  	jobs: [
    {
  		company: `4-Tell`,
  		title: `UI/UX Developer`,
  		start: `October 2016`,
  		end: `December 2016`,
  		location: `Portland, OR`,
  		summary: `Originally looking to hire a lead-level engineer, 4-Tell brought me on board to help them build their new Insights product. As the sole Front-End developer on the team, I was tasked with architecting the platform on which this new product would be built and translating their early designs into a working application. Ultimately it was decided that the scope of this project was more than what someone of my level of experience would be able to deliver in the company's exceedingly tight schedule.`,
  		tags: [`Aurelia`, `Webpack`, `Redux`, `Sass`, `SPA`, `Microsoft Azure`, `Buddy.works`, `Continuous Integration`, `Project Documentation`, `Platform Architecture`],
  		highlights: [
        `Independently architected a single-page application platform using <a href='http://aurelia.io/' target='_blank' rel='noopener'>Aurelia<\/a>, Redux, and <a href='http://dev.apollodata.com/' target='_blank' rel='noopener'>Apollo<\/a> to build a next-generation online retail analytics product.`,
        `Worked with a team of back-end engineers to develop a modern <a href='http://graphql.org/' target='_blank' rel='noopener'>GraphQL<\/a> powered API service strategy going forward.`,
        `Responsible for implementing a continuous integration pipeline using <a href='https://buddy.works/' target='_blank' rel='noopener'>Buddy.works<\/a> deploying to a Microsoft Azure web app, as well as instituting structured contribution guidelines following the <a href='http://jeffkreeftmeijer.com/2010/why-arent-you-using-git-flow/' target='_blank' rel='noopener'>Git-Flow<\/a> model. Additionally introduced the team to <a href='https://www.gitkraken.com/' target='_blank'  rel='noopener'>GitKraken<\/a>, resulting in an improved Git commit process company wide, reducing time spent digging through documentation.`,
        `Wrote detailed project documentation designed to quickly bring new developers up to speed with the project architecture, coding standards, and conventions necessary for working on an enterprise scale Aurelia project.`,
        `Translated provided UI mockups into working interfaces including: Login, Site Selection, Dashboard Navigation, Site Analytics Summary and Details pages, as well as router configuration.`
      ],
  		assignments: []
    }, {
  		company: `Catalyst DevWorks`,
  		title: `Front-End Technical Lead`,
  		start: `August 2015`,
  		end: `February 2016`,
  		location: `Beaverton, OR`,
  		summary: `Catalyst provides it's clients with best-in-class teams of talented software developers who work closely with product owners to deliver top-tier applications. For my role at Catalyst, I worked internally on the company's talent management project as well as onsite at their client Cambia Health Solutions as a Front-End Web Developer.`,
  		tags: [`Agile`, `Front-End Web Development`, `JavaScript`, `UI Design`, `UX Design`],
  		highlights: [],
  		assignments: [{
  			name: `Cambia Health Solutions`,
  			description: `Regence/Asuris Insurance Mobile Optimization Project`,
  			summary: ``,
  			start: `August 2015`,
  			end: `January 2016`,
  			tags: [`Apache Velocity`, `Liferay`, `Intellij IDEA`, `Flexbox`, `Git`, `Grunt`, `Java`, `Sass`],
  			highlights: [
  				`Responsible for front-end development of password recovery, message center, and member dashboard pages for <a href='https://www.regence.com/web/regence_individual/' target='_blank'  rel='noopener'>Regence BlueCross<\/a> and <a href='https://www.asuris.com/' target='_blank'  rel='noopener'>Asuris Health<\/a>.`,
  				`Trained fellow developers in the use of CSS Flexbox, resulting in faster development, cleaner, more maintainable markup, and a significantly more responsive mobile experience.`,
  				`Audited the front-end build chain and helped implement more efficient use of Node modules, Grunt and SASS. Upgrading to NPM 3 cut duplicate files down from roughly 2.6 million (6+ Gb) to under 30 thousand (250 Mb). As a result, full builds take 15 minutes down from over 1 hour.`
			  ]
	    }, {
  			name: `Catalyst`,
  			description: `Talent Management Application`,
  			summary: ``,
  			start: `January 2016`,
  			end: `February 2016`,
  			tags: [`Aurelia`, `Bootstrap`, `Docker`, `Gulp`, `JIRA`, `Project Documentation`, `Sass`, `SPA`, `Team Leadership`, `UI Design`, `UX Design`, `Web Components`, `Wireframing`],
  			highlights: [
  				`Took the lead on the front-end of the project, providing wire-frames, developing the user experience, and engineering the application's structure within the Aurelia framework. In the face of rapidly changing project goals, I quickly adapted to new requirements and iterated on the design to suit the needs of the product owner.`,
  				`Lead a team of five junior developers, helping to bring them up to speed with project technologies such as Aurelia, Docker, and Flexbox, as well as ensuring they understood the project structure from a conceptual level.`,
  				`Wrote supporting documentation for developer on-boarding, facilitating quick ramp-up times in an environment where developers are frequently rolled on and off the project.`
			  ]
	    }]
	  }, {
  		company: `Sellpoints, Inc.`,
  		title: `Contract Front-End Web Developer`,
  		start: `December 2014`,
  		end: `May 2015`,
  		location: `Emeryville, CA`,
  		summary: `As a contractor for Sellpoints, my daily work involved the creation of product pages and interactive content for our customers to be syndicated across Sellpoints' network of online retailers. While initially I was only brought on to fill in temporarily, the rate at which I got up to speed with the platform and the amount of work I was accomplishing was quickly noticed. Immediately I was bumped up from temp to contract-to-hire.`,
  		tags: [`AJAX`, `Bugzilla`, `Front-End Web Development`, `JavaScript`, `jQuery`, `SVG`, `UI Design`, `UX Design`],
  		highlights: [
  			`Programmed a browser extension using jQuery and AJAX to automate common tasks for the production team, resulting in hundreds of work hours saved and drastically reduced error rates.`,
  			`Coded the front-end for the Nicole Miller IBM Watson powered search results prototype shown at CES 2015. As a result, Sellpoints received a <a href='https://www-03.ibm.com/press/us/en/pressrelease/46950.wss' target='_blank'  rel='noopener'>$7.5 million Series C investment from IBM<\/>.`,
  			`Updated Sellpoints’ collection of raster callout icons to a modern, vector-based icon font which will allow for greater customization, faster page load times, and a more consistent experience across a range of devices in the future. Result: <a href='http://saeris.github.io/sellpoints_i2/demo.html' target='_blank'  rel='noopener'>227 customizable glyphs delivered in 2 http requests, totaling 39kb/50ms<\/a>.`
  		],
  		assignments: []
  	}, {
  		company: `Blizzard Entertainment`,
  		title: `Level Design Intern`,
  		start: `June 2012`,
  		end: `September 2012`,
  		location: `Irvine, CA`,
  		summary: `After years of creating custom maps and helping to grow the mod community for StarCraft 2, Blizzard gave me the opportunity to take my work to the next level. Chosen as one of 40+ interns from a pool of nearly 10k applicants, I was a Multiplayer Level Design Intern for the StarCraft 2 team on Heart of the Swarm. My experience at Blizzard was transformative and gave me invaluable insight into the world of software and video game development.`,
  		tags: [`Agile`, `Balance Design`, `Game Design`, `Level Design`, `Multiplayer Design`, `StarCraft 2 Galaxy Editor`, `Tortoise SVN`],
  		highlights: [
  			`Designed <a href='http://wiki.teamliquid.net/starcraft2/Atlas_Station' target='_blank' rel='noopener'>3<\/a> <a href='http://wiki.teamliquid.net/starcraft2/Sky_Harvester' target='_blank'  rel='noopener'>multiplayer<\/a> <a href='http://wiki.teamliquid.net/starcraft2/Vault_of_Secrets' target='_blank'  rel='noopener'>maps<\/a> which shipped with Heart of the Swarm. Each was part of the official ladder where they were played millions of times, earned high ratings and praise for fostering innovative play.`,
  			`Pitched and contributed to the development of the ‘Data Navigator’ visualization tool, which assists developers and fans in understanding the complex structure of game assets, speeding their creation.`,
  			`Helped develop new community engagement strategies. As a result developers now communicate directly with mod developers, helping to both educate the community and resolve tools related bugs faster.`
  		],
  		assignments: []
	  }],

  	projects: [
    {
      name: `Saeris.io`,
      url: `http://www.saeris.io`,
      start: `December 2016`,
      end: `Present`,
      tags: [`Aurelia`, `Webpack`, `Redux`, `Apollo`, `GraphQL`, `Sass`, `Snap.svg`],
      summary: `Personal website, blog and portfolio. Currently under construction. Not satisfied with any of the existing static blog frameworks out there, I decided to roll my own. It is designed to serve both static content and draw in additional data from public APIs such as Flickr. I'm developing this site as an open-source project which others can use as an example Aurelia application and fork for their own projects.`,
      highlights: []
    }, {
      name: `Compendium`,
      url: `http://mtgcompendium.com/`,
      start: `October 2016`,
      end: `Present`,
      tags: [`Aurelia`, `Webpack`, `Apollo`, `GraphQL`, `Sass`],
      summary: ``,
      highlights: [
        `A Magic: The Gathering collection management & deck building application built in Aurelia, written in ES6/ES2016, using Webpack for task management/bundling, Apollo as it's API service client, Redux for state management, Sass for styling, and Rx.js observables.`,
        `Currently features an API micro-service to build and send requests to the <a href='https://docs.magicthegathering.io/' target='_blank' rel='noopener'>Magic: The Gathering Developers API<\/a> that uses modern JavaScript features such as template strings, Async/Await and performs automatic caching. This will later be replaced by Apollo and the Scribe GraphQL backend also in development.`,
        `Utilizes Regular Expressions to parse rules text and apply formatting, convert mana and set symbol codes into icons, and build out lists of keywords for categorization.`
      ]
    }, {
      name: `Scribe`,
      url: `https://github.com/Saeris/Scribe`,
      start: `November 2016`,
      end: `Present`,
      tags: [`GraphQL`, `Hapi.js`, `Node.js`, `ES6`, `Bookshelf.js`, `Knex.js`, `MySQL`],
      summary: ``,
      highlights: []
    }, {
      name: `Snap.svg Dynamic Animation`,
      url: `http://saeris.github.io/svg_background/`,
      start: `June 2016`,
      end: `July 2016`,
      tags: [`Snap.svg`],
      summary: `Experimental animated SVG generated using the Snap.svg JavaScript library with controls for dynamically adjusting animation speed and tiling frequency. (Google Chrome recommended for best performance.)`,
      highlights: []
    }, {
  		name: `Aurelia Webpack Resume Builder`,
  		url: `https://github.com/Saeris/aurelia_resume_builder`,
  		start: `May 2016`,
  		end: `June 2016`,
  		tags: [`Aurelia`, `ES6`, `JavaScript`, `Sass`, `SPA`, `Web Components`, `Webpack`],
  		summary: `An online resume building application built with Aurelia, Webpack and Sass. Resumes are dynamically built inside a template from a json data source. The current build demos this functionality, with live editing and data file exports to be added soon!`,
  		highlights: []
  	}, {
  		name: `StarCraft II Melee Data Collection Library`,
  		url: `http://www.miritica.net/apps/MDCL/index.php`,
  		start: `September 2012`,
  		end: `March 2013`,
  		tags: [`Database Design`, `Google Chart Tools`, `jQuery`, `MySQL`, `PHP`],
  		summary: ``,
  		highlights: [
  			`Datamining project composed of a game modification that tracks over 100 data points and outputs them to an XML log file, and a PHP/MySQL based website designed to demonstrate analytical techniques.`,
  			`Completely self-designed and built from scratch, this project was both a proof of concept and an effort to familiarize myself with the tools and techniques needed to build an enterprise-level web application.`,
  			`The project has been entirely open-sourced and published to <a href='https://github.com/Saeris/SC2MDCL' target='_blank' rel='noopener'>Github<\/a> and work on a new <a href='https://github.com/Saeris/Yamato-Electron' target='_blank' rel='noopener'>JavaScript/SPA version<\/a> has begun.`
  		]
  	}],

  	schools: [{
  		name: `Gnomon School of Visual Effects`,
  		location: `Hollywood, CA`,
  		status: `Attended`,
  		start: `Fall 2011`,
  		end: `Spring 2012`,
  		focus: `Individual Courses`,
  		tags: [`Adobe Photoshop`, `Autodesk 3DS Max`, `Autodesk Maya`, `Unreal Engine`],
  		summary: ``,
  		highlights: []
  	}, {
  		name: `Las Positas College`,
  		location: `Livermore, CA`,
  		status: `Graduated`,
  		start: `Fall 2006`,
  		end: `Spring 2010`,
  		focus: `AA – VISUAL COMMUNICATIONS, EMPHASIS IN PRINT + WEB DESIGN`,
  		tags: [`Adobe Illustrator`, `Adobe Lightroom`, `Adobe Photoshop`, `Graphic Design`, `Photography`, `Typography`, `Web Design`],
  		summary: ``,
  		highlights: []
  	}]
  }

  constructor() {
    this.log = LogManager.getLogger(`Saeris.io/${this.constructor.name}`)
  }

  attached() {
  }

  getDuration(start, end) {
    if (end === `Present`) { end = moment() }
    return moment(end, `MMMM YYYY`).add(1, `M`).from(moment(start, `MMMM YYYY`), true)
  }
}
