const nodes: [number, number, number, number, string][] = [
  [110, 5, 140, 35, "Remote access"],
  [10, 80, 150, 40, "Proxmox VE"],
  [200, 80, 150, 40, "OCI ARM"],
  [10, 140, 150, 65, "NAS / VM / Backup"],
  [200, 140, 150, 65, "Docker / Media"],
];

export default function InfrastructureDiagram({ label }: { label: string }) {
  return (
    <figure className="my-6 rounded-lg border p-4">
      <figcaption className="mb-4 text-sm font-semibold">{label}</figcaption>
      <svg
        role="img"
        aria-label={label}
        viewBox="0 0 360 220"
        className="mx-auto w-full max-w-xl"
      >
        <path
          d="M180 40V60H85V80M180 60H275V80M85 120V140M275 120V140"
          fill="none"
          stroke="currentColor"
        />
        {nodes.map(([x, y, width, height, text]) => (
          <g key={text}>
            <rect
              x={x}
              y={y}
              width={width}
              height={height}
              rx="6"
              fill="var(--muted)"
              stroke="var(--border)"
            />
            <text
              x={x + width / 2}
              y={y + height / 2 + 4}
              textAnchor="middle"
              fontSize="12"
              fill="currentColor"
            >
              {text}
            </text>
          </g>
        ))}
      </svg>
    </figure>
  );
}
