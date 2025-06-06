import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";
import data from "@/app/(site)/[slug]/data.json";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { ThemeToggle } from "@/components/theme-toggle";
import { GithubIcon } from "lucide-react";
import { HeaderSearch } from "@/components/search";

export function SiteHeader() {
  return (
    <header className="bg-background/95 border-border/70 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur">
      <div className="flex h-16 items-center justify-between px-4">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Logo />
          </Link>
        </div>
        <div className="hidden md:block">
          <HeaderSearch />
        </div>
        <div className="flex items-center justify-between space-x-2 md:justify-end">
          <nav className="flex items-center">
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Button variant="ghost" asChild>
                  <Link href="/categories">Examples</Link>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {data.map((item, key) => (
                  <DropdownMenuItem key={key} asChild disabled={!!item?.isComing}>
                    <Link
                      href={item.href}
                      className="hover:text-primary text-sm font-medium transition-colors">
                      {item.meta.title}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://github.com/shadcn-examples" target="_blank">
                <GithubIcon />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://x.com/ShadcnExamples" target="_blank" className="text-foreground">
                <svg
                  className="size-3.5"
                  xmlns="http://www.w3.org/2000/svg"
                  shapeRendering="geometricPrecision"
                  textRendering="geometricPrecision"
                  imageRendering="optimizeQuality"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  viewBox="0 0 512 462.799">
                  <path
                    fillRule="nonzero"
                    fill="currentColor"
                    d="M403.229 0h78.506L310.219 196.04 512 462.799H354.002L230.261 301.007 88.669 462.799h-78.56l183.455-209.683L0 0h161.999l111.856 147.88L403.229 0zm-27.556 415.805h43.505L138.363 44.527h-46.68l283.99 371.278z"
                  />
                </svg>
              </Link>
            </Button>
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}
