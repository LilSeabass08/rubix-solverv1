import "./styles/app.css";

import HelpPanel from "./components/helpPanel";
import GuidedEntry from "./components/guidedEntry";
import ValidationPanel from "./components/validationPanel";
import MoveStepper from "./components/moveStepper";

export default function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="title">rubix-solverv1</div>
        <div className="statusBar">
          <span className="badge">Solver: Not initialized</span>
          <span className="badge">Validation: Incomplete</span>
          <span className="badge">Solution: None</span>
        </div>
      </header>

      <main className="grid">
        <div style={{ display: "grid", gap: 12 }}>
          <HelpPanel />
          <GuidedEntry />
        </div>

        <div style={{ display: "grid", gap: 12 }}>
          <ValidationPanel />
          <MoveStepper />
        </div>
      </main>
    </div>
  );
}
