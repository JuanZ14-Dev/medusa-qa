export function buildUniqueSuffix(): string {
  return `${Date.now()}-${Math.floor(Math.random() * 10000)}`
}

export const QA_TEST_DATA = {
  invalidEmail: "usuario-sin-arroba",
  emptyPassword: "",
  boundaryMinQty: 1,
  boundaryZeroQty: 0,
  boundaryHighQty: 99999,
  sampleShippingAddress: {
    first_name: "Ana",
    last_name: "Martinez",
    address_1: "Calle 100 # 15-20",
    city: "Bogota",
    country_code: "co",
    postal_code: "110111",
    phone: "3001234567",
  },
} as const
