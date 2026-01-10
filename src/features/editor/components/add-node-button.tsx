"use client";

import { PlusIcon } from "lucide-react";
import { memo, useState } from "react";
import { Button } from "@/components/ui/button";

export const AddNodeButton = memo(() => {
  const [selectOpen, setSelectorOpen] = useState(false);
  return (
      <Button
        onClick={() => {}}
        size="icon"
        variant="outline"
        className="bg-background"
      >
        <PlusIcon />
      </Button>
  );
});

AddNodeButton.displayName = "AddNodeButton";
