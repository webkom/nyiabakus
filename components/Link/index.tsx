import NextLink from "next/link";
import Icon from "../Icon";
import styles from "./styles.module.css";

interface LinkProps extends React.ComponentProps<typeof NextLink> {
  children: React.ReactNode;
  internal?: boolean;
  external?: boolean;
}

const internalRegEx = /^(#.*|\/.*|(.*(abakus\.no|localhost:\d)(\/.*)?))$/;

/**
 * {@link https://nextjs.org/docs/api-reference/next/link | next/link} wrapper adding icon to external links.
 *
 * A link is external if href does not match any of the following
 * `<string>` is any arbitrary string (including the empty string)
 * - #<string>
 * - /<string>
 * - <string>abakus.no
 * - <string>abakus.no/<string>
 * - <string>localhost:<digit>
 * - <string>localhost:<digit>/<string>
 *
 * @param external - overrides the above mentioned check (takes precedence over `internal`)
 * @param internal - overrides the above mentioned check
 * @returns a next link with or without icon appended
 */
export function Link({ children, external, internal, ...props }: LinkProps) {
  const isExternal =
    external ?? internal ?? !internalRegEx.test(props.href.toString());
  return (
    <NextLink {...props}>
      <span className={styles.children}>
        {children}
        {isExternal && <Icon className={styles.icon} name="open-outline" />}
      </span>
    </NextLink>
  );
}

export default Link;
