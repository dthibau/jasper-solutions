({
    baseUrl: '',
    optimize: 'none',
    paths: {
			'Raphael': 'raphael' , 		
			'RaphaelCircle': 'RaphaelMap',
	    }, 
	
	// Start/end wrapper to help the script to properly find requireJs in different environments    
	wrap: {
        start: "if (typeof define === 'function' && define.amd){}\nelse if (typeof __visualize__ !== 'undefined' &&\ntypeof __visualize__.define === 'function')\n{\n}\n\n(function(root){\n\nvar define = root.define;\n\n",
        end: "\n\n}(typeof __visualize__ != 'undefined' ? __visualize__ : window));"
    },
    
    name: "RaphaelMap",
    out: "RaphaelMap.min.js"
})
