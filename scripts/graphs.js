function allCrashDataYearly() {
  const data = [
    {
      "year": 2006,
      "fatal": 38648,
      "injury": 1745924,
      "property": 4188641
    },
    {
      "year": 2007,
      "fatal": 37435,
      "injury": 1711304,
      "property": 4275269
    },
    {
      "year": 2008,
      "fatal": 34172,
      "injury": 1630420,
      "property": 4146254
    },
    {
      "year": 2009,
      "fatal": 30862,
      "injury": 1517075,
      "property": 3957243
    },
    {
      "year": 2010,
      "fatal": 30296,
      "injury": 1542104,
      "property": 3847045
    },
    {
      "year": 2011,
      "fatal": 29867,
      "injury": 1529968,
      "property": 3777994
    },
    {
      "year": 2012,
      "fatal": 31006,
      "injury": 1634180,
      "property": 3949858
    },
    {
      "year": 2013,
      "fatal": 30202,
      "injury": 1591016,
      "property": 4065673
    },
    {
      "year": 2014,
      "fatal": 30056,
      "injury": 1647726,
      "property": 4386502
    },
    {
      "year": 2015,
      "fatal": 32538,
      "injury": 1715394,
      "property": 4548203
    },
    {
      "year": 2016,
      "fatal": 34748,
      "injury": 2116308,
      "property": 4670073
    },
    {
      "year": 2017,
      "fatal": 34560,
      "injury": 1888525,
      "property": 4529513
    },
    {
      "year": 2018,
      "fatal": 33919,
      "injury": 1893704,
      "property": 4807058
    },
    {
      "year": 2019,
      "fatal": 33487,
      "injury": 1916344,
      "property": 4806253
    },
    {
      "year": 2020,
      "fatal": 35766,
      "injury": 1593390,
      "property": 3621681
    }
  ];

  const margin = {top: 10, right: 30, bottom: 20, left: 50},
    width = 800 - margin.left - margin.right,
    height = 700 - margin.top - margin.bottom;

  const groups = data.map(d => d.year);
  const subgroups = ["property", "injury", "fatal"];
  const subgroupColors = ["#996633", "#ff9900", "#cc0000"];

  const svg = d3.select("#contentDiv")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

  const x = d3.scaleBand()
    .domain(groups)
    .range([0, width])
    .padding([0.2]);
  svg.append("g")
    .attr("transform", `translate(0, ${height-100})`)
    .call(d3.axisBottom(x).tickSizeOuter(0));

  const y = d3.scaleLinear([0, 7], [height-100, margin.top]);
  svg.append("g")
    .call(d3.axisLeft(y).ticks((height-100) / 60))
    .call(g => g.append("text")
      .attr("x", -margin.left)
      //.attr("y", 0)
      .attr("fill", "currentColor")
      .attr("text-anchor", "start")
      .text("Crashes (Millions)"));


  const color = d3.scaleOrdinal()
    .domain(subgroups)
    .range(subgroupColors);

  const stackedData = d3.stack().keys(subgroups)(data);

  svg.append("g")
    .selectAll("g")
    .data(stackedData)
    .join("g")
      .attr("fill", d => color(d.key))
      .selectAll("rect")
      .data(d => d)
      .join("rect")
        .attr("x", d => x(d.data.year))
        .attr("y", d => y(d[1]/1e6))
        .attr("height", d => y(d[0]/1e6) - y(d[1]/1e6))
        .attr("width",x.bandwidth());

  const legend = d3.select("svg")
    .append("g")
    .attr("transform", "translate(" + (margin.left + margin.right + 60) + "," + (height-50) + ")")
    .selectAll("g")
    .data(subgroups)
    .enter()
    .append("g");

  legend.append("rect")
  .attr("fill", (d, i) => subgroupColors[i])
  .attr("height", 15)
  .attr("width", 15);

  legend.append("text")
    .attr("x", 18)
    .attr("y", 10)
    .attr("dy", ".15em")
    .text((d, i) => { switch (i){ case 0: return "Property Damage Only Crashes"; case 1: return "Injury Only Crashes"; case 2: return "Fatal Crashes"; } })
    .style("text-anchor", "start")
    .style("font-size", 12);

  const padding = 10;
  legend.attr("transform", function (d, i) {
    return "translate(" + (d3.sum(subgroups, function (e, j) {
      if (j < i) { return legend.nodes()[j].getBBox().width; } else { return 0; }
    }) + padding * i) + ",0)";
  });
}