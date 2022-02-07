<template>
  <div class="container">
    <client-only>
      <intersect @enter="animateFeatures">
        <span></span>
      </intersect>
    </client-only>

    <div class="flex flex-wrap lg:flex-nowrap md:px-24 text-gray-600">
      <transition name="fadeDown">
        <AppFeatureWithIcon
          v-show="featureVisibility0"
          title="5,26%"
          body="ctr личный рекорд(по кликабельному креативу)"
        >
          <template #icon>
            <outline-badge-check-icon
              class="w-12 h-12 md:w-16 md:h-16 text-purple-200 absolute -left-2 -top-4"
            />
          </template>
        </AppFeatureWithIcon>
      </transition>

      <transition name="fadeDown">
        <AppFeatureWithIcon
          v-show="featureVisibility1"
          title="75%"
          body="клиентов возвращаются обратно для сотрудничества"
        >
          <template #icon>
            <outline-user-group-icon
              class="w-12 h-12 md:w-16 md:h-16 text-purple-200 absolute -left-2 -top-4"
            />
          </template>
        </AppFeatureWithIcon>
      </transition>

      <transition name="fadeDown">
        <AppFeatureWithIcon
          v-show="featureVisibility2"
          title="2.000.000 ₽"
          body="успешно открученного бюджета"
        >
          <template #icon>
            <outline-cash-icon
              class="w-12 h-12 md:w-16 md:h-16 text-purple-200 absolute -left-2 -top-4"
            />
          </template>
        </AppFeatureWithIcon>
      </transition>

      <transition name="fadeDown">
        <AppFeatureWithIcon
          v-show="featureVisibility3"
          title="220.000 ₽"
          body="вложила в свое обучение"
        >
          <template #icon>
            <outline-academic-cap-icon
              class="w-12 h-12 md:w-16 md:h-16 text-purple-200 absolute -left-2 -top-4"
            />
          </template>
        </AppFeatureWithIcon>
      </transition>
    </div>
  </div>
</template>

<script>
import AppFeatureWithIcon from '@/components/AppFeatureWithIcon'

export default {
  components: {
    AppFeatureWithIcon,
  },

  data() {
    return {
      isFeaturesAnimated: !process.client,
      featureVisibility0: !process.client,
      featureVisibility1: !process.client,
      featureVisibility2: !process.client,
      featureVisibility3: !process.client,
    }
  },

  methods: {
    animateFeatures() {
      if (this.isFeaturesAnimated) {
        return
      }

      this.isFeaturesAnimated = true
      this.featureVisibility0 = true

      setTimeout(() => {
        this.featureVisibility1 = true
      }, 500)

      setTimeout(() => {
        this.featureVisibility2 = true
      }, 1000)

      setTimeout(() => {
        this.featureVisibility3 = true
      }, 1500)
    },
  },
}
</script>
