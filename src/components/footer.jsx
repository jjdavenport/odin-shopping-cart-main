import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import Separator from "./separator";

const Footer = () => {
  return (
    <>
      <Separator className="bg-border" />
      <footer className="flex w-full justify-center p-4">
        <ul className="flex gap-8 text-sm">
          <li>
            <a className="flex gap-1">
              <Facebook className="h-5" />
              <span className="hidden md:flex">Facebook</span>
            </a>
          </li>
          <li className="flex gap-1">
            <a className="flex gap-1">
              <Twitter className="h-5" />
              <span className="hidden md:flex">Twitter</span>
            </a>
          </li>
          <li className="flex gap-1">
            <a className="flex gap-1">
              <Instagram className="h-5" />
              <span className="hidden md:flex">Instagram</span>
            </a>
          </li>
          <li className="flex gap-1">
            <a className="flex gap-1">
              <Youtube className="h-5" />
              <span className="hidden md:flex">Youtube</span>
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
};

export default Footer;
