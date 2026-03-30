export default function PrivacyPage() {
  return (
    <main className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Політика конфіденційності</h1>
        
        <div className="prose prose-gray max-w-none space-y-6">
          <section>
            <h2 className="text-xl font-semibold text-gray-700 mb-3">1. Загальні положення</h2>
            <p className="text-gray-600 leading-relaxed">
              Ця Політика конфіденційності визначає порядок збору, використання та захисту персональних даних користувачів сайту ToolHub. Ми зобов'язуємося захищати вашу конфіденційність та особисті дані.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-700 mb-3">2. Які дані ми збираємо</h2>
            <p className="text-gray-600 leading-relaxed mb-2">
              Наш сайт не вимагає реєстрації та не збирає особисті дані. Однак, ми можемо автоматично збирати:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-1">
              <li>IP-адресу</li>
              <li>Тип браузера та операційної системи</li>
              <li>Час відвідування та переглянуті сторінки</li>
              <li>Джерело переходу на сайт</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-700 mb-3">3. Cookies та аналітика</h2>
            <p className="text-gray-600 leading-relaxed">
              Ми використовуємо cookies та сервіси веб-аналітики (Google Analytics) для покращення роботи сайту та аналізу відвідуваності. Ви можете відключити cookies у налаштуваннях свого браузера.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-700 mb-3">4. Реклама</h2>
            <p className="text-gray-600 leading-relaxed">
              На нашому сайті показується реклама через Google AdSense. Google може використовувати cookies для показу релевантної реклами на основі ваших інтересів. Ви можете відмовитися від персоналізованої реклами в налаштуваннях Google.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-700 mb-3">5. Захист даних</h2>
            <p className="text-gray-600 leading-relaxed">
              Ми не передаємо ваші дані третім особам, за винятком випадків, передбачених законодавством. Всі дані обробляються на захищених серверах.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-700 mb-3">6. Ваші права</h2>
            <p className="text-gray-600 leading-relaxed">
              Ви маєте право на доступ до ваших даних, їх виправлення або видалення. З питань обробки персональних даних звертайтесь на нашу електронну пошту.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-700 mb-3">7. Зміни в політиці</h2>
            <p className="text-gray-600 leading-relaxed">
              Ми залишаємо за собою право змінювати цю політику конфіденційності. Зміни набирають чинності з моменту публікації на сайті.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-700 mb-3">8. Контакти</h2>
            <p className="text-gray-600 leading-relaxed">
              Якщо у вас є питання щодо політики конфіденційності, зв'яжіться з нами: privacy@toolhub.com
            </p>
          </section>

          <p className="text-sm text-gray-500 mt-8">
            Останнє оновлення: 30 березня 2024 року
          </p>
        </div>

        <div className="mt-8">
          <a 
            href="/"
            className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
          >
            ← Повернутися на головну
          </a>
        </div>
      </div>
    </main>
  )
}