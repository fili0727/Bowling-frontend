export default interface NewShift {
  employee: {
    id: number;
    name: string;
    role: string;
  };
  startTime: string;
  endTime: string;
}