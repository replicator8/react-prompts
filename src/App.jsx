import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import TabsSection from "./components/TabsSection/TabsSection";
import ActivePrompts from "./components/ActivePrompts";
import ArchivePrompts from "./components/ArchivePrompts";
import CreatePrompt from "./components/CreatePrompt";

export default function App() {
  const tabNow = window.innerWidth >= 1200 ? "all" : "active";
  const [tab, setTab] = useState(tabNow);

  return (
    <>
      <div className="first">
        <Header />
        <TabsSection active={tab} onChange={(current) => setTab(current)} />
      </div>
      <main>
        {tab === "active" && <ActivePrompts />}
        {tab === "archive" && <ArchivePrompts />}
        {tab === "all" && (
          <>
            <ActivePrompts />
            <ArchivePrompts />
          </>
        )}

        <CreatePrompt />
      </main>
    </>
  );
}
