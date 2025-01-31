interface Props {
  colors: string[];
}

export default function ProductBadge({ colors }: Props) {
  return (
    <>
      <div>{colors.map((color, i) => badge(color, i))}</div>
    </>
  );
}

function badge(color: string, i: number) {
  const badgeClass = "badge filter rounded-4 bg-" + color;
  const badge = <span className={badgeClass} key={i}></span>;

  return badge;
}
