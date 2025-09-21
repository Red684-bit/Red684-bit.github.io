$(function() {
  (() => {
    'use strict'

    const getStoredTheme = () => localStorage.getItem('theme')
    const setStoredTheme = theme => localStorage.setItem('theme', theme)

    const script_dark = document.createElement("script")
    script_dark.src = "//code.jquery.com/ui/1.13.2/themes/base/jquery-ui.css"

    const script_light = document.createElement("script")
    script_light.src = "//code.jquery.com/ui/1.13.2/themes/sunny/jquery-ui.css"
  

    const getPreferredTheme = () => {
      const storedTheme = getStoredTheme()
      if (storedTheme) {
        return storedTheme
      }

      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    }

    const setTheme = theme => {
      if (theme === 'auto') {
        document.documentElement.setAttribute('data-bs-theme', (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'))
      } else {
        document.documentElement.setAttribute('data-bs-theme', theme)
        if (document.documentElement.getAttribute('data-bs-theme') == 'light'){
          document.documentElement.setAttribute('data-bs-theme', 'light')
          updateThemeIcon('light')
          document.body.appendChild(script_light)
        }
        else {
          document.documentElement.setAttribute('data-bs-theme', 'dark')
          updateThemeIcon('dark')
          document.body.appendChild(script_dark)
        }
      }
    }

    setTheme(getPreferredTheme())

    // Function to update theme icon
    const updateThemeIcon = (theme) => {
      const btnSwitch = document.getElementById('btnSwitch')
      if (!btnSwitch) return
      
      const icon = btnSwitch.querySelector('svg')
      if (!icon) return
      
      if (theme === 'dark') {
        icon.innerHTML = `
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
        `
      } else {
        icon.innerHTML = `
          <circle cx="12" cy="12" r="5"/>
          <line x1="12" y1="1" x2="12" y2="3"/>
          <line x1="12" y1="21" x2="12" y2="23"/>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
          <line x1="1" y1="12" x2="3" y2="12"/>
          <line x1="21" y1="12" x2="23" y2="12"/>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
        `
      }
    }

    const showActiveTheme = (theme, focus = false) => {
      const themeSwitcher = document.querySelector('#bd-theme')

      if (!themeSwitcher) {
        return
      }

      const themeSwitcherText = document.querySelector('#bd-theme-text')
      const activeThemeIcon = document.querySelector('.theme-icon-active use')
      const btnToActive = document.querySelector(`[data-bs-theme-value="${theme}"]`)
      const svgOfActiveBtn = btnToActive.querySelector('svg use').getAttribute('href')

      document.querySelectorAll('[data-bs-theme-value]').forEach(element => {
        element.classList.remove('active')
        element.setAttribute('aria-pressed', 'false')
      })

      btnToActive.classList.add('active')
      btnToActive.setAttribute('aria-pressed', 'true')
      activeThemeIcon.setAttribute('href', svgOfActiveBtn)
      const themeSwitcherLabel = `${themeSwitcherText.textContent} (${btnToActive.dataset.bsThemeValue})`
      themeSwitcher.setAttribute('aria-label', themeSwitcherLabel)

      if (focus) {
        themeSwitcher.focus()
      }
    }

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
      const storedTheme = getStoredTheme()
      if (storedTheme !== 'light' && storedTheme !== 'dark') {
        setTheme(getPreferredTheme())
      }
    })

    document.getElementById('btnSwitch').addEventListener('click',()=>{
      const currentTheme = document.documentElement.getAttribute('data-bs-theme')
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark'
      
      document.documentElement.setAttribute('data-bs-theme', newTheme)
      setStoredTheme(newTheme)
      updateThemeIcon(newTheme)
      setTheme(newTheme)
      showActiveTheme(newTheme, true)
    })
    
    // Initialize theme icon on page load
    setTimeout(() => {
      const currentTheme = document.documentElement.getAttribute('data-bs-theme') || 'light'
      updateThemeIcon(currentTheme)
    }, 100)
  })()

});