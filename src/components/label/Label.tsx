import './style.css';

export function SectionLabel({ num, label }: { num: string; label: string }) {
  return (
    <div className="section-label">
      <span className="section-label-dash">——</span>
      <span className="section-label-num">{num}</span>
      <span className="section-label-text">{label}</span>
    </div>
  );
}
