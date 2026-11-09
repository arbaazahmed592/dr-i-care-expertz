import { SITE } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-10">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <p className="text-sm text-apple-silver/60">
          © {new Date().getFullYear()} {SITE.name}. All Rights Reserved.
        </p>
        <p className="mt-2 text-xs text-apple-silver/40">Website Developed By: {SITE.developer}</p>
      </div>
    </footer>
  );
}
