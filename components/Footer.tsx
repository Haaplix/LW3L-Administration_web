import Link from "next/link";
import { ReactNode } from "react";
import Image from "next/image";

type FootLinksProps = {
  href: string;
  children: ReactNode;
};

function FootLinks(props: FootLinksProps) {
  return (
    <li className="hover:bg-j-emeraude transition-colors rounded-md px-4 py-2">
      <Link href={props.href} target="blank">
        {props.children}
      </Link>
    </li>
  );
}

export default function Footer() {
  return (
    <footer className="bg-black text-white px-2 py-2 w-full z-50 min-h-20">
      <ul className="container mx-auto flex justify-between">
        <div className="flex gap-7">
          <FootLinks href="">
            <Image
              src="/instagram.svg"
              alt="Instagram Logo"
              width={45}
              height={45}
            />
          </FootLinks>

        </div>
      </ul>
    </footer>
  );
}
