import { useEffect, useState } from "react";
import StoplightDemo from "./StoplightDemo";

function App() {
  const [url, setUrl] = useState(
    "https://api.apis.guru/v2/specs/github.com/1.1.4/openapi.yaml"
  );
  const [urlToDisplay, setUrlToDisplay] = useState(url);
  // const [urlTimeout, setUrlTimeout] = useState<number>();
  useEffect(() => {
    const debounceMs = 1000;
    const urlTimeout = setTimeout(() => setUrl(urlToDisplay), debounceMs);
    return () => {
      clearTimeout(urlTimeout);
    };
  }, [urlToDisplay, setUrl]);

  return (
    <div className="App">
      <div className="sl-p-3 sl-prose sl-inverted sl-bg-canvas-100">
        <p className="sl-mb-3 ">
          This is a demo of{" "}
          <a
            href="https://github.com/stoplightio/elements"
            target="_blank"
            rel="noreferrer noopener"
          >
            stoplight elements
          </a>
          .
        </p>
        <p className="sl-mb-3">
          Enter the URL for your OpenApi spec YAML file to begin exploring it.
        </p>
        <input
          className="sl-bg-canvas-300 sl-relative sl-w-full sl-h-lg sl-text-base sl-pr-2.5 sl-pl-2.5 sl-rounded sl-border-light hover:sl-border-input focus:sl-border-primary sl-border"
          placeholder="URL"
          type="text"
          value={urlToDisplay}
          onChange={(e) => setUrlToDisplay(e.target.value)}
        />
      </div>
      <div className="sl-border">
        <StoplightDemo url={url} />
      </div>
      {/* <API apiDescriptionUrl="https://raw.githubusercontent.com/stoplightio/Public-APIs/master/reference/zoom/openapi.yaml" /> */}
    </div>
  );
}

export default App;
