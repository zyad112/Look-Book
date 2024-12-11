document.querySelector(".create-post button").addEventListener("click", () => {
  const textarea = document.querySelector(".create-post textarea");
  if (textarea.value.trim() !== "") {
    const newPost = document.createElement("div");
    newPost.className = "post";
    newPost.innerHTML = `
      <h4>Your Name</h4>
      <p>${textarea.value}</p>
      <div class="post-actions">
        <button>👍 Like</button>
        <button>💬 Comment</button>
        <button>🔄 Share</button>
      </div>
    `;
    document.querySelector(".posts-section").prepend(newPost);
    textarea.value = "";
  }
});
