const KeyboardEvents = () => {
  // keyDown
  const handleKeyDown = (e) => e.key === "Enter" && alert("form submitted");

  //keyUp

  // cut event

  // paste event

  // copy
  const handleCopy = () => alert("dont copy my content");

  return (
    <div style={{ marginTop: "30px" }}>
      <h2>KeyboardEvents</h2>
      <input type="text" onKeyDown={handleKeyDown} />
      <p onCopy={handleCopy}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
    </div>
  );
};

export default KeyboardEvents;
