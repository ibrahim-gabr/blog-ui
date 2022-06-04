import Link from "next/link";

type BreadcrumbProps = {
  title: React.ReactNode;
};

const Breadcrumbs = ({ title }: BreadcrumbProps) => {
  return (
    <nav
      className="my-4 sm:mb-4 text-black text-sm block"
      aria-label="Breadcrumb"
    >
      <ol className="inline-flex p-0 list-none">
        <li className="flex items-center">
          <Link href="/">
            <span className="text-theme-primary cursor-pointer">الرئيسية</span>
          </Link>
        </li>
        <li>
          <span className="mx-2 text-theme-lily-white">/</span>
        </li>
        <li className="text-theme-lily-white">{title}</li>
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
