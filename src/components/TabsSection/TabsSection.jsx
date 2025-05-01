import Button from "../Button/Button";

export default function TabsSection({ active, onChange }) {
  return (
    <section style={{marginTop: '1rem', marginLeft: '2rem'}}>
      <Button
        isActive={active === "active"}
        onClick={() => onChange("active")}
      >
        Активные
      </Button>
      <Button
        isActive={active === "archive"}
        onClick={() => onChange("archive")}
      >
        Архивные
      </Button>
    </section>
  );
}
