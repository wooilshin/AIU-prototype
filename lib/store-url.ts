/** External store URL — set NEXT_PUBLIC_STORE_URL when the shop site is ready. */
export const STORE_URL = process.env.NEXT_PUBLIC_STORE_URL?.trim() || ''

export function getStoreHref(): string {
  return STORE_URL || '/#store'
}

export function isExternalStoreLink(): boolean {
  return Boolean(STORE_URL)
}
