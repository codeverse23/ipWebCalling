export const MenuItems = [
  {
    id: 1,
    header: "MAIN MENU",
    submenu: [
      {
        id:1,
        title: "Dashboard",
        iconClass: "ti ti-layout-2",
        menu: [
          { id: 1, title: "Deals Dashboard", link: "#" },
          { id: 2, title: "Leads Dashboard", link: "#" },
          { id: 3, title: "Project Dashboard", link: "#" },
        ],
      },
      {
        id:2,
        title: "Application",
        iconClass: "ti ti-brand-airtable",
        menu: [{ id: 1, title: "Chat", link: "#" }],
      },
    ],
  },
  {
    id: 2,
    header: "CRM",
    submenu: [
      {
        id:3,
        title: "Contacts",
        iconClass: "ti ti-user-up",
        menu: [
          { id: 1, title: "Companies", link: "#" },
         
        ],
      },
    ],
  },
];
