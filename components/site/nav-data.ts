// Navigation structure of the original site (module 9501), unchanged.
export type NavLink = { label: string; href: string; children?: NavLink[] };
export type NavItem = { key: string; label: string; href?: string; children?: NavLink[] };

export const NAV: NavItem[] = [
  { key: "home", label: "Home", href: "/" },
  {
    key: "about",
    label: "About Us",
    href: "/about-us",
    children: [
      { label: "Annual Maintenance Program", href: "/annual-maintenance-program" },
      { label: "The Clean Team", href: "/the-clean-team" },
      { label: "Career", href: "/career" },
      { label: "Our Reviews", href: "/reviews" },
      { label: "Contact Us", href: "/contact-us" },
      { label: "Satisfaction Guarantee Policy", href: "/satisfaction-guarantee-policy" },
    ],
  },
  {
    key: "residential",
    label: "Residential",
    children: [
      { label: "Pressure Washing", href: "/pressure-washing" },
      { label: "Concrete Sealing", href: "/concrete-sealing" },
      { label: "House Washing", href: "/house-washing" },
      { label: "Roof Washing", href: "/roof-washing" },
      { label: "Window Cleaning", href: "/window-cleaning-cincinnati" },
      { label: "Gutter Cleaning", href: "/gutter-cleaning" },
    ],
  },
  {
    key: "commercial",
    label: "Commercial",
    children: [
      { label: "Building Wash", href: "/building-wash" },
      { label: "Commercial Pressure Washing", href: "/commercial-pressure-washing" },
      { label: "Commercial Gutter Cleaning", href: "/commercial-gutter-cleaning" },
      { label: "Commercial Window Cleaning", href: "/commercial-window-cleaning" },
      { label: "Restaurant", href: "/restaurant" },
      { label: "Gas Station", href: "/gas-station" },
      {
        label: "Stain Removal",
        href: "/stain-removal",
        children: [
          { label: "Graffiti Removal", href: "/graffiti-removal" },
          { label: "Rust Removal", href: "/rust-removal" },
          { label: "Efflorescence Removal", href: "/efflorescence-removal" },
          { label: "Gum Removal", href: "/gum-removal" },
          { label: "Oil Removal", href: "/oil-removal" },
          { label: "Grease Removal", href: "/grease-removal" },
        ],
      },
      {
        label: "Parking Lot Maintenance",
        href: "/parking-lot-maintenance",
        children: [
          { label: "Parking Lot Washing", href: "/parking-lot-washing" },
          { label: "Sweeping & Cleaning", href: "/sweeping-cleaning" },
        ],
      },
      { label: "Post Construction Clean Up", href: "/post-construction-clean-up" },
    ],
  },
  {
    key: "gallery",
    label: "Gallery",
    children: [
      { label: "Commercial-Gallery", href: "/commercial-gallery" },
      { label: "Residential-Gallery", href: "/residential-gallery" },
    ],
  },
  { key: "seal", label: "Seal Solutions", href: "/seal-solutions" },
];

export const PHONE_DISPLAY = "(513) 570-0355";
export const PHONE_TEL = "tel:5135700355";
