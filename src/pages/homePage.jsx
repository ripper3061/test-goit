import React from "react";

const styles = {
  container: {
    paddingTop: 100,
  },
  title: {
    fontWeight: 500,
    fontSize: 24,
    textAlign: "center",
  },
  secondTitle: {
    fontWeight: 500,
    textAlign: "center",
  },
};

export default function HomePage() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>
        Welcome to Tweets App
        <span role="img" aria-label="Icon">
          💁‍♀️
        </span>
      </h1>
    </div>
  );
}
