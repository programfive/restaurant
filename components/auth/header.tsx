import { cn } from "@/lib/utils";

interface HeaderProps {
  title: string;
  label: string;
};

export const Header = ({
  title,
  label,
}: HeaderProps) => {
  return (
    <div className="w-full flex flex-col gap-y-2 text-start md:text-center">
      <h1 className="text-2xl font-semibold">
        {title}
      </h1>
      <p className="text-muted-foreground text-sm">
        {label}
      </p>
    </div>
  );
};
