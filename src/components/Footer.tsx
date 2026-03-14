import Image from "next/image";
import logoImg from "@/assets/protrianrathome-logo.png";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/30">
      <div className=" px-4 text-center md:text-left">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <a href="#" className="flex items-center gap-2 text-primary font-display text-2xl">
            <div className="relative w-12 h-12 md:w-14 md:h-14">
              <Image src={logoImg} alt="ProTrainrAtHome" fill style={{ objectFit: "contain" }} className="rounded-md" />
            </div>
            {/* <span className="hidden sm:block">MomFitConsult</span> */}
          </a>

          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <a href="/programs" className="hover:text-foreground transition-colors">Programs</a>
            <a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a>
            <a href="#about-us" className="hover:text-foreground transition-colors">About Us</a>
          </div>

          <div className="text-sm text-muted-foreground">
            <p>hello@protrainrathome.com</p>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border/20 text-center text-xs text-muted-foreground">
          © 2026 ProTrainrAtHome. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
