import { useState, useEffect } from 'react'
import { THEMES, DEFAULT_THEME, STORAGE_KEY } from '../constants/theme'

// এই hook টা theme পড়া, বদলানো, এবং localStorage sync — সবকিছু এক জায়গায় সামলাবে।
// এখন থেকে কোনো component এ directly localStorage বা data-theme নিয়ে কাজ করতে হবে না।
export function useTheme() {
  const [theme, setThemeState] = useState(
    () => localStorage.getItem(STORAGE_KEY) || DEFAULT_THEME
  )

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem(STORAGE_KEY, theme)
  }, [theme])

  // MutationObserver রাখা হচ্ছে যাতে DOM এ সরাসরি attribute বদলালেও (অন্য কোনো জায়গা থেকে)
  // state sync থাকে — যদিও এখন সব change এই hook এর মধ্য দিয়েই হবে, তবু safety এর জন্য রাখা ভালো
  useEffect(() => {
    const observer = new MutationObserver(() => {
      const current = document.documentElement.getAttribute('data-theme')
      setThemeState(current)
    })
    observer.observe(document.documentElement, { attributes: true })
    return () => observer.disconnect()
  }, [])

  const toggleTheme = () => {
    setThemeState((prev) =>
      prev === THEMES.PRIMARY ? THEMES.SECONDARY : THEMES.PRIMARY
    )
  }

  return { theme, toggleTheme, isPrimary: theme === THEMES.PRIMARY }
}