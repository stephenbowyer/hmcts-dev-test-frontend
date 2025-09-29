import { formatDueDate, formatStatus, getStatusTagClass } from '../../main/helpers/taskHelpers';
import { Task } from '../../main/types/task';

describe('Task helpers', () => {
  it('should format due date correctly', () => {
    const task: Task = {
      id: '1',
      title: 'Test Task',
      description: 'A test task',
      status: 'complete',
      dueDate: '2025-09-29',
    };
    expect(formatDueDate(task.dueDate)).toBe('Monday 29 September 2025');
  });

  it('should format status correctly', () => {
    expect(formatStatus('completed')).toBe('Completed');
  });

  it('should get the correct class for a given status', () => {
    expect(getStatusTagClass('completed')).toBe('govuk-tag--green');
  });
});
