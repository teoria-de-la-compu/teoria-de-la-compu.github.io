import 'reveal.js/dist/reveal.css'
// see available themes in the
// node_modules/reveal.js/dist/theme
//  beige, black, blood, league, moon, night, serif, simple, ...
import 'reveal.js/dist/theme/sky.css'
import Reveal from 'reveal.js'
import Markdown from 'reveal.js/plugin/markdown/markdown.js';
import MathJax3	from 'reveal.js/plugin/math/math.esm.js';

const deck = new Reveal()
deck.initialize(
  { 
    // disableLayout: true,
    // center: false,
    hash: true, 
    slideNumber: true,
	  mathjax3: {
	    mathjax: 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js',
	    tex: {
	      inlineMath: [ [ '$', '$' ], [ '\\(', '\\)' ]  ]
	    },
	    options: {
	      skipHtmlTags: [ 'script', 'noscript', 'style', 'textarea', 'pre' ]
	    },
	  },
	  plugins: [ Markdown, MathJax3 ]
	})
