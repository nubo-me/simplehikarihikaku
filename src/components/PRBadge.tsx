export default function PRBadge() {
  return (
    <div role="note" aria-label="広告表記" style={{
      position: "sticky", top: 0, zIndex: 50,
      background: "rgba(0,0,0,0.8)", color: "white",
      padding: "8px 12px", fontSize: 12
    }}>
      本ページは広告を含みます。掲載情報は最新の公式情報を元に更新しています。
    </div>
  );
}
