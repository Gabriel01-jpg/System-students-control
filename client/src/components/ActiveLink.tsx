import { useRoutes, Link, LinkProps, useLocation } from "react-router-dom";
/* import Link, { LinkProps } from "next/link"; */

import { cloneElement, ReactElement } from "react";

interface ActiveLinkProps  extends LinkProps  {
  children: ReactElement;
  shouldMatchExactHref?: boolean;
}

export function ActiveLink({
  shouldMatchExactHref = false,
  children,
  ...rest
}: ActiveLinkProps) {
  const { pathname } = useLocation();
  let isActive = false;

  /* console.log(pathname); */
  const linkHref = rest.to as string;

  
  if(pathname.includes(linkHref)){
      isActive = true;
  }

  /* if (
    (!shouldMatchExactHref && pathname.startsWith(String(rest.to))) ||
    pathname.startsWith(String(rest.to))
  ) {
    isActive = true;
  } */

  return (
    <Link {...rest}>
      {cloneElement(children, {
        color: isActive ? "#294A97" : "gray.400",
      })}
    </Link>
  );
}