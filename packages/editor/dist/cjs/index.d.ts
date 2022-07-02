import "./extensions";
import Toolbar from "./toolbar";
import { Theme } from "@notesnook/theme";
import { AttachmentOptions } from "./extensions/attachment";
import { EditorOptions } from "@tiptap/core";
declare type TiptapOptions = EditorOptions & AttachmentOptions & {
    theme: Theme;
    isMobile?: boolean;
};
declare const useTiptap: (options?: Partial<TiptapOptions>, deps?: import("react").DependencyList) => import("./types").Editor | null;
export { useTiptap, Toolbar };
export * from "./types";
export * from "./extensions/react";
export * from "./toolbar";
export { type AttachmentType } from "./extensions/attachment";
