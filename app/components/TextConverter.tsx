'use client'

import { useState } from 'react'
import { ArrowLeft, Type, Copy, Check, RotateCcw } from 'lucide-react'

interface TextConverterProps {
  onBack: () => void
}

export default function TextConverter({ onBack }: TextConverterProps) {
  const [inputText, setInputText] = useState('')
  const [copied, setCopied] = useState<string | null>(null)

  const stats = {
    characters: inputText.length,
    charactersNoSpaces: inputText.replace(/\s/g, '').length,
    words: inputText.trim() ? inputText.trim().split(/\s+/).length : 0,
    sentences: inputText.trim() ? inputText.split(/[.!?]+/).filter(s => s.trim()).length : 0,
    paragraphs: inputText.trim() ? inputText.split(/\n\n+/).filter(p => p.trim()).length : 0
  }

  const conversions = {
    uppercase: inputText.toUpperCase(),
    lowercase: inputText.toLowerCase(),
    capitalize: inputText.replace(/\b\w/g, l => l.toUpperCase()),
    sentenceCase: inputText.charAt(0).toUpperCase() + inputText.slice(1).toLowerCase(),
    alternating: inputText.split('').map((c, i) => i % 2 === 0 ? c.toLowerCase() : c.toUpperCase()).join(''),
    inverse: inputText.split('').map(c => c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()).join(''),
    removeSpaces: inputText.replace(/\s/g, ''),
    removeExtraSpaces: inputText.replace(/\s+/g, ' ').trim(),
    reverse: inputText.split('').reverse().join('')
  }

  const copyToClipboard = async (text: string, type: string) => {
    if (text) {
      await navigator.clipboard.writeText(text)
      setCopied(type)
      setTimeout(() => setCopied(null), 2000)
    }
  }

  const clearAll = () => {
    setInputText('')
  }

  return (
    <main className="container mx-auto px-4 py-8 max-w-4xl">
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-gray-600 hover:text-primary-600 mb-6 transition-colors"
      >
        <ArrowLeft className="w-5 h-5" />
        Назад до інструментів
      </button>

      <div className="bg-white rounded-2xl shadow-xl p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
            <Type className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Конвертер тексту</h1>
            <p className="text-gray-600">Перетворюйте текст та рахуйте символи</p>
          </div>
        </div>

        {/* Input Area */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <label className="text-sm font-medium text-gray-700">Введіть текст</label>
            <button
              onClick={clearAll}
              className="flex items-center gap-1 text-sm text-gray-500 hover:text-red-500 transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
              Очистити
            </button>
          </div>
          <textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Введіть або вставте текст для аналізу та перетворення..."
            rows={6}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all resize-none"
          />
        </div>

        {/* Statistics */}
        <div className="mb-6 p-4 bg-gray-50 rounded-xl">
          <h3 className="font-medium text-gray-800 mb-3">📊 Статистика тексту</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">{stats.characters}</div>
              <div className="text-xs text-gray-500">Символів</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">{stats.charactersNoSpaces}</div>
              <div className="text-xs text-gray-500">Без пробілів</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">{stats.words}</div>
              <div className="text-xs text-gray-500">Слів</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600">{stats.sentences}</div>
              <div className="text-xs text-gray-500">Речень</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-pink-600">{stats.paragraphs}</div>
              <div className="text-xs text-gray-500">Абзаців</div>
            </div>
          </div>
        </div>

        {/* Conversions */}
        <div className="space-y-4">
          <h3 className="font-medium text-gray-800">🔄 Перетворення тексту</h3>
          
          {Object.entries(conversions).map(([key, value]) => {
            const labels: Record<string, string> = {
              uppercase: 'ВЕРХНІЙ РЕГІСТР',
              lowercase: 'нижній регістр',
              capitalize: 'Кожне Слово Велике',
              sentenceCase: 'Перше речення велике',
              alternating: 'чЕрЕдУвАнНя',
              inverse: 'ІНВЕРТОВАНИЙ',
              removeSpaces: 'БезПробілів',
              removeExtraSpaces: 'Один пробіл між словами',
              reverse: '.ткетс ивиревер'
            }

            return (
              <div key={key} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                <div className="flex-1">
                  <div className="text-xs text-gray-500 mb-1">{labels[key]}</div>
                  <div className="text-sm text-gray-800 truncate">
                    {value || 'Введіть текст...'}
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard(value, key)}
                  disabled={!value}
                  className="p-2 bg-white rounded-lg hover:bg-gray-100 transition-colors disabled:opacity-50"
                >
                  {copied === key ? (
                    <Check className="w-4 h-4 text-green-600" />
                  ) : (
                    <Copy className="w-4 h-4 text-gray-600" />
                  )}
                </button>
              </div>
            )
          })}
        </div>

        {/* Tips */}
        <div className="mt-6 p-4 bg-green-50 rounded-xl">
          <h3 className="font-medium text-green-800 mb-2">💡 Поради:</h3>
          <ul className="text-sm text-green-700 space-y-1">
            <li>• Використовуйте для підготовки текстів для соцмереж</li>
            <li>• Рахуйте символи для SEO-оптимізації</li>
            <li>• Швидко змінюйте регістр тексту</li>
            <li>• Перевіряйте довжину тексту для обмежень</li>
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