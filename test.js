const adminPaths2 = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: "COMPONENT",
  },
  {
    name: "User Management",
    children: [
      {
        name: "Create Admin",
        path: "create-admin",
        element: "COMPONENT",
      },
      {
        name: "Create Faculty",
        path: "create-faculty",
        element: "COMPONENT",
      },
      {
        name: "Create Student",
        path: "create-student",
        element: "COMPONENT",
      },
    ],
  },
];

const newArray = adminPaths2.reduce((acc, item) => {
  if (item.path && item.name) {
    acc.push({
      key: item.name,
      label: "Navlink" + item.name,
    });
  }

  if (item.children) {
    acc.push({
      key: item.name,
      label: item.name,
      children: item.children.map((child) => ({
        key: child.name,
        label: "Navlink" + child.name,
      })),
    });
  }

  return acc;
}, []);

console.log(JSON.stringify(newArray));
