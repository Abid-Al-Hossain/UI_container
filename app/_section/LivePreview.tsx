"use client";

import type { CSSProperties } from "react";
import type { ContainerState } from "../types";

function box(state: ContainerState): CSSProperties {
  return { width: state.fluid ? "100%" : state.width, maxWidth: state.maxWidth, minHeight: state.minHeight, padding: state.safeArea ? `max(${state.padding}px, env(safe-area-inset-left))` : state.padding, marginInline: state.centered ? "auto" : undefined, marginBlock: state.margin, display: "grid", alignContent: "center", gap: state.gap, borderRadius: state.radius, border: `${state.borderWidth}px solid ${state.border}`, boxShadow: `0 ${Math.round(state.shadow / 3)}px ${state.shadow}px rgba(0,0,0,.28)`, background: state.background, color: state.foreground, fontFamily: state.fontFamily, transition: state.motion ? "background 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease" : "none" };
}

export default function LivePreview({ state }: { state: ContainerState }) {
  const Element = state.element === "hr" ? "div" : state.element;
  const role = state.role === "presentation" || state.role === "group" || state.role === "region" ? state.role : undefined;
  const style = box(state);
  return <Element id={state.id} role={role} aria-label={state.landmarkLabel || undefined} tabIndex={state.tabIndex} style={style}><div style={{ display: "grid", gap: Math.max(8, state.gap / 2) }}><p style={{ margin: 0, color: state.accent, fontSize: 12, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase" }}>{state.element} container</p><h3 style={{ margin: 0, fontSize: state.titleSize, fontWeight: state.fontWeight }}>{state.title}</h3><p style={{ margin: 0, color: state.muted, fontSize: state.bodySize }}>{state.description}</p></div></Element>;
}
