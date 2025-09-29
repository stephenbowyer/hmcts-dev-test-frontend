export interface Task {
  id: string;
  title: string;
  description: string;
  status: string;
  dueDate: string;
  formattedDueDate?: string;
  formattedStatus?: string;
  statusClass?: string;
}
