"use client";

import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";
import React from "react";

export const Sidebar = () => {
  return (
    <div className="font-medium text-xs flex items-center mb-1">
      <span className="pl-4">Workspacess</span>
      <Button
        asChild
        type="button"
        size="icon"
        variant="ghost"
        className="ml-auto"
      >
        <Link href="/select-org">
          <Plus className="h-4 w-4" />
        </Link>
      </Button>
    </div>
  );
};
