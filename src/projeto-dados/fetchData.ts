export default async function fetchData<T>(url: string): Promise<T | null> {
   try {
      const response = await fetch(url);
      const json = await response.json();
      return json;
   } catch (err) {
      if (err instanceof Error) console.log("fetchData: " + err.message);
      return null;
   }
}

export {};
