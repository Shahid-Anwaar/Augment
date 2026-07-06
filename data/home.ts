import { SecurityItem } from "./data";

export type NavItem = {
  label: string;
  href: string;
};

export const DESKTOP_NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  // { label: "Solutions", href: "/solutions" },
  { label: "For Coaches", href: "/for-coaches" },
  { label: "For Firms", href: "/for-firms" },
  // { label: "Community", href: "/community" },
  // { label: "About", href: "/about" },
  { label: "Pricing", href: "/pricing" },
  // { label: "Log in", href: "#" },
];


export type FeatureItem = {
  label: string;
  icon: string;
};

export const FEATURES: FeatureItem[] = [
   { label: "You-own-it", icon: "ph:key-fill" },
  { label: "Life-time", icon: "ph:infinity-fill" },
  { label: "Licensed", icon: "ph:seal-check-fill" },
];

export const heroSecurityItems: SecurityItem[] = [
  {
    name: "SOC 2",
    src: "/security (1).svg",
    width: 56,
    height: 56,
  },
  {
    name: "GDPR",
    src: "/security (3).svg",
    width: 56,
    height: 56,
  },
  {
    name: "PCI DSS",
    src: "/security (2).svg",
    width: 56,
    height: 56,
  },
  {
    name: "CCPA",
    src: "/security (4).svg",
    width: 56,
    height: 56,
  },
  {
    name: "AICPA",
    src: "/external-images/img-278521d2.webp",
    width: 56,
    height: 56,
  },
];