import { ref, computed } from 'vue'

const mode = ref('locked')
const password = ref('')
const showRequest = ref(false)
const currentUrl = ref('')
const errorMsg = ref('')
const isSubmitting = ref(false)

const realName = 'De Ménorval Baptiste'
const maskedName = 'Name Hidden'
const brandTitle = computed(() => (mode.value === 'full' ? realName : 'Portfolio'))

export const getSavedAuthMode = () => {
    if (typeof window === 'undefined') return 'locked'
    const saved = sessionStorage.getItem('authMode')
    return saved === 'full' || saved === 'lite' ? saved : 'locked'
}

const initFromSession = () => {
    mode.value = getSavedAuthMode()
}

if (typeof window !== 'undefined') initFromSession()

const setCurrentUrl = () => {
    if (typeof window === 'undefined') return
    currentUrl.value = window.location.href
}

const sha256Hex = async (value) => {
    const enc = new TextEncoder().encode(value)
    const buf = await crypto.subtle.digest('SHA-256', enc)
    return [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, '0')).join('')
}

const unlock = async () => {
    errorMsg.value = ''
    if (!password.value.trim()) {
        errorMsg.value = 'Please enter an access code.'
        return
    }

    const envPlain = String(import.meta.env.VITE_UNLOCK_PASSWORD || '')
    const envHash = String(import.meta.env.VITE_UNLOCK_PASSWORD_SHA256 || '').toLowerCase().trim()
    const legacyPlain = '?A$i&!ox@9'
    const input = password.value

    if (envPlain && input === envPlain) {
        mode.value = 'full'
        sessionStorage.setItem('authMode', 'full')
        password.value = ''
        return
    }

    if (envHash) {
        const inputHash = await sha256Hex(input)
        if (inputHash.toLowerCase() === envHash) {
            mode.value = 'full'
            sessionStorage.setItem('authMode', 'full')
            password.value = ''
            return
        }
    }

    if (input === legacyPlain) {
        mode.value = 'full'
        sessionStorage.setItem('authMode', 'full')
        password.value = ''
        return
    }

    errorMsg.value = 'Incorrect access code.'
}

const continueLite = () => {
    mode.value = 'lite'
    sessionStorage.setItem('authMode', 'lite')
}

const relock = () => {
    password.value = ''
    errorMsg.value = ''
    showRequest.value = false
    mode.value = 'locked'
    sessionStorage.removeItem('authMode')
    if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' })
}

const onRequestSubmit = () => {
    isSubmitting.value = true
    setTimeout(() => {
        isSubmitting.value = false
    }, 1200)
}

export const useAuthMode = () => {
    return {
        mode,
        password,
        showRequest,
        currentUrl,
        errorMsg,
        isSubmitting,
        realName,
        maskedName,
        brandTitle,
        initFromSession,
        setCurrentUrl,
        unlock,
        continueLite,
        relock,
        onRequestSubmit
    }
}
