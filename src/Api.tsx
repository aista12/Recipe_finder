const apiKey: string | undefined = process.env.REACT_APP_API_KEY;

if (!apiKey) {
  throw new Error("API key is not defined in environment variables.");
}


