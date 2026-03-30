'use client'

import { useState } from 'react'
import { Shield, QrCode, Type, Calculator, Palette, Clock, ChevronRight, Star, Zap, Lock, Crown, Mail, Gift, Percent, Check } from 'lucide-react'
import PasswordGenerator from './components/PasswordGenerator'
import QRGenerator from './components/QRGenerator'
import TextConverter from './components/TextConverter'

export default function Home() {
  const [activeTool, setActiveTool] = useState<string | null>(null)
  const [email, setEmail] = useState('')
  const [emailSubmitted, setEmailSubmitted] = useState(false)
  const [showPremiumModal, setShowPremiumModal] = useState(false)

  const tools = [
    {
      id: 'password',
      title: 'Генератор паролів',
      description: 'Створюйте надійні паролі одним кліком',
      icon: Shield,
      color: 'from-red-500 to-pink-500',
      popular: true,
      premium: false
    },
    {
      id: 'qr',
      title: 'Генератор QR-кодів',
      description: 'Перетворюйте текст та посилання в QR-коди',
      icon: QrCode,
      color: 'from-blue-500 to-cyan-500',
      popular: true,
      premium: false
    },
    {
      id: 'text',
      title: 'Конвертер тексту',
      description: 'Змінюйте регістр, рахуйте символи та слова',
      icon: Type,
      color: 'from-green-500 to-emerald-500',
      popular: false,
      premium: false
    },
    {
      id: 'calculator',
      title: 'Калькулятор',
      description: 'Звичайний та науковий калькулятор',
      icon: Calculator,
      color: 'from-purple-500 to-violet-500',
      popular: false,
      premium: true
    },
    {
      id: 'color',
      title: 'Конвертер кольорів',
      description: 'HEX, RGB, HSL конвертер',
      icon: Palette,
      color: 'from-orange-500 to-amber-500',
      popular: false,
      premium: true
    },
    {
      id: 'timer',
      title: 'Таймер та Pomodoro',
      description: 'Зручний таймер для продуктивності',
      icon: Clock,
      color: 'from-teal-500 to-cyan-500',
      popular: false,
      premium: true
    }
  ]

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      // Тут буде інтеграція з email сервісом (Mailchimp, ConvertKit тощо)
      console.log('Email collected:', email)
      setEmailSubmitted(true)
      setTimeout(() => setEmailSubmitted(false), 3000)
    }
  }

  const renderTool = () => {
    switch (activeTool) {
      case 'password':
        return <PasswordGenerator onBack={() => setActiveTool(null)} />
      case 'qr':
        return <QRGenerator onBack={() => setActiveTool(null)} />
      case 'text':
        return <TextConverter onBack={() => setActiveTool(null)} />
      default:
        return null
    }
  }

  if (activeTool) {
    return renderTool()
  }

  return (
    <main className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Header */}
      <header className="text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
          <Zap className="w-4 h-4" />
          100% Безкоштовно
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          ToolHub
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Найкращі безкоштовні онлайн інструменти для щоденних завдань. 
          Швидко, безпечно, без реєстрації.
        </p>
      </header>

      {/* Email Collection Banner */}
      <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-6 mb-8 text-white">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Gift className="w-8 h-8 animate-bounce" />
            <div>
              <h3 className="font-bold text-lg">🎁 Отримайте БЕЗКОШТОВНІ бонуси!</h3>
              <p className="text-green-100 text-sm">Підпишіться та отримайте чек-лист з 50+ інструментів для продуктивності</p>
            </div>
          </div>
          <form onSubmit={handleEmailSubmit} className="flex gap-2 w-full md:w-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Ваш email"
              className="px-4 py-2 rounded-lg text-gray-800 w-full md:w-64 focus:ring-2 focus:ring-white"
              required
            />
            <button 
              type="submit"
              className="bg-white text-green-600 font-bold px-6 py-2 rounded-lg hover:bg-green-50 transition-colors flex items-center gap-2 whitespace-nowrap"
            >
              <Mail className="w-4 h-4" />
              {emailSubmitted ? <Check className="w-4 h-4" /> : 'Підписатись'}
            </button>
          </form>
        </div>
      </div>

      {/* Premium Banner */}
      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl p-6 mb-8 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>
        <div className="relative flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Crown className="w-8 h-8 text-yellow-200" />
            <div>
              <h3 className="font-bold text-lg">⭐ ToolHub Premium</h3>
              <p className="text-yellow-100 text-sm">Відкрийте ВСІ інструменти + без реклами + ексклюзивні функції</p>
            </div>
          </div>
          <button 
            onClick={() => setShowPremiumModal(true)}
            className="bg-white text-orange-600 font-bold px-6 py-3 rounded-lg hover:bg-orange-50 transition-all hover:scale-105 shadow-lg flex items-center gap-2"
          >
            <Crown className="w-5 h-5" />
            Спробувати 7 днів БЕЗКОШТОВНО
          </button>
        </div>
      </div>

      {/* Ad Banner Top */}
      <div className="ad-container rounded-xl p-8 mb-8 text-center">
        <p className="text-gray-500 text-sm mb-2">📢 Рекламний блок</p>
        <div className="bg-white rounded-lg p-6 border-2 border-dashed border-gray-300">
          <p className="text-gray-400">Тут буде ваша реклама Google AdSense</p>
          <p className="text-xs text-gray-400 mt-2">728x90 або адаптивний банер</p>
        </div>
      </div>

      {/* Tools Grid */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
          <Star className="w-6 h-6 text-yellow-500" />
          Популярні інструменти
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool) => (
            <div
              key={tool.id}
              onClick={() => !tool.premium ? setActiveTool(tool.id) : setShowPremiumModal(true)}
              className={`tool-card bg-white rounded-2xl p-6 shadow-lg cursor-pointer relative overflow-hidden ${
                tool.premium ? 'border-2 border-yellow-400' : ''
              }`}
            >
              {tool.popular && (
                <div className="absolute top-3 right-3 bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-1 rounded-full">
                  🔥 Популярне
                </div>
              )}
              {tool.premium && (
                <div className="absolute top-3 right-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
                  <Crown className="w-3 h-3" />
                  PRO
                </div>
              )}
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${tool.color} flex items-center justify-center mb-4`}>
                {tool.premium ? (
                  <Lock className="w-7 h-7 text-white" />
                ) : (
                  <tool.icon className="w-7 h-7 text-white" />
                )}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{tool.title}</h3>
              <p className="text-gray-600 mb-4">{tool.description}</p>
              <div className="flex items-center text-primary-600 font-medium">
                {tool.premium ? (
                  <>
                    <Lock className="w-4 h-4 mr-1" />
                    Відкрити PRO
                  </>
                ) : (
                  <>
                    Використати <ChevronRight className="w-4 h-4 ml-1" />
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          💎 Оберіть тариф
        </h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {/* Безкоштовний */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-200">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Безкоштовний</h3>
            <div className="text-3xl font-bold text-gray-800 mb-4">$0<span className="text-lg text-gray-500">/міс</span></div>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center gap-2 text-gray-600">
                <Check className="w-4 h-4 text-green-500" />
                3 базових інструменти
              </li>
              <li className="flex items-center gap-2 text-gray-600">
                <Check className="w-4 h-4 text-green-500" />
                З рекламою
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Lock className="w-4 h-4" />
                Обмежений функціонал
              </li>
            </ul>
            <button className="w-full py-3 border-2 border-gray-300 rounded-xl font-bold text-gray-600 hover:bg-gray-50 transition-colors">
              Поточний тариф
            </button>
          </div>

          {/* PRO місячний */}
          <div className="bg-gradient-to-br from-primary-500 to-purple-600 rounded-2xl p-6 shadow-xl text-white relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full">
              ПОПУЛЯРНИЙ
            </div>
            <h3 className="text-xl font-bold mb-2">PRO Місячний</h3>
            <div className="text-3xl font-bold mb-4">$9.99<span className="text-lg opacity-80">/міс</span></div>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4" />
                ВСІ інструменти
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4" />
                Без реклами
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4" />
                Пріоритетна підтримка
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4" />
                Експорт в PDF
              </li>
            </ul>
            <button 
              onClick={() => window.open('https://buy.stripe.com/your-payment-link', '_blank')}
              className="w-full py-3 bg-white text-primary-600 rounded-xl font-bold hover:bg-gray-100 transition-colors"
            >
              Спробувати 7 днів безкоштовно
            </button>
          </div>

          {/* PRO річний */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-yellow-400 relative">
            <div className="absolute -top-3 right-3 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
              -40%
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">PRO Річний</h3>
            <div className="text-3xl font-bold text-gray-800 mb-4">$69.99<span className="text-lg text-gray-500">/рік</span></div>
            <div className="text-sm text-gray-500 mb-4">Всього $5.83/міс</div>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center gap-2 text-gray-600">
                <Check className="w-4 h-4 text-green-500" />
                ВСІ переваги PRO
              </li>
              <li className="flex items-center gap-2 text-gray-600">
                <Check className="w-4 h-4 text-green-500" />
                Економія 40%
              </li>
              <li className="flex items-center gap-2 text-gray-600">
                <Check className="w-4 h-4 text-green-500" />
                Ранній доступ до нових функцій
              </li>
            </ul>
            <button 
              onClick={() => window.open('https://buy.stripe.com/your-yearly-link', '_blank')}
              className="w-full py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-xl font-bold hover:shadow-lg transition-all"
            >
              Обрати річний
            </button>
          </div>
        </div>
      </section>

      {/* Ad Banner Middle */}
      <div className="ad-container rounded-xl p-8 mb-8 text-center">
        <p className="text-gray-500 text-sm mb-2">📢 Рекламний блок</p>
        <div className="bg-white rounded-lg p-6 border-2 border-dashed border-gray-300">
          <p className="text-gray-400">Тут буде ваша реклама Google AdSense</p>
          <p className="text-xs text-gray-400 mt-2">336x280 або адаптивний блок</p>
        </div>
      </div>

      {/* Features Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Чому обирають ToolHub?
        </h2>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="font-bold text-gray-800 mb-2">Швидко</h3>
            <p className="text-gray-600 text-sm">Миттєва робота без затримок</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lock className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="font-bold text-gray-800 mb-2">Безпечно</h3>
            <p className="text-gray-600 text-sm">Ваші дані залишаються у вас</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="font-bold text-gray-800 mb-2">Безкоштовно</h3>
            <p className="text-gray-600 text-sm">Жодних прихованих платежів</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Crown className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="font-bold text-gray-800 mb-2">PRO</h3>
            <p className="text-gray-600 text-sm">Преміум функції для профі</p>
          </div>
        </div>
      </section>

      {/* Affiliate Section */}
      <section className="bg-gradient-to-r from-primary-500 to-purple-600 rounded-2xl p-8 text-white text-center mb-8">
        <h2 className="text-2xl font-bold mb-4">💡 Потрібен професійний сайт?</h2>
        <p className="mb-6 opacity-90">
          Замовте розробку сайту або додатку у наших партнерів
        </p>
        <a 
          href="https://example.com/ref/toolhub" 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-primary-600 font-bold px-8 py-3 rounded-full hover:shadow-lg transition-all"
        >
          Дізнатися більше →
        </a>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-500 text-sm">
        <p>© 2024 ToolHub. Всі права захищено.</p>
        <p className="mt-2">
          <a href="/privacy" className="hover:text-primary-600">Політика конфіденційності</a>
          {' • '}
          <a href="/terms" className="hover:text-primary-600">Умови використання</a>
        </p>
      </footer>

      {/* Premium Modal */}
      {showPremiumModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-8 relative">
            <button 
              onClick={() => setShowPremiumModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              ✕
            </button>
            <div className="text-center">
              <Crown className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Спробуйте PRO</h3>
              <p className="text-gray-600 mb-6">7 днів безкоштовно, потім $9.99/міс</p>
              <div className="space-y-3">
                <button 
                  onClick={() => window.open('https://buy.stripe.com/your-payment-link', '_blank')}
                  className="w-full py-3 bg-gradient-to-r from-primary-500 to-purple-600 text-white rounded-xl font-bold hover:shadow-lg transition-all"
                >
                  Розпочати 7-денний trial
                </button>
                <button 
                  onClick={() => setShowPremiumModal(false)}
                  className="w-full py-3 border-2 border-gray-300 text-gray-600 rounded-xl font-bold hover:bg-gray-50 transition-colors"
                >
                  Може пізніше
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}