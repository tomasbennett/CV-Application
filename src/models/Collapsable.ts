export type IFormCollapsableProps = "open" | "closed" | "opening" | "closing";

export type IFormTogglable = Extract<IFormCollapsableProps, "closed" | "open">;