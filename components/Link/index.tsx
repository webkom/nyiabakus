import NextLink from "next/link";
import Icon from "../Icon";
import styles from "./styles.module.css";

interface LinkProps extends React.ComponentProps<typeof NextLink> {
  children: React.ReactNode;
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
 * @returns a next link with or without icon appended
 */
const Link = ({ children, ...props }: LinkProps) => {
  const isExternal = !internalRegEx.test(props.href.toString());
  return (
    <NextLink target={isExternal ? "_blank" : "_self"} {...props}>
      <span className={styles.children}>
        {children}
        {isExternal && <Icon className={styles.icon} name="open-outline" />}
      </span>
    </NextLink>
  );
};

export default Link;
