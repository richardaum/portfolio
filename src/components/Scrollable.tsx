"use client";
import { openDrawerAtom } from "@/atoms/drawer";
import { useAtom } from "jotai";
import { useOverlayScrollbars } from "overlayscrollbars-react";
import { HTMLAttributes, useEffect } from "react";

export const Scrollable = (props: HTMLAttributes<HTMLElement>) => {
  const [isDrawerOpen] = useAtom(openDrawerAtom);

  const [initialize, instance] = useOverlayScrollbars({
    options: {
      scrollbars: { autoHide: "move", autoHideDelay: 400 },
    },
    defer: true,
  });

  useEffect(() => {
    if (!instance) return;
    initialize(document.body);
  }, [instance, initialize]);

  useEffect(() => {
    if (!instance) return;
    instance()?.options({ overflow: { x: "hidden", y: isDrawerOpen ? "hidden" : "scroll" } });
  }, [instance, isDrawerOpen]);

  return props.children;
};
