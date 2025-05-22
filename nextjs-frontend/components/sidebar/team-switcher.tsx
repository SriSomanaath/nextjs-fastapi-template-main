import * as React from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import clsx from "clsx";

export function TeamIconSwitcher({
  teams,
  selectedTeam,
  onTeamChange,
}: {
  teams: {
    name: string;
    logo: React.ElementType;
    plan: string;
  }[];
  selectedTeam: string;
  onTeamChange: (teamName: string) => void;
}) {
  return (
    <div className="flex flex-col items-center gap-2 p-2 bg-sidebar-secondary border-r">
      {teams.map((team) => {
        const isActive = team.name === selectedTeam;
        return (
          <Tooltip key={team.name}>
            <TooltipTrigger asChild>
              <button
                onClick={() => onTeamChange(team.name)}
                className={clsx(
                  "flex items-center justify-center h-10 w-10 rounded-md transition-all hover:bg-sidebar-accent",
                  isActive ? "bg-sidebar-accent text-sidebar-accent-foreground" : "text-muted-foreground"
                )}
              >
                <team.logo className="size-5" />
              </button>
            </TooltipTrigger>
            <TooltipContent side="right">{team.name}</TooltipContent>
          </Tooltip>
        );
      })}
    </div>
  );
}
