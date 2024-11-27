function ScoreCardComponent({ score, summary }) {
  const getBackgroundColor = (score) => {
    const scaledScore = Math.max(0, Math.min(5, score));
    const red = Math.round(255 * (1 - scaledScore / 5));
    const green = Math.round(255 * (scaledScore / 5) * 0.7);
    return `rgb(${red}, ${green}, 0)`; // Keeping some blue to maintain a darker shade
  };

  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      <span
        className="title"
        style={{
          fontSize: "18px",
          padding: "20px",
          alignItems: "center",
          margin: "20px",
          paddingBottom: "50px",
        }}
      >
        Summary
      </span>
      <br></br>
      <span className="subtext">
        Display the average score and generative summary
      </span>
      <div
        style={{
          padding: "80px",
          backgroundColor: getBackgroundColor(score),
          borderRadius: "8px",
          color: "#fff",
          fontSize: "80px",
          fontWeight: "bold",
          width: "100px",
          height: "100px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "20px",
        }}
      >
        {score}
      </div>
      <div style={{ fontSize: "18px" }}>{summary}</div>
    </div>
  );
}

export default ScoreCardComponent;
