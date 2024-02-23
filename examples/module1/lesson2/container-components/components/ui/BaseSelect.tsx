export default function ({
  items,
  value,
  label,
  onChange,
}: {
  items: { value: string; label: string }[];
  value: string;
  label: string;
  onChange: Function;
}) {
  return (
    <label className="flex flex-col">
      {label}
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="border h-7 mt-1"
      >
        {items.map(({ value, label }) => (
          <option key={label} value={value}>
            {label}
          </option>
        ))}
      </select>
    </label>
  );
}
