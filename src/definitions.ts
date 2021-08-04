export interface TreadsGps3Plugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
