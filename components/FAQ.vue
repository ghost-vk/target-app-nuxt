<template>
  <section>
    <div class="container">
      <app-heading-third title="Отвечаю на ваши вопросы" />

      <div class="max-w-screen-sm mx-auto mb-6">
        <FAQCategoriesGroupButtons
          v-if="currentCategory !== 'course-facebook-2'"
          class="mb-2"
        />

        <transition name="fade">
          <div
            v-show="currentCategory === 'target-setup'"
            style="animation-duration: 0.2s"
          >
            <FAQItem>
              <template #title>Какой бюджет нужен на рекламу?</template>

              <template #body>
                Рассчитать бюджет на таргет можно с помощью формулы, которая
                находится на моем сайте. Самый минимальный бюджет, с которым я
                работаю 700 Р/сутки, но все зависит от целей для вашей рекламной
                кампании, и результата, к которому хочется придти.
              </template>
            </FAQItem>

            <FAQItem>
              <template #title>Как выстраивается работа с вами?</template>

              <template #body>
                Предварительно с вами планируем созвон, чтобы обсудить детали по
                вашему проекту и задачи которые вы ставите перед рекламной
                кампанией. После того, как мы приняли решение о сотрудничестве ,
                отправляю вам два брифа: основной и по целевой аудитории.
                Вносится первая часть оплаты. И начинается работа:
                предоставление доступа администратора к рекламному кабинету,
                изучение конкурентов, их воронки продаж и рекламы, поиск и
                создание аудиторий, написание офферов и создание рекламных
                макетов (которые обсуждаются с вами). Также выстраивается
                рекламная стратегия, по которой мы будем действовать( цели
                рекламных кампаний, распределение бюджета, макеты, аудитории).
                Создание пикселя и его установка на сайт( если необходимо) и
                также добавление событий на сайт.
                <br /><br />
                После чего осуществляется запуск рекламной кампании. Затем
                оптимизация, понижение стоимости клика. Отслеживание
                результатов, ежедневный контроль, масштабирование рекламной
                кампании.
              </template>
            </FAQItem>

            <FAQItem>
              <template #title>Какие гарантии вы можете предоставить?</template>

              <template #body>
                <ul class="list-inside list-disc">
                  <li class="mb-2">
                    Работа будет выполнена четко по плану и в срок Ежедневная
                    отчетность результатов, отслеживание результатов через
                    приложение «Реклама»( для клиента), ежедневная связь с
                    клиентом/ созвоны (если это необходимо)
                  </li>
                  <li class="mb-2">
                    Грамотный расход рекламного бюджета Рекламная кампания будет
                    настроена на целевую аудиторию, которую мы заранее обсудим и
                    пропишем в брифе по анализу ца. Расход рекламного бюджета
                    можно также можно отлеживать через приложение реклама.
                  </li>
                  <li class="mb-2">
                    Проведение тестирования и поиск рабочих связок Анализируем
                    страницу или сайт, на который отправляем трафик.
                    Разрабатываем гипотезы анализа целевой аудитории. Составляем
                    офферы для каждого сегмента целевой аудитории. Создаём
                    креативы. Запускаем тестовую рекламу.
                  </li>
                  <li class="mb-2">
                    Аналитика рекламных кампаний и улучшение показателей
                    Ежедневная аналитика показателей в рекламном кабинете,
                    оптимизация ( улучшение), масштабирование (получение
                    большего количества результатов).
                  </li>
                  <li class="mb-2">
                    Макеты и офферы согласовываются с клиентом Без утверждения
                    офферов и макетов для клиента, я не запускаю рекламную
                    кампанию. В данном случае клиент поможет и сориентирует вас,
                    потому что только он знает свою целевую аудиторию.
                  </li>
                </ul>
              </template>
            </FAQItem>

            <FAQItem>
              <template #title
                >Сколько нужно времени, чтобы подготовиться к рекламному
                запуску?
              </template>
              <template #body>От 3-х до 5-ти дней </template>
            </FAQItem>

            <FAQItem>
              <template #title
                >Нужно ли предоставлять логин и пароль от Facebook?</template
              >

              <template #body
                >Нет, я отправляю вам инструкцию по предоставлению доступа к
                рекламному кабинету или подключаюсь через удаленный доступ к
                вашему ПК через программу
                <a href="https://www.teamviewer.com/ru/" target="_blank"
                  ><AppBlueUnderlineLink>TeamViewer</AppBlueUnderlineLink></a
                >.
              </template>
            </FAQItem>

            <FAQItem>
              <template #title
                >В ваши услуги уже входит рекламный бюджет?</template
              >

              <template #body
                >Нет, рекламный бюджет рассчитывается отдельно. Рассчитать можно
                по формуле, которая находится на моем сайте.
              </template>
            </FAQItem>

            <FAQItem>
              <template #title
                >Создание макетов входит в стоимость вашей работы?</template
              >

              <template #body
                >Да, макеты уже входят в стоимость. Количество макетов не
                ограничено, так как рекламных запусков будет осуществлено
                несколько.
              </template>
            </FAQItem>

            <FAQItem>
              <template #title>Где можно посмотреть ваши кейсы? </template>

              <template #body>
                Мои кейсы можно увидеть на
                <AppBlueUnderlineLink @click="$router.push('/cases')">
                  данной странице сайта
                </AppBlueUnderlineLink>
                или в инстаграм по хештегу
                <a
                  href="https://www.instagram.com/explore/tags/anastasi_target_%D0%BA%D0%B5%D0%B9%D1%81%D1%8B/"
                  target="_blank"
                >
                  <AppBlueUnderlineLink>
                    #anastasi_target_кейсы
                  </AppBlueUnderlineLink>
                </a>
              </template>
            </FAQItem>

            <FAQItem>
              <template #title
                >Сколько заявок/продаж я сделаю с XXX бюджета?</template
              >

              <template #body
                >К сожалению, данного ответа вам никто не даст, вся реклама
                состоит из предположений, догадок и ориентировочных цифр. Для
                того чтобы узнать сколько прибыли принесет реклама, нужно
                пробовать ее запускать, другого пути нет. Можно лишь попробовать
                прикинуть ориентировочную стоимость заявки/продажи, вы это
                можете сделать на странице AdCalculator нашего сайта. Для
                расчета будут необходимы некоторые статистические данные вашего
                бизнеса и цена перехода по рекламе.</template
              >
            </FAQItem>

            <FAQItem>
              <template #title>Какую работу выполняет таргетолог?</template>

              <template #body
                >Таргетолог настраивает рекламную кампанию на целевую аудиторию.
                В кампании используются рекламные макеты, их стиль и текст
                (офферы) согласовываются с клиентом. Также таргетолог проводит
                ежедневный анализ и предоставляет отчет клиенту, спрашивает
                клиента о дневных результатах, в зависимости от этого
                корректируется ход рекламной кампании.</template
              >
            </FAQItem>
          </div>
        </transition>

        <transition name="fade">
          <div
            v-show="currentCategory === 'course-facebook-2'"
            style="animation-duration: 0.2s"
          >
            <FAQItem>
              <template #title>На какой период доступ к урокам?</template>

              <template #body>
                Доступ к урокам на 3 месяца. За это время можно не только успеть
                изучить уроки, но и пересмотреть их.
              </template>
            </FAQItem>

            <FAQItem>
              <template #title>Есть ли обратная связь?</template>

              <template #body>
                Да, на тарифе Optimal обратная связь 1 месяц + участие в
                мастермайнде.
              </template>
            </FAQItem>

            <FAQItem>
              <template #title>Сложно ли разобраться самому?</template>

              <template #body
                >Да, на тарифе Optimal обратная связь 1 месяц + участие в
                мастермайнде.</template
              >
            </FAQItem>

            <FAQItem>
              <template #title>Можно ли сменить тариф?</template>

              <template #body
                >Да, это возможно. Нужно лишь написать в техотдел @ник</template
              >
            </FAQItem>

            <FAQItem>
              <template #title>Долго ли длятся уроки?</template>

              <template #body
                >Уроки короткие от 2 - 10 минут, чтобы вы могли усвоить новую
                информацию и применить в действии.</template
              >
            </FAQItem>
          </div>
        </transition>

        <transition name="fade">
          <div
            v-show="currentCategory === 'consultation'"
            style="animation-duration: 0.2s"
          >
            <FAQItem>
              <template #title>Сколько длится консультация?</template>

              <template #body>
                Обычно 1-1,5 часа. Но практика показывает, что вопросов бывает
                много, поэтому консультация может продлиться до 2-х часов.
              </template>
            </FAQItem>

            <FAQItem>
              <template #title
                >В каком формате происходит консультация?</template
              >

              <template #body
                >Мы созваниваемся с вами в удобном для вас мессенджере, и
                обсуждаем все вопросы, которые есть. При необходимости
                подключаюсь к вашему компьютеру через удаленный доступ.
              </template>
            </FAQItem>

            <FAQItem>
              <template #title>Для кого подходит консультация?</template>

              <template #body>
                <ul class="list-inside list-disc mb-3">
                  <li class="mb-2">Для экспертов</li>
                  <li class="mb-2">Для предпринимателей/ владельцев бизнеса</li>
                  <li>Для всех, кто настраивает рекламные кампании</li>
                </ul>
                <p>
                  Моя консультация поможет вам разобраться если у вас есть
                  вопросы по улучшению результатов рекламных кампаний, если вы
                  не уверены в том, что правильно настраиваете рекламные
                  кампании, не понимаете как анализировать рекламные кампании
                  или не получается найти рабочую связку.
                </p>
              </template>
            </FAQItem>

            <FAQItem>
              <template #title
                >Что будет разбираться на консультации?
              </template>

              <template #body>
                <p class="mb-2">
                  На консультации разбираем ваши вопросы по: рекламным
                  кампаниям, макетам, офферам, сложные ситуации с клиентами.
                </p>
                <p>
                  Я даю четкие рекомендации по всем вашим вопросам, которые
                  останется только применить.
                </p>
              </template>
            </FAQItem>

            <FAQItem>
              <template #title
                >Нужно ли предоставлять логин/пароль от своего профиля Facebook?
              </template>

              <template #body>
                Нет, логин и пароль предоставлять не нужно. Потребуется только
                программа
                <a href="https://www.teamviewer.com/ru/" target="_blank"
                  ><AppBlueUnderlineLink>TeamViewer</AppBlueUnderlineLink></a
                >
                для подключения через удаленный доступ к вашему ПК, чтобы я
                смогла проанализировать ваши рекламные кампании.
              </template>
            </FAQItem>
          </div>
        </transition>

        <transition name="fade">
          <div
            v-show="currentCategory === 'mentor'"
            style="animation-duration: 0.2s"
          >
            <FAQItem>
              <template #title>Сколько длится менторство?</template>
              <template #body>1,5 месяца</template>
            </FAQItem>

            <FAQItem>
              <template #title>В каком формате проходит менторство?</template>
              <template #body
                >Общение происходит в мессенджере, удобном для вас. Помимо этого
                будут еженедельные встречи в Zoom.
              </template>
            </FAQItem>

            <FAQItem>
              <template #title>Для кого подходит менторство? </template>
              <template #body>
                <ul class="list-inside list-disc mb-3">
                  <li class="mb-2">
                    Вы только начинаете погружаться в профессию, и хочется сразу
                    грамотно разобраться в ней
                  </li>
                  <li class="mb-2">Не знаете, где искать первых клиентов</li>
                  <li class="mb-2">
                    Вы прошли обучение, но знаний на практике не хватает
                  </li>
                  <li class="mb-2">
                    Сомневаетесь в том, что правильно выстраиваете работу с
                    клиентом
                  </li>
                  <li class="mb-2">Боитесь работать с целью «конверсии»</li>
                  <li>Не решаетесь поднять стоимость своих услуг</li>
                </ul>
              </template>
            </FAQItem>

            <FAQItem>
              <template #title
                >Почему стоит пройти менторство, а не курс по таргету?</template
              >
              <template #body>
                <ul class="list-inside list-decimal mb-3">
                  <li class="mb-2">
                    Это индивидуальная работа, которая составляется из ваших
                    запросов. Составляется план, по которому мы будем вместе
                    двигаться к вашей цели.
                  </li>
                  <li class="mb-2">
                    Проработка страхов и убеждений. На своем опыте я четко
                    убедилась в том, что наши страхи, мешают нам двигаться
                    вперёд, увеличивать свой чек и становиться супер
                    специалистом. Большинство проходит обучение по таргету, но
                    не у всех получается выйти на высокий доход. И здесь в
                    помощь только работа с мышлением.
                  </li>
                  <li class="mb-2">
                    Вы прошли обучение, но знаний на практике не хватает
                  </li>
                  <li>
                    Упаковка вашего блога, проработка стратегии запуска
                    рекламной кампании. Запуск рекламной кампании на ваш блог.
                  </li>
                </ul>
              </template>
            </FAQItem>

            <FAQItem>
              <template #title
                >Подойдет ли мне менторство, если я совсем не разбираюсь в
                таргете?</template
              >
              <template #body>
                Да. Будем разбирать каждый вопрос по этапно, чтобы сложилась
                четкая структура. Я каждый день буду на связи, и вы сможете
                задавать все вопросы, которые не понятны.
              </template>
            </FAQItem>

            <FAQItem>
              <template #title
                >Останется ли у меня доступ к материалам, после окончания
                менторства?
              </template>
              <template #body>
                Да, все материалы останутся в доступе навсегда. Поэтому в любой
                момент к ним можно будет обратиться, и вспомнить детали, о
                которых забыли.
              </template>
            </FAQItem>

            <FAQItem>
              <template #title
                >Смогу ли я совмещать менторство и работу/учебу?
              </template>
              <template #body>
                Уроки будут в записи, и их можно посмотреть в любое время.
                Встречи в Zoom будут планироваться заранее, чтобы было
                максимально комфортно.
              </template>
            </FAQItem>
          </div>
        </transition>

        <app-title-with-button
          class="mt-8"
          :is-always-column="true"
          :is-event="true"
          title="Остались вопросы?"
          link-title="Задать вопрос"
          @handle="
            $store.dispatch('lead/showDialog', {
              source: 'Секция частозадаваемых вопросов',
              shouldCallback: true,
            })
          "
        />
      </div>
    </div>
  </section>
</template>

<script>
import FAQItem from '@/components/FAQItem.vue'
import FAQCategoriesGroupButtons from '@/components/FAQCategoriesGroupButtons.vue'

export default {
  components: {
    FAQItem,
    FAQCategoriesGroupButtons,
  },

  props: {
    category: {
      type: String,
      default() {
        return ''
      },
    },
  },

  computed: {
    currentCategory() {
      return this.$store.getters['faq/currentCategory']
    },
  },

  mounted() {
    if (this.category) {
      this.$store.dispatch('faq/changeCurrentCategory', this.category)
    }
  },
}
</script>
