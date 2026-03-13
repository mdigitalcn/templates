const currencyFmt = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" });
const numberFmt = new Intl.NumberFormat("en-US", { notation: "compact" });
const dateFmt = new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", year: "numeric" });
const relativeFmt = new Intl.RelativeTimeFormat("en-US", { numeric: "auto" });

export function formatCurrency(amount: number) {
  return currencyFmt.format(amount);
}

export function formatNumber(n: number) {
  return numberFmt.format(n);
}

export function formatDate(date: Date | string) {
  return dateFmt.format(new Date(date));
}

export function formatRelativeTime(date: Date | string) {
  const diff = new Date(date).getTime() - Date.now();
  const days = Math.round(diff / (1000 * 60 * 60 * 24));
  if (Math.abs(days) < 1) {
    const hours = Math.round(diff / (1000 * 60 * 60));
    return relativeFmt.format(hours, "hour");
  }
  return relativeFmt.format(days, "day");
}
