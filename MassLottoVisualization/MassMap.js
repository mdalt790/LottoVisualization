const massCountyPopulation = {
        
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "width": 2000,
    "height": 2000,
    "data":{
        "url":"Data/COUNT/COUNTIESSURVEY_POLYM_GENCOAST.json",
        "format": {"type": "json","property": "features"}
    },
    "title":{
        "text":"County Population",
        "fontSize":"50",
    },
    "projection": {"type": "identity", "reflectY": true},
    "transform":[
        {
            "lookup": "properties.COUNTY",
            "from": {
                "key": "County",
                "fields": ["total_POP2020"],
                "data": {
                    "url": "Data/LottoData/winningsPerCounty.csv",
                    "format": {"type": "csv"}
                }
            }
        }
    ],
    "mark": "geoshape",
    "encoding": {
        "color": {
            "field": "total_POP2020",
            "type":"quantitative",
            "scale":{"scheme": "blues"},
            "title":"Population"
        },
        "tooltip" :[
            {"field": "properties.COUNTY", "title": "County"},
            {
                "title": "Population",
                "field": "total_POP2020",
                "type": "quantitative",
                "format": ",.0f"
            }
        ]
    },
    
    "config": {
        "mark": {"invalid": null},
        "legend": {
          "labelFontSize": 36,  
          "titleFontSize": 36   
        }
    }
};
vegaEmbed('#massCountyPopulation', massCountyPopulation, {renderer: "svg"})

const massCountyTotalAmount = {
        
        "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
        "width": 2000,
        "height": 2000,
        "data":{
            "url":"Data/COUNT/COUNTIESSURVEY_POLYM_GENCOAST.json",
            "format": {"type": "json","property": "features"}
        },
        "title":{
            "text":"Total Winnings in each county",
            "fontSize":"50",
        },
        "projection": {"type": "identity", "reflectY": true},
        "transform":[
            {
                "lookup": "properties.COUNTY",
                "from": {
                    "key": "County",
                    "fields": ["total_winnings_usd"],
                    "data": {
                        "url": "Data/LottoData/winningsPerCounty.csv",
                        "format": {"type": "csv"}
                    }
                }
            }
        ],
        "mark": "geoshape",
        "encoding": {
            "color": {
                "field": "total_winnings_usd",
                "type":"quantitative",
                "scale":{"scheme": "blues"},
                "title":"Won per county"
            },
            "tooltip" :[
                {"field": "properties.COUNTY", "title": "County"},
                {
                    "title": "Winnings",
                    "field": "total_winnings_usd",
                    "type": "quantitative",
                    "format": ",.0f"
                }
            ]
        },
        
        "config": {
            "mark": {"invalid": null},
            "legend": {
              "labelFontSize": 36,  
              "titleFontSize": 36   
            }
        }
};

vegaEmbed('#massCountyTotalAmount', massCountyTotalAmount, {renderer: "svg"})

const massCountyTotalAmountOfWinners = {
        
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "width": 2000,
    "height": 2000,
    "data":{
        "url":"Data/COUNT/COUNTIESSURVEY_POLYM_GENCOAST.json",
        "format": {"type": "json","property": "features"}
    },
    "title":{
        "text":"Number of winners in each county",
        "fontSize":"50",
    },
    "projection": {"type": "identity", "reflectY": true},
    "transform":[
        {
            "lookup": "properties.COUNTY",
            "from": {
                "key": "County",
                "fields": ["winner_count"],
                "data": {
                    "url": "Data/LottoData/winningsPerCounty.csv",
                    "format": {"type": "csv"}
                }
            }
        }
    ],
    "mark": "geoshape",
    "encoding": {
        "color": {
            "field": "winner_count",
            "type":"quantitative",
            "scale":{"scheme": "blues"},
            "title":"Winners"
        },
        "tooltip" :[
            {"field": "properties.COUNTY", "title": "County"},
            {
                "title": "Winners",
                "field": "winner_count",
                "type": "quantitative",
                "format": ",.0f"
            }
        ]
    },
    
    "config": {
        "mark": {"invalid": null},
        "legend": {
          "labelFontSize": 36,  
          "titleFontSize": 36   
        }
    }
};

vegaEmbed('#massCountyTotalAmountOfWinners', massCountyTotalAmountOfWinners, {renderer: "svg"})

const massCountyAmountPerWinner = {
    
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "width": 2000,
    "height": 2000,
    "data":{
        "url":"Data/COUNT/COUNTIESSURVEY_POLYM_GENCOAST.json",
        "format": {"type": "json","property": "features"}
    },
    "title":{
        "text":"Average $ Per WInner",
        "fontSize":"50",
    },
    "projection": {"type": "identity", "reflectY": true},
    "transform":[
        {
            "lookup": "properties.COUNTY",
            "from": {
                "key": "County",
                "fields": ["dollar_per_winner"],
                "data": {
                    "url": "Data/LottoData/winningsPerCounty.csv",
                    "format": {"type": "csv"}
                }
            }
        }
    ],
    "mark": "geoshape",
    "encoding": {
        "color": {
            "field": "dollar_per_winner",
            "type":"quantitative",
            "scale":{"scheme": "blues"},
            "title":"Dollar per winner"
        },
        "tooltip" :[
            {"field": "properties.COUNTY", "title": "County"},
            {
                "field": "dollar_per_winner",
                "type": "quantitative",
                "title": "Won per winner",
                "format": ",.0f"
            }
        ]
    },
    
    "config": {
        "mark": {"invalid": null},
        "legend": {
          "labelFontSize": 36,  
          "titleFontSize": 36   
        }
    }
};

