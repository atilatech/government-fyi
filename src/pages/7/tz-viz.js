import {select} from "d3-selection";
import {geoPath} from "d3-geo";
import {json} from "d3-request";
import {feature} from "topojson";
// code adapted from this example gist: https://gist.github.com/NPashaP/a74faf20b492ad377312

let UsaMap = {};

UsaMap.draw = function(id, usMapPath, tzMapPath) {
  // const width = 900;
  // const height = 600;

  // json('../mapdata/us-states-topo.json', function(error, topoData) {
  json(usMapPath, function(error, topoData) {
    const us = feature(topoData, topoData.objects.states);
    select(id).selectAll(".region")
      .data(us.features).enter()
      .append("path")
        .attr("d", geoPath())
        .attr("class","region")
        .style("fill", "#000")
        .style("stroke", "#fff")
        .style("stroke-width", "0.5px")
        .style("opacity","0.4")
  });

  json(tzMapPath, function(error, topoData) {
    const tz = feature(topoData, topoData.objects.timezones);
    select(id).selectAll(".zones")
      .data(tz.features).enter()
      .append("path")
        .attr("d", geoPath())
        .attr("class","zones")
        .style("fill", "none")
        .style("stroke", "#000")
        .style("stroke-width", "1px")
  });
}

export default UsaMap
