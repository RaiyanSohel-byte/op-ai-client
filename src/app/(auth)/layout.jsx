import { Inter } from "next/font/google";
import Image from "next/image";
import bg from "../../../public/authBG.png";
export default function AuthLayout({ children }) {
  return (
    <section className="relative min-h-screen py-5 flex items-center justify-center">
      <Image
        src={bg}
        alt="Background"
        fill
        priority
        className="object-cover -z-10"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50 -z-5"></div>
      {children}
    </section>
  );
}
