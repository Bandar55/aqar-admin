interface NavAttributes {
  [propName: string]: any;
}
interface NavWrapper {
  attributes: NavAttributes;
  element: string;
}
interface NavBadge {
  text: string;
  variant: string;
}
interface NavLabel {
  class?: string;
  variant: string;
}

export interface NavData {
  adminOnly?: Boolean
  name?: string;
  url?: string;
  icon?: string;
  badge?: NavBadge;
  title?: boolean;
  children?: NavData[];
  variant?: string;
  attributes?: NavAttributes;
  divider?: boolean;
  class?: string;
  label?: NavLabel;
  wrapper?: NavWrapper;

}

export const navItems: NavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
    adminOnly: true
  },
  {
    name: 'User Management',
    url: '/allUsers',
    icon: 'icon-pencil'
  },
  {
    name: 'Property Management',
    url: '/property',
    icon: 'icon-pencil'
  },
  {
    name: 'Category Management',
    url: '/category',
    icon: 'icon-pencil'
  },
  {
    name: 'Subadmin Management',
    url: '/subadmin',
    icon: 'icon-pencil'
  },
  {
    name: 'Marketing Management',
    url: '/marketing',
    icon: 'icon-pencil'
  },
  {
    name: 'Content Management',
    url: '/content',
    icon: 'icon-pencil'
  },
  {
    name: 'Currency Management',
    url: '/currency',
    icon: 'icon-pencil'
  },
  {
    name: 'Language Management',
    url: '/language',
    icon: 'icon-pencil'
  },
];

// if ('admin' === 'admin') {
//   console.log('nav check')
//   this.NavData.filter(item => {
//     return item.adminOnly
//   });
// } 
