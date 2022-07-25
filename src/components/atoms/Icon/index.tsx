import * as Icons from "./Icon";

/**
 * Icon
 *
 * How to update icons?
 * 1) readme in icons folder => use yarn script
 * 2) update IconDef + iconMap with signature string
 *
 * How to use icon?
 * @import {Icon} from "@app/components/atoms"
 * <Icon name="Menu" />
 *
 *
 */

// Update IconDef with new added icons
interface IconDef {
  name: "facebook" | "linkedin";
  clean?: boolean;
}

// Update iconMap with new added icons
const iconMap = {
  facebook: Icons.IconFacebook,
  linkedin: Icons.IconLinkedIn,
};

export const Icon = ({ name, clean = false }: IconDef) => {
  const IconComp = iconMap[name];

  return clean ? (
    <IconComp />
  ) : (
    <span className="text-24">
      <IconComp />
    </span>
  );
};
