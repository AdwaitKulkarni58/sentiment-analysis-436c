import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import cloud from "d3-cloud";

function WordCloudComponent({ words }) {
  console.log(words);

  const svgRef = useRef();

  useEffect(() => {
    // Clear the SVG contents before each render to avoid duplicate elements
    d3.select(svgRef.current).selectAll("*").remove();

    const layout = cloud()
      .size([500, 300]) // Size of the word cloud
      .words(
        words.map(
          (word) => (
            console.log(word),
            {
              text: word.text,
              size: word.value,
            }
          )
        )
      )
      .padding(10) // Space between words
      .fontSize((d) => d.size) // Map font size to the word's frequency
      .rotate(0) // No rotation for readability
      .on("end", draw); // Draw the word cloud once layout is complete

    layout.start();

    function draw(wordsToDraw) {
      const svg = d3
        .select(svgRef.current)
        .attr("width", layout.size()[0])
        .attr("height", layout.size()[1]);

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
          () => d3.schemeCategory10[Math.floor(Math.random() * 10)]
        )
        .style("font-size", (d) => `${d.size}px`)
        .attr("text-anchor", "middle")
        .attr(
          "transform",
          (d) => `translate(${d.x},${d.y}) rotate(${d.rotate})`
        )
        .text((d) => d.text);
    }
  }, [words]);

  return (
    <>
      <svg ref={svgRef}></svg>
    </>
  );
}

export default WordCloudComponent;
