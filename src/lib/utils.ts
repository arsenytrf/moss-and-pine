export function cn(...classes: (string | false | null | undefined)[]): string {
  return classes.filter(Boolean).join(" ");
}

export function formatPhone(phone: string) {
  return phone.replace(/[^+\d]/g, "");
}
