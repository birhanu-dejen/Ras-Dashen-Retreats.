import Link from "next/link";
export function SocialsInfo({ Icon, link }) {
  return (
    <Link
      href={link}
      className="text-gray-400 hover:text-accent-500 transition-colors duration-200"
    >
      <Icon className="h-5 w-5" />
    </Link>
  );
}
export function MoreInfo({ name, link }) {
  return (
    <Link
      href={link}
      className="hover:text-accent-500 transition-colors duration-200 block"
    >
      {name}
    </Link>
  );
}
export function ContactInfo({ name, Icon }) {
  return (
    <div className="flex items-center space-x-3">
      <Icon className="h-5 w-5 text-accent-500 flex-shrink-0" />
      <span>{name}</span>
    </div>
  );
}
export function TermsInfo({ name, link }) {
  return (
    <Link
      href={link}
      className="text-gray-500 hover:text-accent-500 text-sm transition-colors duration-200"
    >
      {name}
    </Link>
  );
}
