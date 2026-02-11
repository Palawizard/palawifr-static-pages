const base64UrlToBytes = (s) => {
    const pad = '='.repeat((4 - (s.length % 4)) % 4)
    const b64 = (s + pad).replace(/-/g, '+').replace(/_/g, '/')
    const bin = atob(b64)
    const bytes = new Uint8Array(bin.length)
    for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i)
    return bytes
}

const sha256Hex = async (value) => {
    const enc = new TextEncoder().encode(value)
    const buf = await crypto.subtle.digest('SHA-256', enc)
    return [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, '0')).join('')
}

export const verifyUnlockToken = async (token) => {
    if (!token || typeof token !== 'string') return { ok: false }

    const expectedHash = String(import.meta.env.VITE_UNLOCK_LINK_SHA256 || '').toLowerCase().trim()
    if (!expectedHash) return { ok: false }

    const tokenHash = await sha256Hex(token)
    if (tokenHash.toLowerCase() !== expectedHash) return { ok: false }

    return { ok: true, payload: { m: 'full' } }
}

export const applyUnlockFromQuery = async (query) => {
    if (typeof window === 'undefined') return false

    const paramName = import.meta.env.VITE_UNLOCK_QUERY_PARAM || 'k'
    const token = query?.[paramName]
    if (!token) return false

    const result = await verifyUnlockToken(String(token))
    if (!result.ok) return false

    sessionStorage.setItem('authMode', 'full')
    return true
}

export const decodePayloadFromLegacyToken = (token) => {
    if (!token || typeof token !== 'string') return null
    const parts = token.split('.')
    if (parts.length !== 3) return null
    if (parts[0] !== 'v1') return null
    try {
        const payloadBytes = base64UrlToBytes(parts[1])
        return JSON.parse(new TextDecoder().decode(payloadBytes))
    } catch {
        return null
    }
}
