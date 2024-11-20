import React, { useEffect, useState } from "react";
import { Wordcloud } from "@visx/wordcloud";

function WordCloudChart({ course }) {
  const [words, setWords] = useState([
    { text: "positive", value: 1 },
    { text: "negative", value: 1 },
  ]);

  useEffect(() => {
    const fetchCourseReviews = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_INVOKE_URL_WORD_CLOUD}${course}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();

        console.log(data);

        const wordCounts = calculateWordFrequencies(data.reviewText);
        setWords(wordCounts);
      } catch (err) {
        console.error("Error fetching course reviews:", err);
      }
    };

    fetchCourseReviews();
  }, [course]);

  const calculateWordFrequencies = (text) => {
    const wordsArray = text.split(" ");
    const wordMap = {};

    wordsArray.forEach((word) => {
      word = word.toLowerCase();
      wordMap[word] = (wordMap[word] || 0) + 1;
    });

    return Object.keys(wordMap).map((word) => ({
      text: word,
      value: wordMap[word],
    }));
  };

  return (
    <div style={{ width: 400, height: 400 }}>
      <Wordcloud
        words={words}
        width={400}
        height={400}
        fontSize={(word) => Math.log2(word.value) * 5}
        font={"Impact"}
        padding={2}
        rotate={(word) => word.value % 360}
        random={() => 0.5}
      >
        {(word) => (
          <text
            key={word.text}
            fontSize={word.fontSize}
            textAnchor="middle"
            transform={`translate(${word.x}, ${word.y})`}
            style={{ fill: "#333" }} // Adjust color if needed
          >
            {word.text}
          </text>
        )}
      </Wordcloud>
    </div>
  );
}

export default WordCloudChart;
