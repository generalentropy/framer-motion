import Panel from "./components/panel";
import Button from "./components/button";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

function App() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <AnimatePresence>{isOpen && <Panel />}</AnimatePresence>
      <Button setIsOpen={setIsOpen} isOpen={isOpen} />
    </>
  );
}

export default App;
