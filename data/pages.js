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
    "header" : "Placeholder Head",
    "content" : [
      {
        "type" : "text",
        "info" : "Placeholder Placeholder Placeholder Text"
      },
      {
        "type" : "graph",
        "info" : "PlaceholderGraph"
      }
    ],
    "referenceText" : "Placeholder Placeholder Reference"
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