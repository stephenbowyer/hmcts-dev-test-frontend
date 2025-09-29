export function formatDueDate(dateStr: string): string {
  if (!dateStr) {return '';}
  const date = new Date(dateStr);
  return date.toLocaleDateString(undefined, {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function formatStatus(status: string): string {
  return status
    .split('_')
    .map((w: string) => w[0].toUpperCase() + w.substring(1).toLowerCase())
    .join(' ');
}

export function getStatusTagClass(status: string): string {
  switch (status) {
    case 'completed':
      return 'govuk-tag--green';
    case 'in_progress':
      return 'govuk-tag--yellow';
    case 'not_started':
      return 'govuk-tag--red';
    case 'scheduled':
      return 'govuk-tag--blue';
    default:
      return 'govuk-tag--grey';
  }
}
