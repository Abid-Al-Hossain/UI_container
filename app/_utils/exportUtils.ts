import type { ContainerState } from "../types";

export type ExportPayload = { fileName: string; mimeType: "text/plain;charset=utf-8"; content: string };

export function buildExportPayload(state: ContainerState, fileName = "container") : ExportPayload {
  return { fileName: `${fileName || "container"}.jsx`, mimeType: "text/plain;charset=utf-8", content: buildReactCode(state) };
}

export function buildReactCode(state: ContainerState) {
  return `import * as React from "react";

const state = ${JSON.stringify(state, null, 2)};

export default function ContainerComponent() {
  const Element = state.element === "hr" ? "div" : state.element;
  const role = ["presentation", "group", "region"].includes(state.role) ? state.role : undefined;
  const style = {
    width: state.fluid ? "100%" : state.width,
    maxWidth: state.maxWidth,
    minHeight: state.minHeight,
    padding: state.safeArea ? \`max(\${state.padding}px, env(safe-area-inset-left))\` : state.padding,
    marginInline: state.centered ? "auto" : undefined,
    marginBlock: state.margin,
    display: "grid",
    alignContent: "center",
    gap: state.gap,
    borderRadius: state.radius,
    border: state.borderWidth + "px solid " + state.border,
    boxShadow: "0 " + Math.round(state.shadow / 3) + "px " + state.shadow + "px rgba(0,0,0,.28)",
    background: state.background,
    color: state.foreground,
    fontFamily: state.fontFamily
  };

  return (
    <Element id={state.id} role={role} aria-label={state.landmarkLabel || undefined} tabIndex={state.tabIndex} style={style}>
      <div style={{ display: "grid", gap: Math.max(8, state.gap / 2) }}>
        <p style={{ margin: 0, color: state.accent, fontSize: 12, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase" }}>{state.element} container</p>
        <h3 style={{ margin: 0, fontSize: state.titleSize, fontWeight: state.fontWeight }}>{state.title}</h3>
        <p style={{ margin: 0, color: state.muted, fontSize: state.bodySize }}>{state.description}</p>
      </div>
    </Element>
  );
}
`;
}
