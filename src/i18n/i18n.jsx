import { createContext, useContext, useEffect, useMemo, useState } from "react";

const LangContext = createContext(null);

export function LangProvider({ children, defaultLang = "es" }) {
  const [lang, setLang] = useState(() => {
    const saved = localStorage.getItem("lang");
    return saved === "en" || saved === "es" ? saved : defaultLang;
  });

  useEffect(() => {
    localStorage.setItem("lang", lang);
    // Mantén el atributo lang del documento sincronizado
    document.documentElement.lang = lang;
  }, [lang]);

  const value = useMemo(() => ({ lang, setLang }), [lang]);
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LangProvider");
  return ctx;
}