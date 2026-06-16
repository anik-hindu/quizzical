function LoadingState() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "12px",
      }}
    >
      <div className="spinner"></div>
      <p style={{ color: "#94D7A2" }}>COMPILING QUESTIONS...</p>
    </div>
  );
}

export default LoadingState