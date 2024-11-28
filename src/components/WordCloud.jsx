import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import cloud from "d3-cloud";
import "./WordCloud.css";

function WordCloudComponent({
  words,
  width = 500,
  height = 300,
  maxFontSize = 60,
}) {
  const svgRef = useRef();

  useEffect(() => {
    if (!words || words.length === 0) {
      console.error("No words provided to the word cloud.");
      return;
    }

    // Clear the SVG contents before each render
    d3.select(svgRef.current).selectAll("*").remove();

    // Normalize font sizes to avoid extremes
    const maxValue = Math.max(...words.map((w) => w[1]));
    const minValue = Math.min(...words.map((w) => w[1]));
    const fontSizeScale = d3
      .scaleLinear()
      .domain([minValue, maxValue])
      .range([10, maxFontSize]);

    // Initialize the cloud layout
    const layout = cloud()
      .size([width, height])
      .words(
        words.map((word) => ({
          text: word[0],
          size: fontSizeScale(word[1]), // Map size to font scale
        }))
      )
      .padding(5) // Space between words
      .rotate(0) // Rotate randomly between -45 and 45 degrees
      .font("Impact")
      .fontSize((d) => d.size)
      .on("end", draw);

    layout.start();

    function draw(wordsToDraw) {
      const svg = d3
        .select(svgRef.current)
        .attr("width", layout.size()[0])
        .attr("height", layout.size()[1]);

      // Draw the words
      svg
        .append("g")
        .attr(
          "transform",
          `translate(${layout.size()[0] / 2},${layout.size()[1] / 2})`
        )
        .selectAll("text")
        .data(wordsToDraw)
        .enter()
        .append("text")
        .style("font-family", "Impact")
        .style(
          "fill",
          (d) => d3.schemeCategory10[Math.floor(Math.random() * 10)]
        ) // Random color
        .style("font-size", (d) => `${d.size}px`)
        .attr("text-anchor", "middle")
        .attr(
          "transform",
          (d) => `translate(${d.x},${d.y}) rotate(${d.rotate})`
        )
        .text((d) => d.text);
    }
  }, [words, width, height, maxFontSize]);

  return (
    <div>
      <div>
        <span className="title">Word Cloud</span>
        <br></br>
        <span className="subtext">Displays the word cloud of reviews</span>
      </div>
      <svg ref={svgRef}></svg>
    </div>
  );
}

export default WordCloudComponent;
