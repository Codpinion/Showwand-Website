interface CodeData {
  language: string;
}

const loadLanguageStats = async (): Promise<CodeData[]> => {
  const response = await fetch(
    "https://api.codetabs.com/v1/loc?github=nomandhoni-cs/Showwand&branch=production"
  );
  const data = await response.json();
  return data;
};

const CodeLanguageStats = async (): Promise<JSX.Element> => {
  const codesData: CodeData[] = await loadLanguageStats();
  return (
    <>
      {codesData.map((codeData) => (
        <li key={codeData.language}>{codeData.language}</li>
      ))}
    </>
  );
};

export default CodeLanguageStats;
