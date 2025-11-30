import React from "react";
import { cn } from "@/lib/utils";

export function DotBackground({
  className,
  ...rest
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={cn(
        "fixed inset-0 -z-50 h-full w-full bg-white",
        className
      )}
      {...rest}
    >
      <div
        className={cn(
          "absolute inset-0 h-full w-full",
          "[background-size:16px_16px]",
          "[background-image:radial-gradient(circle,rgb(212_212_212)_1px,transparent_1px)]"
        )}
      />
    </div>
  );
}
