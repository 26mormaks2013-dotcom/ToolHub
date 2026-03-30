export default function TermsPage() {
  return (
    <main className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Умови використання</h1>
        
        <div className="prose prose-gray max-w-none space-y-6">
          <section>
            <h2 className="text-xl font-semibold text-gray-700 mb-3">1. Загальні умови</h2>
            <p className="text-gray-600 leading-relaxed">
              Ці Умови використання регулюють порядок використання сайту ToolHub. Використовуючи наш сайт, ви погоджуєтесь з цими умовами в повному обсязі.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-700 mb-3">2. Опис послуг</h2>
            <p className="text-gray-600 leading-relaxed">
              ToolHub надає безкоштовні онлайн-інструменти для повсякденних завдань, включаючи генератор паролів, QR-кодів та конвертер тексту. Всі інструменти надаються "як є" без будь-яких гарантій.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-700 mb-3">3. Правила використання</h2>
            <p className="text-gray-600 leading-relaxed mb-2">
              Зобов'язуєтесь не використовувати сайт для:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-1">
              <li>Незаконної діяльності</li>
              <li>Поширення шкідливого програмного забезпечення</li>
              <li>Порушення прав інтелектуальної власності</li>
              <li>Спаму або несанкціонованої реклами</li>
              <li>Збору персональних даних інших користувачів</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-700 mb-3">4. Інтелектуальна власність</h2>
            <p className="text-gray-600 leading-relaxed">
              Весь контент сайту, включаючи дизайн, код, логотипи та текст, є власністю ToolHub та захищений авторським правом. Копіювання без дозволу заборонено.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-700 mb-3">5. Обмеження відповідальності</h2>
            <p className="text-gray-600 leading-relaxed">
              ToolHub не несе відповідальності за будь-які збитки, що виникли в результаті використання або неможливості використання наших інструментів. Ми не гарантуємо безперебійну роботу сайту.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-700 mb-3">6. Реклама та партнерські посилання</h2>
            <p className="text-gray-600 leading-relaxed">
              На сайті може показуватися реклама та партнерські посилання. Ми не несемо відповідальності за зміст зовнішніх сайтів або продукти, що рекламуються.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-700 mb-3">7. Зміни в умовах</h2>
            <p className="text-gray-600 leading-relaxed">
              Ми залишаємо за собою право змінювати ці умови в будь-який час. Продовження використання сайту після внесення змін означає вашу згоду з новими умовами.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-700 mb-3">8. Припинення доступу</h2>
            <p className="text-gray-600 leading-relaxed">
              Ми можемо заблокувати доступ до сайту будь-якому користувачу, який порушує ці умови, без попереднього повідомлення.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-700 mb-3">9. Контакти</h2>
            <p className="text-gray-600 leading-relaxed">
              Якщо у вас є питання щодо умов використання, зв'яжіться з нами: legal@toolhub.com
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