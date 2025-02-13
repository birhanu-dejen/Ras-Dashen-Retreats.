import Image from "next/image";
export default function Logo() {
  return (
    <a className="flex items-center gap-4 z-10">
      <Image height="60" width="60" alt="The Wild Oasis logo" src="/logo.png" />
      <span className="text-xl font-semibold text-primary-100">
        The Wild Oasis
      </span>
    </a>
  );
}