vegaEmbed('#massCountyAmountPerWinner', massCountyAmountPerWinner, {renderer: "svg"})


// TOWNS

const massTownPopulation = {
    
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "width": 2000,
    "height": 2000,
    "data":{
        "url":"Data/TOWNS/TOWNSSURVEY_POLYM_GENCOAST.json",
        "format": {"type": "json","property": "features"}
    },
    "projection": {"type": "identity", "reflectY": true},
    "transform":[
        {
            "lookup": "properties.TOWN",
            "from": {
                "key": "town",
                "fields": ["POP2020"],
                "data": {
                    "url": "Data/LottoData/winningsPerTown.csv",
                    "format": {"type": "csv"}
                }
            }
        }
    ],
    "mark": "geoshape",
    "encoding": {
        "color": {
            "field": "POP2020",
            "type":"quantitative",
            "scale":{"scheme": "blues"},
            "title":"Population"
        },
        "tooltip" :[
            {"field": "properties.TOWN", "title": "TOWN", "type": "nominal"},
            {
                "field": "POP2020",
                "type": "quantitative",
                "title": "Population",
                "format": ",.0f"
            }
        ]
    },
    "config": {
        // "mark": {"invalid": null},
        "legend": {
          "labelFontSize": 36,  
          "titleFontSize": 36   
        }
    }
};
vegaEmbed('#massTownPopulation', massTownPopulation, {renderer: "svg"})

const massTownTotalAmount = {
        
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "width": 2000,
    "height": 2000,
    "data":{
        "url":"Data/TOWNS/TOWNSSURVEY_POLYM_GENCOAST.json",
        "format": {"type": "json","property": "features"}
    },
    "title":{
        "text":"Total Winnings in each town",
        "fontSize":"50",
    },
    "projection": {"type": "identity", "reflectY": true},
    "transform":[
        {
            "lookup": "properties.TOWN",
            "from": {
                "key": "town",
                "fields": ["total_winnings_usd"],
                "data": {
                    "url": "Data/LottoData/winningsPerTown.csv",
                    "format": {"type": "csv"}
                }
            }
        }
    ],
    "mark": "geoshape",
    "encoding": {
        "color": {
            "field": "total_winnings_usd",
            "type":"quantitative",
            "scale":{"scheme": "blues"},
            "title":"Won per town"
        },
        "tooltip" :[
            {"field": "properties.TOWN", "title": "Town"},
            {
                "title": "Total winnings",
                "field": "total_winnings_usd",
                "type": "quantitative",
                "format": ",.0f"
            }
        ]
    },
    
    "config": {
        "mark": {"invalid": null},
        "legend": {
          "labelFontSize": 36,  
          "titleFontSize": 36   
        }
    }
};

vegaEmbed('#massTownTotalAmount', massTownTotalAmount, {renderer: "svg"})

const massTownTotalAmountOfWinners = {
    
"$schema": "https://vega.github.io/schema/vega-lite/v5.json",
"width": 2000,
"height": 2000,
"data":{
    "url":"Data/TOWNS/TOWNSSURVEY_POLYM_GENCOAST.json",
    "format": {"type": "json","property": "features"}
},
"title":{
    "text":"Winners In Each Town",
    "fontSize":"50",
},
"projection": {"type": "identity", "reflectY": true},
"transform":[
    {
        "lookup": "properties.TOWN",
        "from": {
            "key": "town",
            "fields": ["winner_count"],
            "data": {
                "url": "Data/LottoData/winningsPerTown.csv",
                "format": {"type": "csv"}
            }
        }
    }
],
"mark": "geoshape",
"encoding": {
    "color": {
        "field": "winner_count",
        "type":"quantitative",
        "scale":{"scheme": "blues"},
        "title":"Winners per town"
    },
    "tooltip" :[
        {"field": "properties.Town", "title": "Town"},
        {
            "title": "Winners",
            "field": "winner_count",
            "type": "quantitative",
            "format": ",.0f"
        }
    ]
},

"config": {
    "mark": {"invalid": null},
    "legend": {
      "labelFontSize": 36,  
      "titleFontSize": 36   
    }
}
};
vegaEmbed('#massTownTotalAmountOfWinners', massTownTotalAmountOfWinners, {renderer: "svg"})

const massTownAmountPerWinner = {
    
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "width": 2000,
    "height": 2000,
    "data":{
        "url":"Data/TOWNS/TOWNSSURVEY_POLYM_GENCOAST.json",
        "format": {"type": "json","property": "features"}
    },
    "projection": {"type": "identity", "reflectY": true},
    "transform":[
        {
            "lookup": "properties.TOWN",
            "from": {
                "key": "town",
                "fields": ["dollars_per_winner"],
                "data": {
                    "url": "Data/LottoData/winningsPerTown.csv",
                    "format": {"type": "csv"}
                }
            }
        }
    ],
    "mark": "geoshape",
    "encoding": {
        "color": {
            "field": "dollars_per_winner",
            "type":"quantitative",
            "scale":{"scheme": "blues"},
            "title":"Average Winnings"
        },
        "tooltip" :[
            {"field": "properties.TOWN", "title": "TOWN"},
            {
                "field": "dollars_per_winner",
                "type": "quantitative",
                "title": "Average Winnings",
                "format": ",.0f"
            }
        ]
    },
    "config": {
        "mark": {"invalid": null},
        "legend": {
          "labelFontSize": 36,  
          "titleFontSize": 36   
        }
    }
};

vegaEmbed('#massTownAmountPerWinner', massTownAmountPerWinner, {renderer: "svg"})



