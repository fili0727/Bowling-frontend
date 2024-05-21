
export default interface Schedule {
  id?: number;
  employee: {
    id: number;
    name: string;
    role: string;
  };
  startTime: string;
  endTime: string;
}