'use client'

import { useState, useRef, useEffect } from 'react'
import { ArrowLeft, Download, QrCode, Link, Type, Copy, Check } from 'lucide-react'

interface QRGeneratorProps {
  onBack: () => void
}

export default function QRGenerator({ onBack }: QRGeneratorProps) {
  const [inputType, setInputType] = useState<'text' | 'url'>('url')
  const [inputValue, setInputValue] = useState('')
  const [qrCode, setQrCode] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const generateQR = async () => {
    if (!inputValue.trim()) return

    try {
      const QRCode = (await import('qrcode')).default
      const canvas = canvasRef.current
      if (canvas) {
        await QRCode.toCanvas(canvas, inputValue, {
          width: 300,
          margin: 2,
          color: {
            dark: '#000000',
            light: '#ffffff'
          }
        })
        setQrCode(canvas.toDataURL('image/png'))
      }
    } catch (error) {
      console.error('Error generating QR code:', error)
    }
  }

  const downloadQR = () => {
    if (qrCode) {
      const link = document.createElement('a')
      link.download = 'qrcode.png'
      link.href = qrCode
      link.click()
    }
  }

  const copyToClipboard = async () => {
    if (qrCode) {
      const canvas = canvasRef.current
      if (canvas) {
        canvas.toBlob(async (blob) => {
          if (blob) {
            await navigator.clipboard.write([
              new ClipboardItem({ 'image/png': blob })
            ])
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
          }
        })
      }
    }
  }

  useEffect(() => {
    if (inputValue.trim()) {
      generateQR()
    }
  }, [inputValue, inputType])

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
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
            <QrCode className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Генератор QR-кодів</h1>
            <p className="text-gray-600">Створіть QR-код для посилання або тексту</p>
          </div>
        </div>

        {/* Input Type Toggle */}
        <div className="flex gap-2 mb-4">
          <button
            onClick={() => setInputType('url')}
            className={`flex-1 py-3 px-4 rounded-xl font-medium transition-all flex items-center justify-center gap-2 ${
              inputType === 'url'
                ? 'bg-blue-500 text-white shadow-lg'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            <Link className="w-4 h-4" />
            Посилання
          </button>
          <button
            onClick={() => setInputType('text')}
            className={`flex-1 py-3 px-4 rounded-xl font-medium transition-all flex items-center justify-center gap-2 ${
              inputType === 'text'
                ? 'bg-blue-500 text-white shadow-lg'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            <Type className="w-4 h-4" />
            Текст
          </button>
        </div>

        {/* Input Field */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {inputType === 'url' ? 'Введіть URL' : 'Введіть текст'}
          </label>
          {inputType === 'url' ? (
            <input
              type="url"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="https://example.com"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
          ) : (
            <textarea
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Введіть текст для QR-коду..."
              rows={3}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
            />
          )}
        </div>

        {/* QR Code Display */}
        <div className="bg-gray-50 rounded-xl p-6 mb-6 flex flex-col items-center">
          <canvas ref={canvasRef} className="hidden" />
          {qrCode ? (
            <>
              <img src={qrCode} alt="QR Code" className="w-64 h-64 rounded-lg shadow-md mb-4" />
              <div className="flex gap-3">
                <button
                  onClick={downloadQR}
                  className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                >
                  <Download className="w-4 h-4" />
                  Завантажити
                </button>
                <button
                  onClick={copyToClipboard}
                  className="flex items-center gap-2 bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors"
                >
                  {copied ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
                  {copied ? 'Скопійовано!' : 'Копіювати'}
                </button>
              </div>
            </>
          ) : (
            <div className="w-64 h-64 bg-white rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center">
              <p className="text-gray-400 text-center px-4">
                Введіть текст або посилання для створення QR-коду
              </p>
            </div>
          )}
        </div>

        {/* Generate Button */}
        <button
          onClick={generateQR}
          disabled={!inputValue.trim()}
          className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold py-4 px-6 rounded-xl hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Згенерувати QR-код
        </button>

        {/* Tips */}
        <div className="mt-6 p-4 bg-blue-50 rounded-xl">
          <h3 className="font-medium text-blue-800 mb-2">💡 Поради щодо QR-кодів:</h3>
          <ul className="text-sm text-blue-700 space-y-1">
            <li>• QR-коди можна сканувати камерою телефону</li>
            <li>• Використовуйте для швидкого обміну посиланнями</li>
            <li>• Можна друкувати на візитках та рекламі</li>
            <li>• Завантажте у високій якості для друку</li>
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