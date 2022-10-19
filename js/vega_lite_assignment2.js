var item1 = "https://raw.githubusercontent.com/QiyuTang777/FIT3179_Studio24/main/js/world_population.json";
vegaEmbed("#world_map", item1).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var item2 = "https://raw.githubusercontent.com/QiyuTang777/FIT3179_Studio24/main/js/Population%20density%20of%20different%20ranking%20countries.json";
vegaEmbed("#density", item2).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var item3 = "https://raw.githubusercontent.com/QiyuTang777/FIT3179_Studio24/main/js/World_Growth_Rate%26Population.json";
vegaEmbed("#growth_rate", item3).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var item4 = "https://raw.githubusercontent.com/QiyuTang777/FIT3179_Studio24/main/js/world_female_percentage.json";
vegaEmbed("#female_percentage", item4).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);