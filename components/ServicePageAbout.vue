<template>
  <section>
    <div class="container md:py-5">
      <div class="max-w-screen-sm mx-auto">
        <app-heading-third title="Обо мне" />
        <ul
          class="list-inside text-md text-gray-600 md:text-lg tracking-wide font-light mb-16"
        >
          <li class="mb-3 md:mb-6">
            Я проходила обучение у разных наставников, каждый их них был
            интересен по своему. У меня большой опыт по настройке таргета. Вы
            можете быть спокойны за свой рекламный бюджет, я подберу эффективное
            решение для запуска рекламной кампании.
          </li>
          <li class="mb-3 md:mb-6">
            Instagram вовсе не социальная сеть, как может показаться на первый
            взгляд, это крупная рекламная площадка. На данный момент очень важно
            продвижение в Instagram учитывая количество мобильного трафика. Я
            запускаю оптимальные рекламные компании исходя из целей и бюджета.
          </li>
        </ul>
        <AppNastyaRoundedCard />
      </div>
    </div>
  </section>
</template>

<script>
import AppNastyaRoundedCard from '@/components/AppNastyaRoundedCard'

export default {
  components: {
    AppNastyaRoundedCard,
  },
}
</script>
