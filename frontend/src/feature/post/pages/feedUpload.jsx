import { usePost } from "../hooks/usePost";
import { useState } from "react";
import "../style/feed-update.scss";

const FeedUpdate = () => {
  const [caption, setCaption] = useState("");
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState("");

  const { handleSavePost } = usePost();

  function handleSubmit(e) {
    e.preventDefault();
    handleSavePost(caption, file);
  }

  function handleFileChange(e) {
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile));
    }
  }

  return (
    <main className="post-update">
      <div className="post">
        <form onSubmit={handleSubmit}>
          <div className="post-form">
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
            />

            {file && (
              <>
                <p className="file-name">{file.name}</p>

                <img
                  src={preview}
                  alt="preview"
                  className="preview-image"
                />
              </>
            )}

            <input
              type="text"
              placeholder="Write a caption..."
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
            />

            <button type="submit">
              Upload Post
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default FeedUpdate;