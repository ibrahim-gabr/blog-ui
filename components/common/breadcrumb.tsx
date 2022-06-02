import Link from "next/link";

type BreadcrumbProps = {
  title: React.ReactNode;
};

const Breadcrumbs = ({ title }: BreadcrumbProps) => {
  return (
    <nav className="my-4 sm:mb-4 text-black text-sm block" aria-label="Breadcrumb">
      <ol className="inline-flex p-0 list-none">
        <li className="flex items-center">
          <Link href="/" >
            <span className="text-theme-primary cursor-pointer">الرئيسية</span>
          </Link>
        </li>
        <li>
          <span className="mx-2 text-[#ECEEED]">/</span>
        </li>
        {/*<li className="flex items-center">
            <NextLink href="#">ملحقات هواتف ذكية</NextLink>
         </li>
         <li>
            <span className="mx-2">/</span>
         </li>*/}
        <li className="text-[#ECEEED]">{title}</li>
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
