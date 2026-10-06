'use client'

// Remembers how a visitor arrived (Google click IDs and UTM tags) so the enquiry email
// shows which ad or keyword produced the lead. Kept in this browser only, for 90 days
// (Google's offline-conversion window), and refreshed whenever a new ad click arrives.
const KEY = 'binfab-attribution'
const PARAMS = ['gclid', 'gbraid', 'wbraid', 'utm_source', 'utm_medium', 'utm_campaign', 'utm_term'] as const
const MAX_AGE_MS = 90 * 24 * 60 * 60 * 1000

export function captureAttribution() {
  try {
    const url = new URL(window.location.href)
    const found = Object.fromEntries(PARAMS.map((p) => [p, url.searchParams.get(p) || '']).filter(([, v]) => v))
    if (Object.keys(found).length) window.localStorage.setItem(KEY, JSON.stringify({ ...found, at: Date.now() }))
  } catch {
    // Storage can be blocked; attribution is optional.
  }
}

export function readAttribution(): Record<string, string> {
  try {
    const saved = JSON.parse(window.localStorage.getItem(KEY) || '{}') as Record<string, string | number>
    if (!saved.at || Date.now() - Number(saved.at) > MAX_AGE_MS) return {}
    return Object.fromEntries(PARAMS.filter((p) => typeof saved[p] === 'string').map((p) => [p, String(saved[p])]))
  } catch {
    return {}
  }
}
