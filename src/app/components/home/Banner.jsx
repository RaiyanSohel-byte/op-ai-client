import Image from "next/image";
import heroBg from "../../../../public/hero.png";
import { League_Gothic, Montserrat } from "next/font/google";
import Link from "next/link";
const gothic = League_Gothic({
  subsets: ["latin"],
});
const monsterrat = Montserrat({
  subsets: ["latin"],
});
export default function Banner() {
  return (
    <section className="relative h-200 flex items-center justify-center">
      <Image
        src={heroBg}
        alt="Background"
        fill
        priority
        className="object-cover -z-10"
      />
      <div className="text-center space-y-5">
        <h1
          className={`${gothic.className} text-white text-5xl lg:text-[64px] font-normal leading-20`}
        >
          Optimal Performance Coach
        </h1>
        <p
          className={`${monsterrat.className} font-normal text-sm lg:text-[20px] text-white leading-8`}
        >
          Experience the one-of-a-kind AI mental performance and wellness coach
          at your fingertips.
        </p>
        <div className="space-y-3 lg:space-y-0 lg:flex items-center gap-3 justify-center">
          <Link href={`/login`} className="btn-primary">
            Start Subscription
          </Link>
          <h3 className="btn-secondary">Chat with OP Coach Now</h3>
        </div>
      </div>
    </section>
  );
}
