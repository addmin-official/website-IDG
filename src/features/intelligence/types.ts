export interface GraphNode {
  id: string;
  label: string;
  kuLabel: string;
  arLabel: string;
  type: 'port' | 'customs_office' | 'corridor' | 'commodity' | 'regulation' | 'organization';
  status: 'active' | 'bottleneck' | 'restricted' | 'offline';
  description: string;
  kuDescription: string;
  arDescription: string;
}

export interface GraphLink {
  source: string;
  target: string;
  label: string;
  kuLabel: string;
  arLabel: string;
  type: 'depends_on' | 'routes_through' | 'regulated_by' | 'managed_by';
}

export type Locale = 'ku' | 'ar' | 'en';
