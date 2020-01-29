export interface AccountTableRowType {
  id: number;
  name: string;
  role: "admin" | "member";
  details: string;
}

export interface CompanyTableRowType {
  id: number;
  name: string;
  address: string;
  details: string;
}
