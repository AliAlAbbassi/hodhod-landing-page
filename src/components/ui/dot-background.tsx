import React from "react";
import { cn } from "@/lib/utils";

export function DotBackground({
  className,
  ...rest
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={cn(
        "fixed inset-0 -z-50 h-full w-full bg-white pointer-events-none",
        className
      )}
      {...rest}
    >
      <div
        className={cn(
          "absolute inset-0 h-full w-full",
          "[background-size:16px_16px]"
        )}
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='8' cy='8' r='1' fill='rgb(212,212,212)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
