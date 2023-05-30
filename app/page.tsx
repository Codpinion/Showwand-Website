import CodeLanguageStats from "./components/CodeLanguageStats"
import { Suspense } from "react"
const Home = () => {
  return (
    <>
      <h1 className="text-4xl">Welcome to
        Showwand</h1>
        <Suspense fallback={<div>Loading...</div>}>
        <CodeLanguageStats />
      </Suspense>
    </>
  )
}

export default Home
