'use client'

import { useState, useCallback } from 'react'
import { ArrowLeft, Copy, RefreshCw, Shield, Check } from 'lucide-react'

interface PasswordGeneratorProps {
  onBack: () => void
}

export default function PasswordGenerator({ onBack }: PasswordGeneratorProps) {
  const [password, setPassword] = useState('')
  const [length, setLength] = useState(16)
  const [includeUppercase, setIncludeUppercase] = useState(true)
  const [includeLowercase, setIncludeLowercase] = useState(true)
  const [includeNumbers, setIncludeNumbers] = useState(true)
  const [includeSymbols, setIncludeSymbols] = useState(true)
  const [copied, setCopied] = useState(false)

  const generatePassword = useCallback(() => {
    let charset = ''
    if (includeUppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    if (includeLowercase) charset += 'abcdefghijklmnopqrstuvwxyz'
    if (includeNumbers) charset += '0123456789'
    if (includeSymbols) charset += '!@#$%^&*()_+-=[]{}|;:,.<>?'

    if (charset === '') {
      setPassword('Оберіть хоча б один параметр')
      return
    }

    let result = ''
    for (let i = 0; i < length; i++) {
      result += charset.charAt(Math.floor(Math.random() * charset.length))
    }
    setPassword(result)
    setCopied(false)
  }, [length, includeUppercase, includeLowercase, includeNumbers, includeSymbols])

  const copyToClipboard = async () => {
    if (password && password !== 'Оберіть хоча б один параметр') {
      await navigator.clipboard.writeText(password)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const getPasswordStrength = () => {
    if (!password || password === 'Оберіть хоча б один параметр') return { level: 0, text: '', color: '' }
    
    let score = 0
    if (password.length >= 12) score++
    if (password.length >= 16) score++
    if (/[A-Z]/.test(password)) score++
    if (/[a-z]/.test(password)) score++
    if (/[0-9]/.test(password)) score++
    if (/[^A-Za-z0-9]/.test(password)) score++

    if (score <= 2) return { level: 1, text: 'Слабкий', color: 'bg-red-500' }
    if (score <= 4) return { level: 2, text: 'Середній', color: 'bg-yellow-500' }
    return { level: 3, text: 'Надійний', color: 'bg-green-500' }
  }

  const strength = getPasswordStrength()

  return (
    <main className="container mx-auto px-4 py-8 max-w-2xl">
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-gray-600 hover:text-primary-600 mb-6 transition-colors"
      >
        <ArrowLeft className="w-5 h-5" />
        Назад до інструментів
      </button>

      <div className="bg-white rounded-2xl shadow-xl p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-pink-500 flex items-center justify-center">
            <Shield className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Генератор паролів</h1>
            <p className="text-gray-600">Створіть надійний пароль одним кліком</p>
          </div>
        </div>

        {/* Password Display */}
        <div className="bg-gray-50 rounded-xl p-4 mb-6">
          <div className="flex items-center justify-between gap-4">
            <code className="text-lg md:text-xl font-mono break-all flex-1 text-gray-800">
              {password || 'Натисніть "Згенерувати"'}
            </code>
            <button
              onClick={copyToClipboard}
              disabled={!password || password === 'Оберіть хоча б один параметр'}
              className="p-3 bg-primary-100 hover:bg-primary-200 rounded-lg transition-colors disabled:opacity-50"
            >
              {copied ? <Check className="w-5 h-5 text-green-600" /> : <Copy className="w-5 h-5 text-primary-600" />}
            </button>
          </div>
          
          {password && password !== 'Оберіть хоча б один параметр' && (
            <div className="mt-3">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-sm text-gray-600">Надійність:</span>
                <span className="text-sm font-medium">{strength.text}</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className={`h-full ${strength.color} transition-all duration-300`}
                  style={{ width: `${(strength.level / 3) * 100}%` }}
                />
              </div>
            </div>
          )}
        </div>

        {/* Settings */}
        <div className="space-y-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Довжина: {length} символів
            </label>
            <input
              type="range"
              min="8"
              max="32"
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>8</span>
              <span>32</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={includeUppercase}
                onChange={(e) => setIncludeUppercase(e.target.checked)}
                className="w-5 h-5 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
              />
              <span className="text-gray-700">Великі літери (A-Z)</span>
            </label>

            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={includeLowercase}
                onChange={(e) => setIncludeLowercase(e.target.checked)}
                className="w-5 h-5 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
              />
              <span className="text-gray-700">Малі літери (a-z)</span>
            </label>

            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={includeNumbers}
                onChange={(e) => setIncludeNumbers(e.target.checked)}
                className="w-5 h-5 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
              />
              <span className="text-gray-700">Цифри (0-9)</span>
            </label>

            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={includeSymbols}
                onChange={(e) => setIncludeSymbols(e.target.checked)}
                className="w-5 h-5 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
              />
              <span className="text-gray-700">Символи (!@#$)</span>
            </label>
          </div>
        </div>

        {/* Generate Button */}
        <button
          onClick={generatePassword}
          className="w-full bg-gradient-to-r from-red-500 to-pink-500 text-white font-bold py-4 px-6 rounded-xl hover:shadow-lg transition-all flex items-center justify-center gap-2"
        >
          <RefreshCw className="w-5 h-5" />
          Згенерувати пароль
        </button>

        {/* Tips */}
        <div className="mt-6 p-4 bg-blue-50 rounded-xl">
          <h3 className="font-medium text-blue-800 mb-2">💡 Поради щодо паролів:</h3>
          <ul className="text-sm text-blue-700 space-y-1">
            <li>• Використовуйте унікальні паролі для кожного сайту</li>
            <li>• Зберігайте паролі в менеджері паролів</li>
            <li>• Не використовуйте особисту інформацію в паролях</li>
            <li>• Змінюйте паролі регулярно</li>
          </ul>
        </div>
      </div>

      {/* Ad Block */}
      <div className="ad-container rounded-xl p-6 mt-8 text-center">
        <p className="text-gray-500 text-sm mb-2">📢 Рекламний блок</p>
        <div className="bg-white rounded-lg p-4 border-2 border-dashed border-gray-300">
          <p className="text-gray-400 text-sm">Google AdSense</p>
        </div>
      </div>
    </main>
  )
}