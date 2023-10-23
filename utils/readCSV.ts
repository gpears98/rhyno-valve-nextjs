import Papa from 'papaparse';

export const readCSV = async (filePath: string) => {
    const response = await fetch(filePath);
    const reader = response.body?.getReader();
    const result = await reader?.read();
    const decoder = new TextDecoder('utf-8');
    const csv = decoder.decode(result?.value);
  
    // Check for csv content before parsing
    if (csv) {
      const parsedData = Papa.parse(csv, {
        header: true,
        dynamicTyping: true,
      });
  
      // Check if parsedData and data property exists
      if (parsedData && 'data' in parsedData) {
        return parsedData.data as any[]; // Typecast to resolve TypeScript error
      }
    }
  
    // Return an empty array if something goes wrong
    return [];
  };
  