import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import TabsSection from "./components/TabsSection/TabsSection";
import ActivePrompts from "./components/ActivePrompts";
import ArchivePrompts from "./components/ArchivePrompts";
import CreatePrompt from "./components/CreatePrompt";

export default function App() {
  const [tab, setTab] = useState("active");

  return (
    <>
      <Header />
      <TabsSection active={tab} onChange={(current) => setTab(current)} />
      <main>
        {tab === "active" && <ActivePrompts />}
        {tab === "archive" && <ArchivePrompts />}

        <CreatePrompt />
      </main>
    </>
  );
}
