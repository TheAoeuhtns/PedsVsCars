/*
  Each page info object should contain:
  header : text on the top of the page, can be set to null
  conent : this is an array that can contain any number of items, they will be displayed in order, if there is none should be empty array
    a content object should contain:
    type : valid types are "text", "graph", and "image"
    info : for type text it should be the text, graph the name of the graph, and image the name of the image (without file path)
  referenceText : the reference text that will be included on the bottom of the page, can be set to null
  
*/

pagesData = [
  {
    "header" : "Pedestrians vs Cars",
    "content" : [
      {
        "type" : "text",
        "info" : "In the effort to reduce climate change, there are many areas to work on. One of these is travel emissions. According to the EPA, transportation is responible for about 26% of all C02 output in the United States, and light-duty vehicles (passenger cars and trucks) account for over half of that."
      },
      {
        "type" : "image",
        "info" : "co2Emissions.png"
      },
      {
        "type" : "text",
        "info" : "While Electric Vehicles are an import part of reducing that number, it ignores the ways that a car-depedent society make climate change worse and still pose a threat to an even more powerful way of reducing transit emissions: walking and cycling."
      }
    ],
    "referenceText" : "U.S. Tranportation Sector Greenhouse Gas Emissions 1990 - 2018 Fast Facts. https://nepis.epa.gov/Exe/ZyPDF.cgi?Dockey=P100ZK4P.pdf"
  }, 
  {
    "header" : "Test Head",
    "content" : [
      {
        "type" : "text",
        "info" : "Test Test Test Text"
      }, {
        "type" : "image",
        "info" : "test.png"
      }
    ],
    "referenceText" : "Test Test Reference"
  }
]