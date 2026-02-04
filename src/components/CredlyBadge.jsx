import { useEffect } from "react";

export function CredlyBadge({ id, width = 150, height = 270 }) {
  useEffect(() => {
    // Cargar script solo una vez
    if (!document.querySelector('script[src="//cdn.credly.com/assets/utilities/embed.js"]')) {
      const s = document.createElement("script");
      s.src = "//cdn.credly.com/assets/utilities/embed.js";
      s.async = true;
      document.body.appendChild(s);
    } else {
      // Si ya existe, intentar re-render (Credly suele detectar automáticamente)
      // No siempre hace falta, pero ayuda en SPA
      window?.CredlyEmbed?.init?.();
    }
  }, []);

  return (
    <div
      data-iframe-width={width}
      data-iframe-height={height}
      data-share-badge-id={id}
      data-share-badge-host="https://www.credly.com"
      style={{ margin: "0 auto" }}
    />
  );
}
