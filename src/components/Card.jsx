export default function Card({ as: Tag = 'div', className = '', children, ...rest }) {
  return (
    <Tag className={`rounded-2xl border border-line bg-panel ${className}`} {...rest}>
      {children}
    </Tag>
  );
}

export function Prompt({ children }) {
  return <p className="m-0 font-mono text-[13px] text-dim">{children}</p>;
}

export function Tag({ children }) {
  return <span className="rounded-md border border-[#24302a] px-2 py-1 font-mono text-xs text-muted">{children}</span>;
}
