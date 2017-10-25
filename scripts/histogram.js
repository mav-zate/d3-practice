import * as d3 from 'd3';

document.addEventListener('DOMContentLoaded', () => {
  var data = [30, 86, 168, 281, 303, 365, 420, 39, 75];

  let height = 500, width = 800;

  let y = d3.scaleLinear()
            .domain([0, d3.max(data)])
            .range([height, 0]);

  let chart = d3.select(".chart")
                .attr("width", width)
                .attr("height", height);

  let barWidth = width / data.length;

  let bar = chart.selectAll("g")
                 .data(data)
                .enter().append("g")
                 .attr("transform", (d, i) => (`translate(${i * barWidth}, 0)`));

  bar.append("rect")
     .attr("y", (d) => (y(d)) )
     .attr("height", (d) => (height - y(d)) )
     .attr("width", barWidth - 2);

  bar.append("text")
     .attr("x", barWidth / 2 + 3)
     .attr("y", (d) => (y(d) + 3) )
     .attr("dy", ".75em")
     .text((d) => (d));
});
