export function formatCurrency(amount: number) {
  // Sử dụng phương thức toLocaleString để định dạng số về dạng tiền tệ VNĐ
  return amount.toLocaleString('vi', { style: 'currency', currency: 'VND' });
}
