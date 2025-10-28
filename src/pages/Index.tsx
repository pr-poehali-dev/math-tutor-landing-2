import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 py-20 px-4">
        <div className="absolute inset-0 overflow-hidden opacity-5">
          <div className="absolute text-9xl font-bold text-primary top-10 left-10">π</div>
          <div className="absolute text-7xl font-bold text-accent top-40 right-20">∑</div>
          <div className="absolute text-8xl font-bold text-primary bottom-20 left-1/3">∫</div>
        </div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
                Репетитор по математике
              </h1>
              <p className="text-2xl text-primary font-semibold">Михаил</p>
              <p className="text-lg text-muted-foreground max-w-xl">
                Индивидуальный подход к каждому ученику. Помогу разобраться в математике и подготовлю к экзаменам. Занятия в районе Солнцево.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button size="lg" className="text-lg">
                  Записаться на занятие
                </Button>
                <Button size="lg" variant="outline" className="text-lg">
                  Узнать подробнее
                </Button>
              </div>
            </div>
            <div className="flex-1">
              <img 
                src="https://cdn.poehali.dev/files/40059724-5701-42a5-b28a-14be5c306b2f.jpg"
                alt="Михаил - репетитор по математике"
                className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Обо мне</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="GraduationCap" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Образование и опыт</h3>
                    <p className="text-muted-foreground">
                      Высшее педагогическое образование. Более 10 лет опыта преподавания математики. Успешно подготовил более 200 учеников к ОГЭ и ЕГЭ.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Target" className="text-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Мой подход</h3>
                    <p className="text-muted-foreground">
                      Индивидуальная программа для каждого ученика. Объясняю сложные темы простым языком. Акцент на понимание, а не зубрёжку формул.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Trophy" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Результаты учеников</h3>
                    <p className="text-muted-foreground">
                      Средний балл ЕГЭ моих учеников — 82. Повышение успеваемости в школе на 1-2 балла за первые 2 месяца занятий.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Heart" className="text-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Комфортная атмосфера</h3>
                    <p className="text-muted-foreground">
                      Создаю дружелюбную обстановку на занятиях. Поддерживаю мотивацию и уверенность в своих силах. Никакого стресса!
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Услуги</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Выберите формат занятий, который вам подходит
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-all hover:-translate-y-1">
              <CardContent className="pt-6 space-y-4">
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto">
                  <Icon name="User" className="text-primary" size={32} />
                </div>
                <h3 className="text-2xl font-semibold text-center">Индивидуальные занятия</h3>
                <p className="text-muted-foreground text-center">
                  Персональный подход, программа под ваши цели. Максимальная эффективность и внимание.
                </p>
                <ul className="space-y-2 pt-4">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-primary" size={20} />
                    <span>Гибкий график</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-primary" size={20} />
                    <span>Индивидуальная программа</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-primary" size={20} />
                    <span>90 минут занятие</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all hover:-translate-y-1 border-primary border-2">
              <CardContent className="pt-6 space-y-4">
                <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center mx-auto">
                  <Icon name="Users" className="text-accent" size={32} />
                </div>
                <h3 className="text-2xl font-semibold text-center">Подготовка к ОГЭ/ЕГЭ</h3>
                <p className="text-muted-foreground text-center">
                  Интенсивная подготовка к экзаменам. Разбор всех типов заданий и стратегии решения.
                </p>
                <ul className="space-y-2 pt-4">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-accent" size={20} />
                    <span>Пробные тесты</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-accent" size={20} />
                    <span>Разбор ошибок</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-accent" size={20} />
                    <span>120 минут занятие</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all hover:-translate-y-1">
              <CardContent className="pt-6 space-y-4">
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto">
                  <Icon name="BookOpen" className="text-primary" size={32} />
                </div>
                <h3 className="text-2xl font-semibold text-center">Помощь со школьной программой</h3>
                <p className="text-muted-foreground text-center">
                  Устраню пробелы в знаниях. Помогу с домашними заданиями и контрольными работами.
                </p>
                <ul className="space-y-2 pt-4">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-primary" size={20} />
                    <span>Все классы 5-11</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-primary" size={20} />
                    <span>Любая сложность</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-primary" size={20} />
                    <span>60 минут занятие</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="prices" className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Цены</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Честные и прозрачные цены без скрытых платежей
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 text-center space-y-6">
                <h3 className="text-2xl font-semibold">Разовое занятие</h3>
                <div>
                  <div className="text-5xl font-bold text-primary">1500₽</div>
                  <p className="text-muted-foreground mt-2">за занятие</p>
                </div>
                <ul className="space-y-3 text-left">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-primary" size={20} />
                    <span>90 минут</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-primary" size={20} />
                    <span>Материалы включены</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-primary" size={20} />
                    <span>Оплата после занятия</span>
                  </li>
                </ul>
                <Button className="w-full" variant="outline">
                  Записаться
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-accent border-2 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white px-4 py-1 rounded-full text-sm font-semibold">
                Популярный выбор
              </div>
              <CardContent className="pt-6 text-center space-y-6">
                <h3 className="text-2xl font-semibold">Абонемент 8 занятий</h3>
                <div>
                  <div className="text-5xl font-bold text-accent">10 800₽</div>
                  <p className="text-muted-foreground mt-2">1350₽ за занятие</p>
                  <p className="text-sm text-accent font-semibold mt-1">Экономия 1200₽</p>
                </div>
                <ul className="space-y-3 text-left">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-accent" size={20} />
                    <span>8 занятий по 90 минут</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-accent" size={20} />
                    <span>Все материалы</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-accent" size={20} />
                    <span>Связь между занятиями</span>
                  </li>
                </ul>
                <Button className="w-full bg-accent hover:bg-accent/90">
                  Выбрать
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 text-center space-y-6">
                <h3 className="text-2xl font-semibold">Интенсив ЕГЭ/ОГЭ</h3>
                <div>
                  <div className="text-5xl font-bold text-primary">2000₽</div>
                  <p className="text-muted-foreground mt-2">за занятие 120 мин</p>
                </div>
                <ul className="space-y-3 text-left">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-primary" size={20} />
                    <span>120 минут усиленно</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-primary" size={20} />
                    <span>Пробные тесты</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-primary" size={20} />
                    <span>Поддержка 24/7</span>
                  </li>
                </ul>
                <Button className="w-full" variant="outline">
                  Узнать больше
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Отзывы учеников</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 space-y-4">
                <div className="flex gap-1 mb-2">
                  {[1,2,3,4,5].map((star) => (
                    <Icon key={star} name="Star" className="text-accent fill-accent" size={20} />
                  ))}
                </div>
                <p className="text-muted-foreground">
                  "Михаил отличный преподаватель! За полгода занятий оценка по математике выросла с тройки до пятёрки. Объясняет понятно и терпеливо."
                </p>
                <div className="pt-4">
                  <p className="font-semibold">Анна, 9 класс</p>
                  <p className="text-sm text-muted-foreground">ученица</p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 space-y-4">
                <div className="flex gap-1 mb-2">
                  {[1,2,3,4,5].map((star) => (
                    <Icon key={star} name="Star" className="text-accent fill-accent" size={20} />
                  ))}
                </div>
                <p className="text-muted-foreground">
                  "Готовились к ЕГЭ 8 месяцев. Сдал на 86 баллов! Михаил помог разобраться даже в самых сложных темах. Рекомендую!"
                </p>
                <div className="pt-4">
                  <p className="font-semibold">Дмитрий, 11 класс</p>
                  <p className="text-sm text-muted-foreground">выпускник 2024</p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 space-y-4">
                <div className="flex gap-1 mb-2">
                  {[1,2,3,4,5].map((star) => (
                    <Icon key={star} name="Star" className="text-accent fill-accent" size={20} />
                  ))}
                </div>
                <p className="text-muted-foreground">
                  "Сын занимается уже год. Математика перестала быть кошмаром! Михаил находит подход, объясняет с примерами из жизни. Спасибо!"
                </p>
                <div className="pt-4">
                  <p className="font-semibold">Елена Петровна</p>
                  <p className="text-sm text-muted-foreground">мама ученика 7 класса</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Контакты</h2>
          <Card className="max-w-2xl mx-auto">
            <CardContent className="pt-6 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="MapPin" className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Местоположение</h3>
                  <p className="text-muted-foreground">Метро Солнцево, Москва</p>
                  <p className="text-sm text-muted-foreground mt-1">Занятия онлайн и оффлайн</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Phone" className="text-accent" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Телефон</h3>
                  <a href="tel:+79991234567" className="text-primary hover:underline text-lg">
                    +7 (999) 123-45-67
                  </a>
                  <p className="text-sm text-muted-foreground mt-1">Звоните с 9:00 до 21:00</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Mail" className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Email</h3>
                  <a href="mailto:mikhail.math@example.com" className="text-primary hover:underline">
                    mikhail.math@example.com
                  </a>
                  <p className="text-sm text-muted-foreground mt-1">Отвечу в течение дня</p>
                </div>
              </div>

              <div className="pt-6 border-t">
                <Button size="lg" className="w-full text-lg">
                  Записаться на пробное занятие
                </Button>
                <p className="text-center text-sm text-muted-foreground mt-3">
                  Первое занятие — бесплатное знакомство 30 минут
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-8 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-lg font-semibold mb-2">Михаил — Репетитор по математике</p>
          <p className="text-sm opacity-90">Солнцево, Москва • +7 (999) 123-45-67</p>
          <p className="text-xs opacity-75 mt-4">© 2024 Все права защищены</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;