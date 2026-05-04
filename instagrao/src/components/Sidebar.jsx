import {
  Home,
  Search,
  Compass,
  Film,
  Heart,
  PlusSquare,
  Send,
  Menu,
} from "lucide-react";

function Sidebar() {
  const items = [
    { icon: Home, label: "Home" },
    { icon: Search, label: "Search" },
    { icon: Compass, label: "Explore" },
    { icon: Film, label: "Reels" },
    { icon: Send, label: "Messages" },
    { icon: Heart, label: "Notifications" },
    { icon: PlusSquare, label: "Create" },
  ];

  return (
    <aside className="sidebar">
      <h1 className="logo">Instagrao</h1>

      <nav className="menu">
        {items.map(({ icon: Icon, label }) => (
          <div className="menu-item" key={label}>
            <Icon size={25} />
            <span>{label}</span>
          </div>
        ))}
      </nav>

      <div className="more-menu">
        <Menu size={25} />
        <span>More</span>
      </div>
    </aside>
  );
}

export default Sidebar;

