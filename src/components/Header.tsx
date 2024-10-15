import { useChangeAi } from "../hooks/useChangeAi";
import { useLocation } from "react-router-dom";

export default function Header() {
  const { currentAi, switchAi } = useChangeAi();
  const location = useLocation();

  function handleSwitchAi() {
    switchAi();
  }

  return (
    <header className="bg-white shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 sm:px-6 lg:px-8">
        <a href="/" className="text-2xl font-bold text-blue-600">
          ai_rubber_duck
        </a>
        <div>
          {location.pathname === "/chat" && (
            <button
              type="button"
              className="mr-2 rounded-md bg-blue-500 px-4 py-2 text-white"
              onClick={handleSwitchAi}
            >
              {currentAi === "aiA" ? "aiBに相談" : "aiAに相談"}
            </button>
          )}
        </div>
      </nav>
    </header>
  );
}
