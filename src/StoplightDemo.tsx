import { APIProps } from "@stoplight/elements";
import { useEffect, useState } from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "elements-api": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> &
          // {
          //   apiDescriptionUrl: string;
          //   router: string;
          //   layout: string;
          // }
          APIProps,
        HTMLElement
      >;
    }
  }
}

function StoplightDemo({ url }: { url: string }) {
  //
  // This sets the rendered URL, so that the <elements-api>
  // is removed and re-added each time the URL changes.
  // so, on-change:
  //   1. renderedUrl=undefined
  //   2. renderedUrl="..."
  //
  const [renderedUrl, setRenderedUrl] = useState<string | undefined>();
  useEffect(() => {
    if (renderedUrl === url) return;
    setRenderedUrl(undefined);
  }, [url]);
  useEffect(() => {
    if (renderedUrl !== undefined) return;
    setRenderedUrl(url);
  }, [renderedUrl]);

  return (
    <div>
      {renderedUrl !== undefined && (
        <elements-api
          apiDescriptionUrl={renderedUrl}
          router="hash"
          layout="sidebar"
        />
      )}
    </div>
  );
}

export default StoplightDemo;
