({
    baseUrl: '',
    paths: {
        jquery_hc: "jquery",
        hchart: "highcharts.src",
        'hc_sparklines': 'hc_sparklines'
    },
    shim: {
    	'hchart' : {
    		deps: ["jquery_hc"],
    		exports: 'Highcharts'
    	}
    },
    name: "hc_sparklines",
    out: "hc_sparklines.min.js"
})
