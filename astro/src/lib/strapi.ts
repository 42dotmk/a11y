export const STRAPI_URL = import.meta.env.STRAPI_URL;

type PopulateOpts<T> = keyof T | (keyof T)[];  

type QueryOpts<T> = {
  [key: string]: any;
  populate: PopulateOpts<T>;
}

interface Props<T> {
  endpoint: string;
  query?: QueryOpts<T>;
  wrappedByList?: boolean;
  wrappedByKey?: string;
}

export const getAbsoluteUrl = (url?: string) => url ? (STRAPI_URL + url) : undefined;

const dateKeys = ['publishedAt', 'createdAt', 'updatedAt'];

/**
 * Fetches data from the Strapi API
 * @param endpoint - The endpoint to fetch from
 * @param query - The query parameters to add to the url
 * @param wrappedByKey - The key to unwrap the response from
 * @param wrappedByList - If the response is a list, unwrap it
 * @returns
 */
export async function fetchApi<T, TResponse = T>({
  endpoint,
  query,
  wrappedByList,
  wrappedByKey,
}: Props<T>): Promise<TResponse> {
  if (endpoint.startsWith('/')) {
    endpoint = endpoint.slice(1);
  }

  const url = new URL(`${STRAPI_URL}/api/${endpoint}`);
  if (query) {
    Object.entries(query).forEach(([key, value]) => {
      url.searchParams.append(key, value);
    });
  }
  console.log(`Fetching ${url}`);

  const res = await fetch(url.toString());
  let data = await res.json();

  
  if (wrappedByKey) {
    data = data[wrappedByKey];
  } else if (data.data) {
    data = data.data;
  }


  if (wrappedByList) {
    data = data[0];
  }

  for (const key of dateKeys) {
    if (key in data) {
      console.log(`Converting to date ${key}`)
      data[key] = new Date(data[key]);
    }
  }

  return data as TResponse;
}



/**
 * Fetches data from the Strapi API
 * @param endpoint - The endpoint to fetch from
 * @param query - The query parameters to add to the url
 * @param wrappedByKey - The key to unwrap the response from
 * @param wrappedByList - If the response is a list, unwrap it
 * @returns
 */
export const fetchMany = <T>(opts: Props<T>) => fetchApi<T, T[]>(opts);


/**
 * Fetches data from the Strapi API
 * @param endpoint - The endpoint to fetch from
 * @param query - The query parameters to add to the url
 * @param wrappedByKey - The key to unwrap the response from
 * @param wrappedByList - If the response is a list, unwrap it
 * @returns
 */
export const fetchOne = <T>(opts: Props<T>) => fetchApi<T>(opts);
