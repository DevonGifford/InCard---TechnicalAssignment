import Image from "next/image";
import CSRImage from "@/public/other/CSR_image.svg";

type User =
  | {
      name?: string | null | undefined;
      image?: string | null | undefined;
    }
  | undefined;

type Props = {
  user: User;
  pagetype: string;
};

export default function Card({ user, pagetype }: Props) {
  //👇Conditional Greeting Card (w/username from session data)
  const greeting = user?.name ? (
    <div>
      <div className="flex flex-col justify-center text-center items-center pt-1 bg-incard-blue font-bold text-base sm:text-xl sm:p-4 md:text-3xl text-black rounded-3xl">
        <span>Welcome back {user?.name}!</span>
      </div>
      <span className="flex pt-2 justify-center text-sm md:text-lg text-green-500 font-bold">
        Logged-in ✔
      </span>
      <Image
        className="flex mx-auto mt-2"
        src={CSRImage}
        width={500}
        height={500}
        alt="incard-card-image"
      />
    </div>
  ) : null;

  return (
    <section className="flex sm:w-1/2 sm:h-1/2 justify-center items-center flex-col gap-4 pt-10 md:pt-20">
      <p className="text-l sm:text-2xl text-center">
        This is a{" "}
        <strong className="text-incard-blue">{pagetype} Side Rendered</strong>{" "}
        Page
      </p>
      {greeting}
      <span className="text-base text-center text-green-600">
        Only authenticated users can see this
      </span>
    </section>
  );
}
