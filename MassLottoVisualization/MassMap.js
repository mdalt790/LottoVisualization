// County Map

const massCounty = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "width": 500,
    "height": 500,
    "params": [{
        "name": "massMapCounty",
    }],
    "data": {
        "url": "Data/COUNT/COUNTIESSURVEY_ARC_GENCOAST.json",
        "format": {
            "property": "features"
        }
    },
    "projection": {
        "type": "mercator",

    },
    "mark": {
        "type": "geoshape",
        "stroke": "black",
        //"fill":"blue", 
        "strokeWidth": .5   
    }, 
};

vegaEmbed('#county_map', massCounty)