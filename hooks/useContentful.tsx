import { useState, useEffect } from "react";

const { CONTENTFUL_CDA_API_KEY, CONTENTFUL_SPACE_KEY } = process.env;

const environment = "master";

async function useContentfulData(query): Promise<{ data: any }> {
  let [data, setData] = useState(null);
  useEffect(() => {
    window
      .fetch(
        `https://graphql.contentful.com/content/v1/spaces/${CONTENTFUL_SPACE_KEY}/environments/${environment}?access_token=${CONTENTFUL_CDA_API_KEY}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ query }),
        }
      )
      .then((response) => response.json())
      .then((json) => setData(json.data))
      .catch(() => {
        console.log("no data available");
      });
  }, [query]);
  return { data };
}

export default useContentfulData;
