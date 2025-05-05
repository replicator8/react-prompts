import Button from "../Button/Button";

export default function TabsSection({ active, onChange }) {
  return (
    <section style={{marginTop: '1rem', marginLeft: '2rem'}} className="tabs-btn">
      <Button
        isActive={active === "active"}
        onClick={() => onChange("active")}
        className="btn-act"
      >
        Активные
      </Button>
      <Button
        isActive={active === "archive"}
        onClick={() => onChange("archive")}
        className="btn-arc"
      >
        Архивные
      </Button>
      <Button
        isActive={active === "all"}
        onClick={() => onChange("all")}
        className="btn-all"
      >
        Все
      </Button>
    </section>
  );
}
