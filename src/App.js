import React, {useState} from "react";
import Post from "./Post";
function App() {
  const [page, setPage] = useState(1)

  function addPage() {
    setPage(page + 1);
  }

  return (
      <div>
          <div>Page: {page}</div>
          <button onClick={addPage}>Add page</button>
          <hr/>
          <Post page={page} />
      </div>
  );
}

export default App;
