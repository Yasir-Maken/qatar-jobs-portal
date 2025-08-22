import { Briefcase } from "lucide-react";

type logoTitle = {
  header: string;
};

export function QatarJobLogo({ header }: logoTitle) {
  return (
    <div className="flex items-center space-x-3">
      <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
        <Briefcase className="w-5 h-5 text-primary-foreground" />
      </div>
      <span className="text-xl font-bold text-foreground truncate max-w-[60vw] sm:max-w-none">
        {header}
      </span>
    </div>
  );
}
