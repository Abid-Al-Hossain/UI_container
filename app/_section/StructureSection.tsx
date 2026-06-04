"use client";

import { SectionCard } from "@/components/shared/layout/SectionCard";
import type { ContainerState } from "../types";

type Props = { state: ContainerState; update: <K extends keyof ContainerState>(key: K, value: ContainerState[K]) => void };

export default function StructureSection({ state, update }: Props) {
  return <SectionCard title="Structure" subtitle="Structure controls for native layout/page-structure generation."><div className="rounded-2xl border p-4 text-sm" style={{ borderColor: "var(--border)", color: "var(--muted)" }}>No separate native controls are needed for this section in this component.</div></SectionCard>;
}
