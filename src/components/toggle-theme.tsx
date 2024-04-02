'use client';

import { useTheme } from 'next-themes';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const themes = ['light', 'dark', 'system'];

export function ToggleTheme() {
  const { theme = 'light', setTheme } = useTheme();

  return (
    <Select value={theme} onValueChange={(value: string) => setTheme(value)}>
      <SelectTrigger className="h-7 w-[145px] text-xs [&_svg]:h-4 [&_svg]:w-4 bg-black text-white mr-2 focus:ring-transparent ring-transparent capitalize ring-0 focus:ring-offset-0 border-[#27272a]">
        <span className="text-muted-foreground">Mode: </span>
        <SelectValue placeholder="Select Mode" />
      </SelectTrigger>
      <SelectContent className="bg-black text-white border-[#27272a]">
        {themes.map(item => (
          <SelectItem
            value={item}
            className="text-xs capitalize focus:bg-[#18181b] focus:text-white"
          >
            {item}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
