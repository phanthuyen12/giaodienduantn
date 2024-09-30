export interface MenuItemTypes {
    key: string;
    label: string;
    isTitle?: boolean;
    icon?: string;
    url?: string;
    badge?: {
      variant: string;
      text: string;
    };
    parentKey?: string;
    target?: string;
    children?: MenuItemTypes[];
  }
  
  const MENU_ITEMS: MenuItemTypes[] = [
    { key: "MAIN", label: "MAIN", isTitle: true },
    {
      key: "/hospital/home",
      label: "Home",
      isTitle: false,
      icon: "calendar",
      url: "/hospital/home",
    },
    { key: "HOSPITAL", label: "HOSPITAL", isTitle: true },
    {
      key: "/hospital/profile-hospital",
      label: "Organizational information",
      isTitle: false,
      icon: "calendar",
      url: "/hospital/profile-hospital",
    },
    {
      key: "Hospital branch",
      label: "Hospital branch",
      isTitle: false,
      icon: "calendar",
      url: "/hospital/hospital-branch",
    },
    // {
    //   key: "Hospital branch",
    //   label: "Hospital branch",
    //   isTitle: false,
    //   icon: "calendar",
    //   url: "/hospital/create-branch",
    // },
    {
      key: "personnel management",
      label: "Personnel management",
      isTitle: false,
      icon: "calendar",
      url: "/hospital/personnel-management",
    },
    {
      key: "dashboard-1",
      label: "patient management",
      isTitle: false,
      icon: "calendar",
      url: "/dashboard-1",
    },
    {
      key: "dashboard-1",
      label: "Manage book access rights",
      isTitle: false,
      icon: "calendar",
      url: "/dashboard-1",
    },
    { key: "PHARMACY", label: "PHARMACY", isTitle: true },
    {
      key: "dashboard-1",
      label: "Manage prescriptions",
      isTitle: false,
      icon: "calendar",
      url: "/dashboard-1",
    },
    { key: "DOCTER", label: "DOCTER", isTitle: true },
    {
      key: "dashboard-1",
      label: "Manage book access rights",
      isTitle: false,
      icon: "calendar",
      url: "/dashboard-1",
    },
    {
      key: "dashboard-1",
      label: "Patient management",
      isTitle: false,
      icon: "calendar",

      url: "/dashboard-1",
    },
    { key: "NURSE", label: "NURSE", isTitle: true },

    {
      key: "request-medical",
      label: "Request Medical",
      isTitle: false,
      icon: "calendar",

      url: "/hospital/request-medical",
    },
    { key: "BRACH", label: "BRACH", isTitle: true },

    {
      key: "home",
      label: "Home",
      isTitle: false,
      icon: "calendar",

      url: "/hospital/brach/index",
    },
    {
      key: "personnel-management",
      label: "Personnel management",
      isTitle: false,
      icon: "calendar",

      url: "/hospital/brach/personnel-management",
    },
    {
      key: "Manage medical records",
      label: "Manage medical records",
      isTitle: false,
      icon: "calendar",

      url: "/hospital/brach/manage-medical-records",
    },
    {
      key: "Right to medical ",
      label: "Right to medical ",
      isTitle: false,
      icon: "calendar",

      url: "/hospital/brach/right-to-medical ",
    },
  ];
  
  const HORIZONTAL_MENU_ITEMS: MenuItemTypes[] = [
    {
      key: "dashboard",
      icon: "home",
      label: "Dashboard",
      isTitle: true,
      children: [
        {
          key: "ds-dashboard-1",
          label: "Dashboard 1",
          url: "/dashboard-1",
          parentKey: "dashboard",
        },
      ]
    },
  ];
  
  const TWO_COl_MENU_ITEMS: MenuItemTypes[] = [
    {
      key: "dashboard",
      icon: "home",
      label: "Dashboard",
      isTitle: true,
      children: [
        {
          key: "ds-dashboard-1",
          label: "Dashboard 1",
          url: "/dashboard-1",
          parentKey: "dashboard",
        },
        {
          key: "ds-dashboard-2",
          label: "Dashboard 2",
          url: "/dashboard-2",
          parentKey: "dashboard",
        },
        {
          key: "ds-dashboard-3",
          label: "Dashboard 3",
          url: "/dashboard-3",
          parentKey: "dashboard",
        },
        {
          key: "ds-dashboard-4",
          label: "Dashboard 4",
          url: "/dashboard-4",
          parentKey: "dashboard",
        },
      ],
    },
    
       
    {
      isTitle: true,
      key: "widgets",
      label: "Other page",
      icon: "gift",
      url: "/ui/widgets",
      children: [
        {
          key: "widgets1",
          label: "Widgets",
          url: "/ui/widgets",
          parentKey: "widgets",
        },
      ],
    },
    // {
    //     key: 'widgets',
    //     label: 'Widgets',
    //     isTitle: false,
    //     icon: 'gift',
    //     url: '/ui/widgets',
    // },
  ];
  
  export { MENU_ITEMS, TWO_COl_MENU_ITEMS, HORIZONTAL_MENU_ITEMS };
  