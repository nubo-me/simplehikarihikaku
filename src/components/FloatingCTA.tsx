import { useEffect, useState } from "react";

export default function FloatingCTA() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // モバイルでのみ表示
  if (!isMobile) return null;

  const scrollToProviders = () => {
    const el = document.getElementById("providers-heading");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div aria-hidden="false" style={{
      position: "fixed", left: 0, right: 0, bottom: 0, zIndex: 40,
      padding: "8px", background: "rgba(255,255,255,0.95)", borderTop: "1px solid #e5e7eb"
    }}>
      <button onClick={scrollToProviders}
        style={{ width: "100%", padding: "12px 16px", borderRadius: 10, border: "1px solid #111", background: "white", cursor: "pointer" }}>
        おすすめプロバイダーを見る
      </button>
    </div>
  );
}
