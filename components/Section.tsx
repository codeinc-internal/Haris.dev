import { ReactNode } from "react";
import Container from "./Container";

export default function Section({
  id,
  title,
  eyebrow,
  children
}: {
  id?: string;
  title: string;
  eyebrow?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="section" style={{ paddingBottom: "0px" }}>
      <Container>
        <div className="mb-5">
          {eyebrow && <p className="text-xs uppercase tracking-widest text-brand-700 mb-2">{eyebrow}</p>}
          <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
        </div>
        {children}
      </Container>
    </section>
  );
}
