interface NavItem {
  label: string;
  href: string;
}

interface NavbarProps {
  items: NavItem[];
}

export const Navbar = ({ items }: NavbarProps) => {
  return (
    <ul className="flex whitespace-nowrap text-sm">
      {items.map((item) => (
        <li key={item.href}>
          {/* В реальном проекте, Link будет здесь или передан через слот/обернут выше */}
          <a className="px-1" href={item.href}>
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );
};
