import { MultiLinkType } from "@types";
import { isMultiLinkValid } from "@app/helpers/utils.helpers";
import { Link, Button } from "@atoms";
import cx from "classnames";

/**
 * @Multilink
 * @Spread link props
 * @returns null if invalid
 */
export const MultiLink = (props: MultiLinkType) => {
  const {
    label,
    emailLink,
    externalUrl,
    anchorLink,
    pageLink,
    className,
    showAsButton,
    inline,
    asButton,
  } = props;
  let useAsHref = "";
  let isExternal = false;

  if (!isMultiLinkValid(props)) return null;

  /**
   * Define HREF:
   *
   * priority order:
   * - PageLink
   * - emailLink
   * - externalUrl
   */
  if (pageLink && pageLink.slug) {
    useAsHref = pageLink.slug as string;
  } else if (emailLink) {
    useAsHref = `mailto:${emailLink}`;
  } else if (externalUrl) {
    useAsHref = externalUrl;
    isExternal = true;
  }
  /**
   * Use anchorLink if defined and the link is not external or email
   */
  if (anchorLink && !externalUrl && !emailLink) {
    useAsHref = `${useAsHref}${
      anchorLink.startsWith("#") ? anchorLink : `#${anchorLink}`
    }`;
  }

  /**
   * LABEL: choose label over pageLink.navigationLabel or default to "Link"
   */
  const useAsLabel = label || pageLink?.navigationLabel || "Link";

  if (!useAsHref) return null;

  return !asButton && !showAsButton ? (
    <Link
      href={useAsHref}
      target={isExternal ? "_blank" : "_self"}
      className={cx(
        inline ? "inline" : "inline-block",
        className,
        "duration-200 ease-out hover:opacity-60"
      )}
    >
      {useAsLabel}
    </Link>
  ) : (
    <Button
      link={{ href: useAsHref, target: isExternal ? "_blank" : "_self" }}
      className={className}
    >
      {useAsLabel}
    </Button>
  );
};
