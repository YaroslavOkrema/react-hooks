import React, {useState} from "react";
import Post from "./Post";
import Theme from "./providers/Theme";
function App() {
  const [page, setPage] = useState(1)

  function addPage() {
    setPage(page + 1);
  }

  return (
      <div>
          <Theme>
              <div>Page: {page}</div>
              <button onClick={addPage}>Add page</button>
              <hr/>
              <Post page={page}/>
          </Theme>
      </div>
  );
}

export default App;
