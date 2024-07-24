import resume from "@/assets/files/resume.pdf";
import {
  IconBrandDiscord,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandSteam,
  IconDownload,
  IconMail,
} from "@tabler/icons-react";

export function NavPanel() {
  return (
    <div className="flex h-full flex-col justify-between gap-8 text-brownBeige-600">
      <div className="ml-auto">
        <a className="m-2 flex items-center gap-4 p-2" href={resume} rel="noreferrer" target="_blank">
          Download CV <IconDownload />
        </a>
      </div>

      <div className="relative z-10 flex flex-col items-center gap-8">
        <div className="w-[150px] border-b-4 border-current text-right font-display">
          <p className="text-4xl">9+ years</p>
          <p className="text-lg">Expert</p>
        </div>
        <div className="flex gap-3">
          <a href="https://linkedin.com/in/richardaum">
            <IconBrandLinkedin />
          </a>
          <a href="mailto:richard.lopes92@gmail.com">
            <IconMail />
          </a>
          <a href="https://github.com/richardaum">
            <IconBrandGithub />
          </a>
          <a href="https://discordapp.com/users/richardaum">
            <IconBrandDiscord />
          </a>
          <a href="https://steamcommunity.com/id/richardaum">
            <IconBrandSteam />
          </a>
        </div>
        <p className="mb-2 text-center text-xs">
          Designed and implemented by Richard Lopes © 2024 <br />
          All rights reserved
        </p>
      </div>
    </div>
  );
}
