import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

export interface NextLinkProps extends LinkProps {
  className?: string;
  activeClassName?: string;
  title?: string;
  exact?: boolean;
  onClick?: any;
  children?: React.ReactNode;
}

const NextLink: React.FC<NextLinkProps> = ({
  className = "",
  href,
  activeClassName = "",
  title,
  children,
  exact,
  onClick = () => {},
  ...rest
}) => {
  const router = useRouter();

  if (exact && activeClassName) {
    if (router.asPath === `/${href}`) {
      className += ` ${activeClassName}`;
    }
  } else {
    if (router.asPath.startsWith(`/${href}`)) {
      className += ` ${activeClassName}`;
    }
  }

  return (
    <Link href={href} {...rest} prefetch={false}>
      <a
        aria-label={title}
        onClick={onClick}
        title={title}
        className={className || ""}
      >
        {children}
      </a>
    </Link>
  );
};

export default NextLink;
